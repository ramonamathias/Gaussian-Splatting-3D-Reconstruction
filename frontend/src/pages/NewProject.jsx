import Navbar from "../components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function NewProject() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold">
          New Reconstruction
        </h1>

        <p className="mt-2 text-slate-600">
          Choose how you want to begin your reconstruction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          <Card
            onClick={() => navigate("/new-project/video")}
            className="cursor-pointer rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500"
          >
            <CardContent className="p-10">
              <h2 className="text-3xl font-bold">
                Video
              </h2>

              <p className="mt-4 text-slate-500">
                Upload a video and automatically extract frames for
                Gaussian Splatting reconstruction.
              </p>
            </CardContent>
          </Card>

          <Card
            onClick={() => navigate("/new-project/dataset")}
            className="cursor-pointer rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500"
          >
            <CardContent className="p-10">
              <h2 className="text-3xl font-bold">
                Image Dataset
              </h2>

              <p className="mt-4 text-slate-500">
                Upload an existing image dataset captured from any
                camera or mobile device.
              </p>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
}