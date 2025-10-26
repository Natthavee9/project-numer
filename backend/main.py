import os
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.middleware.cors import CORSMiddleware
from bson import ObjectId
import os # ตรวจสอบว่า import os แล้ว

app = FastAPI()

MONGO_DETAILS = os.getenv("MONGO_DETAILS", "mongodb://localhost:27017/")
client = AsyncIOMotorClient(MONGO_DETAILS)
db = client["example"]
# example_collection = db["example_root"] # ลบบรรทัดนี้ออก หรือ comment ไว้
# --- แก้ไขบรรทัดนี้ให้ตรงกับชื่อ Collection ใน MongoDB Compass ---
example_root = db["root"] # <--- ใช้ชื่อ collection ที่ถูกต้องคือ "root"
# ----------------------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

@app.get("/")
async def read_root():
    return {"message": "API is running. Go to /example for data."}

@app.get("/example")
async def random():
    try:
        # ใช้ตัวแปร example_root ที่อ้างถึง collection "root"
        result = await example_root.aggregate([{"$sample": {"size":1}}]).to_list(length = 1)
        if result:
            example = result[0]
            example["_id"] = str(example["_id"])
            if "xl" in example:
                 example["xl"] = float(example["xl"])
            if "xr" in example:
                 example["xr"] = float(example["xr"])
            return{"example" : example}
        return{"error":"Example data not found in collection"}
    except Exception as e:
        return {"error": f"An error occurred: {str(e)}"}, 500