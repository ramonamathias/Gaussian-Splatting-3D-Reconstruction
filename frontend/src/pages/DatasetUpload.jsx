import Navbar from "../components/Navbar";

export default function DatasetUpload() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold">Upload Image Dataset</h1>

        <div className="mt-8 bg-white rounded-2xl p-12 border-2 border-dashed border-slate-300 text-center">
          <h2 className="text-2xl font-semibold">
            Drag & Drop Image Folder
          </h2>

          <p className="mt-3 text-slate-500">
            or click to browse
          </p>
        </div>
      </main>
    </div>
  );
}