from ultralytics import YOLO
import cv2
import os

# Load YOLO model once
model = YOLO("yolo11n.pt")


def detect_objects(image_path):

    image = cv2.imread(image_path)

    results = model(image)

    annotated = results[0].plot()

    output_path = os.path.join(
        "outputs",
        os.path.basename(image_path)
    )

    cv2.imwrite(output_path, annotated)

    detections = []

    for box in results[0].boxes:

        cls = int(box.cls[0])

        confidence = float(box.conf[0])

        detections.append({

            "object": model.names[cls],

            "confidence": round(confidence, 2)

        })

    return output_path, detections