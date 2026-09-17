# 3D Scene Reconstruction using Gaussian Splatting

An end-to-end computer vision project that reconstructs photorealistic 3D scenes from smartphone videos using COLMAP and 3D Gaussian Splatting.

---

## Overview

This project presents a complete pipeline for reconstructing three-dimensional scenes from smartphone videos. The system extracts frames, estimates camera poses using COLMAP, and uses 3D Gaussian Splatting to generate a high-quality 3D representation for rendering and visualization.

---

## Features

- Smartphone video input
- Automatic frame extraction
- Camera pose estimation using COLMAP
- 3D Gaussian Splatting reconstruction
- High-quality rendering
- Interactive 3D visualization
- Web-based interface

---

## Project Pipeline

    Smartphone Video
            │
            ▼
      Frame Extraction
            │
            ▼
     Image Preprocessing
            │
            ▼
           COLMAP
    (Camera Pose Estimation)
            │
            ▼
    3D Gaussian Splatting
            │
            ▼
     3D Scene Reconstruction
            │
            ▼
    Rendering & Visualization

---

## Technology Stack

- Python
- PyTorch
- OpenCV
- NumPy
- COLMAP
- CUDA
- 3D Gaussian Splatting
- React.js
- Vite
- FastAPI
- Tailwind CSS
- Axios

---

## Setup

### Prerequisites

- Python 3.10+
- Node.js and npm
- COLMAP
- NVIDIA GPU with CUDA support
- Git

### Clone Repository

    git clone https://github.com/ramonamathias/Gaussian-Splatting-3D-Reconstruction.git
    cd Gaussian-Splatting-3D-Reconstruction

### Backend

    cd backend
    python -m venv venv
    .\venv\Scripts\activate
    pip install fastapi uvicorn python-multipart opencv-python numpy
    uvicorn main:app --reload

### Frontend

    cd frontend
    npm install
    npm run dev
