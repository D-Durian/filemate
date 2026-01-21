# Requirements Specification: FileMate (MVP)

## 1. Vision
FileMate is an intelligent Document Management System acting as a central interface between various storage locations (Local, Cloud, NAS). The MVP aims to synchronize data sets, visualize differences, and maintain consistent backups through user-approved actions.

## 2. Scope of MVP (User Stories)
* **Location Management:** As a user, I want to define and manage multiple source and target paths.
* **Scan & Diff:** As a user, I want to trigger a scan to identify differences (new, modified, or deleted files) between locations.
* **Manual Approval:** As a user, I want to review a list of detected differences and approve or reject them before any file operation occurs.
* **Conflict Handling:** As a user, I want to be notified if a file has changed in both locations to prevent accidental data loss.

## 3. Functional Requirements (FR)
* **FR1: Multi-Storage Support:** Support for local file systems, external drives, and cloud storage providers.
* **FR2: Advanced Comparison:** Files must be compared by filename, timestamp, and **SHA-256 hash values** to ensure data integrity.
* **FR3: Preview UI:** The frontend must provide a clear "Diff-View" contrasting the state of the selected locations.
* **FR4: Orchestrated Synchronization:** The system shall execute file operations (copy/move/delete) only after explicit user confirmation.

## 5. Non-Functional Requirements (NFR)
* **NFR1: Containerization:** The entire application must be deployable via Docker and orchestrated with Docker Compose.
* **NFR2: DevContainer Integration:** Full development environment must be encapsulated within a `.devcontainer` for "one-click" setup.
* **NFR3: Asynchronous Processing:** Scanning and syncing operations must run as background tasks to keep the UI responsive.
* **NFR4: Security & Privacy:** * Sensitive data (API keys, paths) must be handled via environment variables (`.env`).
    * No tracking or external data leakage of private document metadata.