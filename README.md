# Document Management System (DMS)

This project is a Document Management System (DMS) that allows users to manage documents efficiently. It includes features for document storage, tagging, and Optical Character Recognition (OCR).

## Features

- **Ablagestruktur**: Organize documents in a structured manner.
- **Tagging**: Add relevant keywords or categories to documents for easy retrieval.
- **OCR**: Perform Optical Character Recognition on documents to extract text.





1. Starte Backend (im Container):

```bash
cd backend
npm install
npx tsc -b
node dist/index.js
```

2. Starte das Frontend (im Container):

```bash
cd frontend
npm install
npm run dev
```

3. Testdaten sind vorhanden unter `test-data/location1` und `test-data/location2`. Im Frontend `SyncManager` kannst du diese Pfade hinzufügen (z. B. `/workspaces/filemate/test-data/location1`) und einen Sync starten.
