#!/bin/bash
set -e

echo "==== POST CRATE SCRIPT STARTED ===="

# 1. Mount Check (Values printed for debugging)
echo "Current User: $(whoami)"
echo "Workdir: $(pwd)"

# 2. Fix Permissions (Crucial if valid user is not root)
# Ensure the node user can write to necessary directories
if [ -d "frontend" ]; then
    sudo chown -R node:node frontend
fi
if [ -d "backend" ]; then
    sudo chown -R node:node backend
fi

# 3. Backend Setup (Since we are in feature/backend)
if [ -f "backend/package.json" ]; then
    echo "==== BACKEND DETECTED: Installing Dependencies ===="
    cd backend
    npm install
    cd ..
else
    echo "==== BACKEND NOTICE: No package.json found in backend/ ===="
fi

# 4. Frontend Setup (Conditional)
if [ -f "frontend/package.json" ]; then
    echo "==== FRONTEND DETECTED: Installing Dependencies ===="
    cd frontend
    npm install
    # Only verify cypress if installed
    if [ -f "node_modules/.bin/cypress" ]; then
        npx cypress verify
    fi
    cd ..
else
    echo "==== FRONTEND NOTICE: No package.json found in frontend/ (Skipping install) ===="
fi

echo "==== POST CREATE SCRIPT COMPLETED ===="
