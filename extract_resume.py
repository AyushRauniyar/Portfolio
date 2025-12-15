import PyPDF2

with open('Ayush_SDEIIJ (1).pdf', 'rb') as pdf_file:
    reader = PyPDF2.PdfReader(pdf_file)
    text = ''
    for page in reader.pages:
        text += page.extract_text()
    
    print(text)
