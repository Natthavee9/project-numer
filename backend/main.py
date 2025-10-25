import os
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# MongoDB connection
MONGO_DETAILS = os.getenv("MONGO_DETAILS", "mongodb://mongo:27017/")
client = AsyncIOMotorClient(MONGO_DETAILS)
db = client["example"]
example_collection = db["example_root"]

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ชั่วคราว ให้ทุก frontend เรียกได้
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def test():
    return {"message": "Hi API"}

@app.get("/example")
async def random():
    try:
        result = await example_collection.aggregate([{"$sample": {"size": 1}}]).to_list(length=1)
        if result:
            example = result[0]
            example["_id"] = str(example["_id"])
            example["xl"] = float(example["xl"])
            example["xr"] = float(example["xr"])
            return {"example": example}
        return {"error": "example not found"}
    except Exception as e:
        return {"error": str(e)}
