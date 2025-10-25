import os
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.middleware.cors import CORSMiddleware
from bson.objectid import ObjectId

app = FastAPI()

client = AsyncIOMotorClient("mongodb://localhost:27017/")
db = client["example"]
example_collection =  db["example_root"]

app.add_middleware(
     CORSMiddleware,
     allow_origins = ("http://localhost:5173"),
     allow_credentials = True,
     allow_methods = ["*"],
     allow_headers = ["*"],
)
@app.get("/")
async def test():
    return {"message":"Hi API"}

@app.get("/example")
async def random():
    result = await example_collection.aggregate([{"$sample" : {"size" : 1}}]).to_list(length =1)
    if result:
        example = result[0]
        example["_id"] = str(example["_id"])
        example["xl"] = float(example["xl"])
        example["xr"] = float(example["xr"])
        return {"example" : example}
    
    return {"error" :"example not found"}  