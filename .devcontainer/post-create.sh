#!/bin/bash
set -e

echo "==== POST CREATE SCRIPT STARTED ===="

# 1. Debug Info
echo "Current User: $(whoami)"
echo "Workdir: $(pwd)"

# 2. Fix Permissions
# Ensure the vscode user owns the workspace
echo "Ensuring file ownership for vscode user..."
sudo chown -R vscode:vscode /workspaces/filemate

# 3. Backend Setup (Python/FastAPI)
if [ -f "backend/requirements.txt" ]; then
    echo "==== BACKEND: Installing Python Dependencies ===="
    if [ -f "/usr/local/bin/pip" ]; then
        pip install --no-cache-dir -r backend/requirements.txt
    else
        echo "WARNING: pip not found in expected path, trying just 'pip'"
        pip install --no-cache-dir -r backend/requirements.txt
    fi
else
    echo "==== BACKEND ERROR: No requirements.txt found! ===="
fi

# 4. Frontend Setup (React/Vite)
if [ -f "frontend/package.json" ]; then
    echo "==== FRONTEND: Installing Node Dependencies ===="
    cd frontend
    npm install
    cd ..
else
    echo "==== FRONTEND NOTICE: No package.json found in frontend/ ===="
fi

# 5. RClone Check
if command -v rclone &> /dev/null; then
    echo "==== RCLONE: Version $(rclone --version | head -n 1) is ready ===="
else
    echo "==== RCLONE NOTICE: rclone not found ===="
fi

echo "==== POST CREATE SCRIPT COMPLETED ===="