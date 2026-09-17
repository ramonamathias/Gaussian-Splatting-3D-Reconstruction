import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import api from "../services/api";
import GaussianViewer from "../components/GaussianViewer";

export default function Result() {
  const navigate = useNavigate();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedModel, setSelectedModel] = useState("mushroom");

  useEffect(() => {
    api
      .get("/result")
      .then((response) => {
        setResult(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load result:", error);
        setLoading(false);
      });
  }, []);

  const modelUrls = {
    mushroom: "http://localhost:8000/static/point_cloud.ply",
    bonsai: "http://localhost:8000/static/bonsai.ply",
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow p-10">

          <h1 className="text-4xl font-bold text-green-600">
            🎉 Reconstruction Complete
          </h1>

          <p className="mt-4 text-slate-600">
            Your 3D scene has been reconstructed successfully.
          </p>

          {/* Processing Status */}
          <div className="mt-8 space-y-3">

            <div className="flex justify-between">
              <span>✔ Video Uploaded</span>
              <span>Completed</span>
            </div>

            <div className="flex justify-between">
              <span>✔ Frame Extraction</span>
              <span>Completed</span>
            </div>

            <div className="flex justify-between">
              <span>✔ COLMAP Reconstruction</span>
              <span>Completed</span>
            </div>

            <div className="flex justify-between">
              <span>✔ Gaussian Splatting Training</span>
              <span>Completed</span>
            </div>

          </div>

          <hr className="my-8" />

          {/* Reconstruction Summary */}
          <h2 className="text-2xl font-semibold">
            Reconstruction Summary
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-6">

            <div className="bg-slate-100 p-4 rounded-xl">
              <p className="text-slate-500">
                Frames Extracted
              </p>
              <h3 className="text-2xl font-bold">
                783
              </h3>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              <p className="text-slate-500">
                Registered Images
              </p>
              <h3 className="text-2xl font-bold">
                2
              </h3>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              <p className="text-slate-500">
                3D Points
              </p>
              <h3 className="text-2xl font-bold">
                58
              </h3>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              <p className="text-slate-500">
                Training
              </p>
              <h3 className="text-2xl font-bold">
                30000 Iterations
              </h3>
            </div>

          </div>

          {/* Model Selector */}
          <div className="mt-10">

            <h2 className="text-2xl font-semibold mb-4">
              Select 3D Reconstruction
            </h2>

            <div className="flex gap-4">

              <button
                onClick={() => setSelectedModel("mushroom")}
                className={`px-6 py-3 rounded-xl font-semibold transition ${
                  selectedModel === "mushroom"
                    ? "bg-green-600 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                🍄 Mushroom
              </button>

              <button
                onClick={() => setSelectedModel("bonsai")}
                className={`px-6 py-3 rounded-xl font-semibold transition ${
                  selectedModel === "bonsai"
                    ? "bg-green-600 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                🌳 Bonsai
              </button>

            </div>

          </div>

          {/* Interactive 3D Viewer */}
          <div className="mt-8">

            <h2 className="text-2xl font-semibold mb-4">
              Interactive 3D Reconstruction
            </h2>

            {loading ? (
              <div className="h-[500px] bg-slate-900 rounded-xl flex items-center justify-center text-white">
                Loading 3D reconstruction...
              </div>
            ) : (
              <GaussianViewer
                key={selectedModel}
                modelUrl={modelUrls[selectedModel]}
              />
            )}

          </div>

          {/* Model Information */}
          <div className="mt-6 bg-slate-100 rounded-xl p-5">

            <h2 className="text-xl font-semibold">
              3D Model
            </h2>

            <p className="mt-2 text-slate-600">
              {selectedModel === "mushroom"
                ? "Interactive mushroom Gaussian Splatting model loaded successfully."
                : "Interactive Bonsai Gaussian Splatting model loaded successfully."
              }
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Model file:{" "}
              {selectedModel === "mushroom"
                ? "/static/point_cloud.ply"
                : "/static/bonsai.ply"
              }
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Use the mouse to rotate, zoom, and inspect the reconstructed
              scene.
            </p>

          </div>

          {/* Upload Another Video */}
          <div className="mt-10 flex gap-4">

            <Button
              onClick={() => navigate("/new-project/video")}
            >
              Upload Another Video
            </Button>

          </div>

        </div>
      </main>
    </div>
  );
}