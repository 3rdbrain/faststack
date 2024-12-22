import os
from fastapi import FastAPI, HTTPException, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from .models.cta import CustomerDetails
from .config.mongodb import collection


router = APIRouter()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.post("/api/newcustomers")
async def create_customer(details: CustomerDetails):
    try:
        result = collection.insert_one(details.model_dump())
        return {"status_code": 200, "message": "Customer created successfully"}
    
    except Exception as e:
        return HTTPException(status_code=500, detail=f"An error occurred: {e}")
    
@app.get("/api/hello")
async def read_root():
    return {"message": "Hello World"}

app.include_router(router)   

