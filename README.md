# FileMate – Intelligent Document Management System

 DMS with OCR capabilities, built with a focus on DevOps best practices and containerization.

## Architecture
- **Backend:** Python (FastAPI/Flask) with Tesseract OCR integration.
- **Frontend:** React 3 with Vite.
- **Storage:** PostgreSQL 



## Development Workflow
This project is designed to be developed entirely within a **Dev Container**.
1. Open folder in VS Code.
2. Click "Reopen in Container".
3. All dependencies (Python, Node, Docker, OCR-Libs) are pre-installed.

## CI/CD
Automated pipelines via GitHub Actions:
- Linting (Ruff/ESLint)
- Security Scans (Trivy)
- Docker Build & Push to Registry