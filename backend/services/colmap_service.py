import subprocess
import os
import shutil

COLMAP = r"C:\COLMAP\bin\colmap.exe"


def run_command(command):
    print("\nRunning:")
    print(" ".join(command))

    result = subprocess.run(
        command,
        capture_output=True,
        text=True
    )

    print(result.stdout)
    print(result.stderr)

    return result.returncode == 0


def run_colmap(scene_path):

    database = os.path.join(scene_path, "database.db")
    input_images = os.path.join(scene_path, "input")

    distorted = os.path.join(scene_path, "distorted")
    sparse = os.path.join(scene_path, "sparse")
    images = os.path.join(scene_path, "images")

    # Clean old folders
    if os.path.exists(distorted):
        shutil.rmtree(distorted)

    if os.path.exists(sparse):
        shutil.rmtree(sparse)

    if os.path.exists(images):
        shutil.rmtree(images)

    if os.path.exists(database):
        os.remove(database)

    os.makedirs(distorted, exist_ok=True)
    os.makedirs(sparse, exist_ok=True)

    # --------------------------------------------------
    # Feature Extraction
    # --------------------------------------------------
    if not run_command([
        COLMAP,
        "feature_extractor",
        "--database_path", database,
        "--image_path", input_images,
        "--ImageReader.single_camera", "1",
        "--ImageReader.camera_model", "OPENCV",
        "--FeatureExtraction.use_gpu", "0"
    ]):
        return False

    # --------------------------------------------------
    # Feature Matching
    # --------------------------------------------------
    if not run_command([
        COLMAP,
        "exhaustive_matcher",
        "--database_path", database,
        "--FeatureMatching.use_gpu", "0"
    ]):
        return False

    # --------------------------------------------------
    # Mapper
    # --------------------------------------------------
    if not run_command([
        COLMAP,
        "mapper",
        "--database_path", database,
        "--image_path", input_images,
        "--output_path", distorted
    ]):
        return False

    # --------------------------------------------------
    # Image Undistorter
    # --------------------------------------------------
    if not run_command([
        COLMAP,
        "image_undistorter",
        "--image_path", input_images,
        "--input_path", os.path.join(distorted, "0"),
        "--output_path", scene_path,
        "--output_type", "COLMAP"
    ]):
        return False

    # --------------------------------------------------
    # Move sparse model into sparse/0
    # --------------------------------------------------
    if os.path.exists(sparse):
        shutil.rmtree(sparse)

    shutil.move(os.path.join(scene_path, "sparse"), sparse)

    print("\n===================================")
    print("COLMAP COMPLETED SUCCESSFULLY!")
    print("===================================")

    return True