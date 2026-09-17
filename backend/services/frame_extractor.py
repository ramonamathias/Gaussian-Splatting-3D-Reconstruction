import cv2
import os


def extract_frames(video_path, output_folder):
    os.makedirs(output_folder, exist_ok=True)

    cap = cv2.VideoCapture(video_path)

    frame_count = 1

    while True:
        success, frame = cap.read()

        if not success:
            break

        filename = os.path.join(
            output_folder,
            f"frame_{frame_count:04d}.jpg"
        )

        cv2.imwrite(filename, frame)

        frame_count += 1

    cap.release()

    return frame_count - 1