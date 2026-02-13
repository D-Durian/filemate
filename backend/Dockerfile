FROM python:3.11-slim-bullseye

RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    git \
    sudo \
    && curl https://rclone.org/install.sh | sudo bash \
    && rm -rf /var/lib/apt/lists/*

RUN useradd -m vscode && \
    echo vscode ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/vscode && \
    chmod 0440 /etc/sudoers.d/vscode

WORKDIR /workspaces/filemate/backend

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

RUN chown -R vscode:vscode /workspaces/filemate

USER vscode

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]