FROM node:18-bullseye

# Dev-Tools und Cypress-Dependencies
RUN apt-get update && apt-get install -y \
    git curl dumb-init \
    libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 \
    libasound2 libxtst6 xauth xvfb \
 && rm -rf /var/lib/apt/lists/*

# Optional: weitere Dev-Tools (vim, nano, etc.)
# RUN apt-get install -y vim nano

# Standard-Workdir auf das gesamte Projekt
WORKDIR /workspaces/filemate

ENV CI=1
ENV CHOKIDAR_USEPOLLING=1
ENV WATCHPACK_POLLING=true

EXPOSE 3000