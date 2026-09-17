import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NewProjectCard() {
  const navigate = useNavigate();

  return (
    <Card className="rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
      <CardContent className="flex flex-col items-center py-14">
        <h2 className="text-3xl font-bold">
          New Reconstruction
        </h2>

        <p className="mt-4 text-center text-slate-500 max-w-lg">
          Upload a video or an existing image dataset to create an interactive
          3D Gaussian Splatting reconstruction.
        </p>

        <Button
          className="mt-8"
          onClick={() => navigate("/new-project")}
        >
          Create Project
        </Button>
      </CardContent>
    </Card>
  );
}