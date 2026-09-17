# 3D Scene Reconstruction using Gaussian Splatting

An end-to-end computer vision project that reconstructs photorealistic 3D scenes from smartphone videos using COLMAP and 3D Gaussian Splatting.

---

## Overview

This project presents a complete pipeline for reconstructing three-dimensional scenes from smartphone videos. The system extracts frames from an input video, estimates camera poses using COLMAP, and reconstructs the scene using 3D Gaussian Splatting to generate a high-quality 3D representation suitable for rendering and visualization.

---

## Features

- Smartphone video as input
- Automatic frame extraction
- Camera pose estimation using COLMAP
- Photorealistic 3D scene reconstruction
- High-quality rendering of reconstructed scenes
- Interactive 3D scene visualization

---

## Project Pipeline

```text
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
```

---

## Technology Stack

- Python
- PyTorch
- OpenCV
- COLMAP
- 3D Gaussian Splatting
- NumPy

---

## Applications

- Digital Twin Generation
- Cultural Heritage Preservation
- Robotics and Autonomous Navigation
- Virtual and Augmented Reality
- Architecture and Interior Visualization
