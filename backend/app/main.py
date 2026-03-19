from fastapi import FastAPI
import os

app = FastAPI(title="FileMateAPI")

@app.post("/locations")
async def add_location(location: Location):
    fake_db_location.append(loc)
    return  {"message": "Location added", "data": loc}
    

@app.get("/scan/{location_id}")
async def scan_location(location_id: int):
    if location_id 
    
