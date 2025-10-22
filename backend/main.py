from fastapi import FastAPI
from pymongo import MongoClient
from bson.objectid import ObjectId
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

client = MongoClient("mongodb://localhost:27017/")
db = client["example"]
example_root_collection = db["example_root"]


app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    
)

@app.get("/")
async def test_sys():
    return {"message":"Hi API"}


@app.get("/example/random")
async def random_example():
    result = list(example_root_collection.aggregate([{"$sample": {"size": 1}}]))
    
    if result:
        example = result[0]               
        example["_id"] = str(example["_id"])
        example["xl"] = float(example["xl"]) 
        example["xr"] = float(example["xr"]) 
        return {"example": example}
    
    return {"error": "example not found"}