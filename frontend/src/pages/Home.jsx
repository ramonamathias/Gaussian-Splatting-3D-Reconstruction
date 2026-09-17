import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import NewProjectCard from "../components/NewProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Projects</h1>

          <p className="text-slate-600 mt-2">
            Create and manage your Gaussian Splatting reconstructions.
          </p>
        </div>

        <NewProjectCard />

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">
            Recent Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard
              title="Bonsai"
              status="Completed"
            />

            <ProjectCard
              title="Flower Pot"
              status="Processing"
            />

            <ProjectCard
              title="Living Room"
              status="Completed"
            />
          </div>
        </div>
      </main>
    </div>
  );
}