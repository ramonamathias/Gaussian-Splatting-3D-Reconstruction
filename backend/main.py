from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from routes.upload import router as upload_router

app = FastAPI(
    title="SceneForge 3D API",
    version="1.0.0"
)

origins = [
    "http://localhost:5173",
    "http://localhost:5174",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_router)

# Serve generated files
app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static"
)

@app.get("/")
def home():
    return {
        "status": "running",
        "message": "SceneForge Backend Ready"
    }

@app.get("/result")
def get_result():
    return {
        "model": "/static/point_cloud.ply",
        "preview": "/static/result.png"
    }