import PyPDF2
import sys

def read_pdf(file_path):
    try:
        with open(file_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            for page_num in range(len(reader.pages)):
                text = reader.pages[page_num].extract_text()
                if text:
                    print(f"--- PAGE {page_num + 1} ---")
                    print(text)
    except Exception as e:
        print(f"Error: {e}")

read_pdf(sys.argv[1])
