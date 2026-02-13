# High Level Architecture

```mermaid
flowchart TD
    subgraph Host [Your Windows Machine]
        Browser[Web Browser]
        Code[VS Code UI]
    end

    subgraph Docker [Docker Desktop]
        subgraph BackendContainer [Backend Container / "Workstation"]
            VSCodeServer[VS Code Server]
            Terminal[Terminal / Shell]
            PyApp[FastAPI App]
            NodeTools[Node/NPM Tools]
        end

        subgraph FrontendContainer [Frontend Container / "Runner"]
            ViteServer[Vite Dev Server]
        end

        subgraph DbContainer [DB Container]
            Postgres[PostgreSQL]
        end
    end

    %% Connections
    Code <-->|Connects via Devcontainer| VSCodeServer
    VSCodeServer <-->|Runs in| BackendContainer
    Browser <-->|Port 8000| PyApp
    Browser <-->|Port 5173| ViteServer
    
    BackendContainer <-->|Internal Network| DbContainer
    BackendContainer <-->|Edits Files| FrontendContainer
    
    %% Shared Volume
    BackendContainer -- Mounts --> ProjectFiles[(Project Files)]
    FrontendContainer -- Mounts --> ProjectFiles