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




## TODO

- [ ] Persist registered locations (save to disk so they survive backend restarts)
- [ ] Add dry-run mode to the sync engine (report-only)
- [ ] Improve sync reports and error handling
- [ ] Add unit tests for the sync service
- [ ] Prepare packaging (Electron) for a Windows .exe build

## Aktueller Stand 

- Frontend: React + Vite app with a minimal `SyncManager` UI (add location, run sync, show report). File: `frontend/src/components/SyncManager.tsx`.
- Backend: Node + Express with a small SyncService that scans locations, compares files by relative path using mtime+size and copies newer files to other locations. Endpoints:
   - POST `/api/sync/locations` — registriert einen Speicherort (body: { path })
   - GET `/api/sync/locations` — listet registrierte Standorte
   - POST `/api/sync` — startet einen Sync-Job
   - GET `/api/sync/last` — liefert den letzten Sync-Report




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
