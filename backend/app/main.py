from fastapi import FastAPI
import os

app = FastAPI(title="FileMateAPI")

@app.get("/")
async def root():
    return {"status": "online", "message": "FileMate Backend is running",
            "container_workdir": os.getcwd()}

@app.get("/health")
async def health():

    #später DB-Check
    return {"database": "pending", "storeage": "local"}
    
