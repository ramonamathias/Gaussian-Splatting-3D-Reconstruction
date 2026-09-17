import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import api from "../services/api";

export default function VideoUpload() {
  const [video, setVideo] = useState(null);
  const [backendMessage, setBackendMessage] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        setBackendMessage(res.data.message);
      })
      .catch(() => {
        setBackendMessage("Cannot connect to backend");
      });
  }, []);

  const handleUpload = async () => {
    if (!video) return;

    const formData = new FormData();
    formData.append("video", video);

    try {
      const response = await api.post("/upload-video", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUploadStatus(response.data.message);

      // Wait 1.5 seconds, then go to Result page
      setTimeout(() => {
        navigate("/result");
      }, 1500);

    } catch (error) {
      console.error(error);
      setUploadStatus("Upload Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold">
          Upload Video
        </h1>

        <p className="mt-2 text-slate-600">
          {backendMessage}
        </p>

        <div className="mt-10 bg-white rounded-2xl shadow p-10">

          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            className="block w-full"
          />

          {video && (
            <div className="mt-6">
              <h3 className="font-semibold">
                Selected File
              </h3>

              <p className="mt-2 text-slate-600">
                {video.name}
              </p>
            </div>
          )}

          <Button
            className="mt-8"
            disabled={!video}
            onClick={handleUpload}
          >
            Start Reconstruction
          </Button>

          {uploadStatus && (
            <p className="mt-6 font-medium text-green-600">
              {uploadStatus}
            </p>
          )}

        </div>
      </main>
    </div>
  );
}