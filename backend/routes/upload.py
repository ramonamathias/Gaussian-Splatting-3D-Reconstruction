from fastapi import APIRouter, UploadFile, File
import os
import shutil

from services.frame_extractor import extract_frames
from services.colmap_service import run_colmap

router = APIRouter()

# Main upload folder
UPLOAD_FOLDER = "uploads"

# Scene folder
SCENE_FOLDER = os.path.join(UPLOAD_FOLDER, "my_scene")

# Folder where extracted frames will be stored
INPUT_FOLDER = os.path.join(SCENE_FOLDER, "input")

# Create folders automatically
os.makedirs(INPUT_FOLDER, exist_ok=True)


@router.post("/upload-video")
async def upload_video(video: UploadFile = File(...)):
    # Save uploaded video
    video_path = os.path.join(UPLOAD_FOLDER, video.filename)

    with open(video_path, "wb") as buffer:
        shutil.copyfileobj(video.file, buffer)

    # Delete old extracted frames
    for file in os.listdir(INPUT_FOLDER):
        file_path = os.path.join(INPUT_FOLDER, file)

        if os.path.isfile(file_path):
            os.remove(file_path)

    # Extract new frames
    frame_count = extract_frames(
        video_path,
        INPUT_FOLDER
    )
    colmap_result = run_colmap(os.path.abspath(SCENE_FOLDER))

    return {
    "message": "Video uploaded successfully",
    "filename": video.filename,
    "frames": frame_count,
    "colmap": colmap_result
}