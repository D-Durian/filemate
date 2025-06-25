# Document Management System (DMS)

This project is a Document Management System (DMS) that allows users to manage documents efficiently. It includes features for document storage, tagging, and Optical Character Recognition (OCR).

## Features

- **Ablagestruktur**: Organize documents in a structured manner.
- **Tagging**: Add relevant keywords or categories to documents for easy retrieval.
- **OCR**: Perform Optical Character Recognition on documents to extract text.

## Technologies Used

- **Frontend**: React
- **Backend**: TypeScript with Node.js
- **Containerization**: Docker

## Project Structure

```
dms-app
├── .devcontainer
│   ├── devcontainer.json
│   └── Dockerfile
├── backend
│   ├── src
│   │   ├── api
│   │   │   └── documents.ts
│   │   ├── services
│   │   │   ├── ocrService.ts
│   │   │   └── taggingService.ts
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── DocumentList.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd dms-app
   ```

2. Build and start the application using Docker Compose:
   ```
   docker-compose up --build
   ```

3. Access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.