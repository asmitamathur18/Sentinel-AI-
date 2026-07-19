from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse
from detector import detect_objects
import shutil
import os

app = FastAPI(
    title="Sentinel AI",
    version="1.0"
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs("outputs", exist_ok=True)


@app.get("/")
def home():

    return {

        "message": "Sentinel AI Backend Running"

    }


@app.post("/detect")
async def detect(file: UploadFile = File(...)):

    file_path = os.path.join(

        UPLOAD_FOLDER,

        file.filename

    )

    with open(file_path, "wb") as buffer:

        shutil.copyfileobj(

            file.file,

            buffer

        )

    output_path, detections = detect_objects(file_path)

    return {

        "detections": detections,

        "output_image": output_path

    }