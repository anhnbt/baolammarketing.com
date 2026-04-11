import { z } from 'zod';

export const leadFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Tên phải có ít nhất 2 ký tự' }),
  phone: z.string().regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, { message: 'Số điện thoại không hợp lệ (cần 10 số)' }),
  email: z.string().email({ message: 'Email không hợp lệ' }),
  industry: z.enum(['FMCG', 'Electronics', 'Building Materials', 'Other']),
  budget: z.enum(['Under 500M', '500M - 2B', 'Over 2B']).optional(),
  message: z.string().optional(),
  turnstileToken: z.string({ required_error: 'Vui lòng chờ tải hoặc xác nhận captcha' }).min(1, { message: 'Vui lòng xác nhận bạn không phải là máy' }),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
