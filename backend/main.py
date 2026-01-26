from fastapi import FastAPI

app = FastAPI(title="FileMateAPI")

@app.get("/")
async def root():
    return {"status": "online", "message": "FileMate Backend is running"}

@app.get("/health")
async def health():

    #später DB-Check
    return {"database": "pending", "storeage": "local"}
    
