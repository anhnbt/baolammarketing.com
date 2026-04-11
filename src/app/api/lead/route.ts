import { NextResponse } from 'next/server';
import { leadFormSchema } from '@/features/lead-conversion/model/schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Basic validation
    const parsed = leadFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid input data', details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { fullName, phone, email, industry, budget, message, turnstileToken } = parsed.data;

    // 2. Verify Cloudflare Turnstile Token
    const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    });

    const verifyData = await verifyResponse.json();
    if (!verifyData.success) {
      return NextResponse.json(
        { error: 'Failed to verify human identity. Please try again.' },
        { status: 403 }
      );
    }

    // 3. Send to Google Sheets Webhook
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhookUrl && sheetsWebhookUrl.startsWith('http')) {
      try {
        await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName,
            phone,
            email,
            industry,
            budget,
            message: message || '',
            timestamp: new Date().toISOString()
          }),
        });
      } catch (sheetError) {
        console.error('Failed to send lead to Google Sheets:', sheetError);
        // We still return 200 to the user since the lead was valid, but maybe we should alert the admin
      }
    } else {
      console.warn('GOOGLE_SHEETS_WEBHOOK_URL is not fully configured, skipping webhook push.');
    }

    // 4. Return success
    return NextResponse.json({ success: true, message: 'Lead submitted successfully' });
  } catch (error) {
    console.error('API /lead error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
