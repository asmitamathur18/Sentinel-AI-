# 🛡️ Sentinel-AI

**Sentinel-AI** is an AI-powered real-time surveillance and threat monitoring system designed to enhance security through computer vision and intelligent event analysis.

The system uses **YOLO-based object detection** to analyze surveillance footage, identify potential security threats, and provide real-time monitoring through an interactive dashboard.

---

## 🚀 Features

- Real-time object detection using YOLO
- Upload images and videos for analysis
- Live webcam surveillance
- AI-powered detection dashboard
- Detection confidence scores
- Bounding box visualization
- Object count statistics
- Download processed results

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend
- FastAPI
- Python

### AI & Computer Vision
- Ultralytics YOLO
- OpenCV

### Database & Storage
- Supabase

### Deployment
- Vercel
- Railway

---

## 📂 Project Structure

```text
Sentinel-AI/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── models/
│   ├── uploads/
│   ├── outputs/
│   ├── main.py
│   └── requirements.txt
│
├── README.md
└── .gitignore
```

---

## ⚙️ How It Works

1. Upload an image or video, or connect a live camera.
2. The backend processes the input using a YOLO object detection model.
3. Detected objects are highlighted with bounding boxes and confidence scores.
4. Detection statistics are displayed on the dashboard.
5. Processed media and detection summaries can be downloaded.

---

## 📊 Current Capabilities

- Person Detection
- Vehicle Detection
- Bag Detection
- Bicycle Detection
- Animal Detection
- Multiple Object Tracking

---

## 🔮 Future Enhancements

- Suspicious activity detection
- Intrusion detection
- Loitering detection
- Crowd density analysis
- Unattended object detection
- Weapon detection
- Fire and smoke detection
- Face recognition
- Email and SMS alerts
- Cloud deployment
- Multi-camera monitoring
- AI-generated incident reports using LLMs

---
## 📦 Installation

Clone the repository

```bash
git clone https://github.com/asmitamathur18/Sentinel-AI.git
```

Navigate to the project

```bash
cd Sentinel-AI
```

### Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 👩‍💻 Author

**Asmita Mathur**

GitHub: https://github.com/asmitamathur18

---

## 📄 License

This project is intended for educational, research, and portfolio purposes.
