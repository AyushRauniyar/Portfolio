import PyPDF2
import sys

pdf_path = r"c:\Users\Ayush.Rauniyar\OneDrive - Verint Systems Ltd\Desktop\Hackathon\Portfolio\Ayush_SDEIIJ (1).pdf"

try:
    with open(pdf_path, "rb") as f:
        pdf = PyPDF2.PdfReader(f)
        for page in pdf.pages:
            print(page.extract_text())
except Exception as e:
    print(f"Error: {e}")
    print("PyPDF2 not installed. Installing...")
    import subprocess
    subprocess.run([sys.executable, "-m", "pip", "install", "PyPDF2"])
