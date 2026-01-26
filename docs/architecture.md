# High Level Architecture

```mermaid
graph TD
    subgraph Client_Side [Frontend - React]
        UI[React.js Web UI]
        State[State Management / Hooks]
    end

    subgraph Server_Side [Docker Infrastructure]
        Proxy[Traefik Reverse Proxy]
        
        API[FastAPI Backend]
        
        subgraph Workers [Asynchronous Operations]
            Scanner[Sync & Scan Engine]
            RClone[RClone Integration]
        end
        
        DB[(PostgreSQL Database)]
    end

    subgraph Storage_Locations [Data Sources]
        Local[Local Storage /data]
        USB[External Drive /mnt]
        Cloud[Cloud Provider via RClone]
    end

    %% Communication Path
    UI <-->|REST API / JSON| Proxy
    Proxy <--> API
    API <--> DB
    API <--> Scanner
    Scanner <--> RClone
    
    %% File Operations
    RClone <--> Local
    RClone <--> USB
    RClone <--> Cloud