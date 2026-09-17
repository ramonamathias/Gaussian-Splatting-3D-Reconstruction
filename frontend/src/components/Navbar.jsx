export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b bg-white">
      <h1 className="text-2xl font-bold">SceneForge 3D</h1>

      <button className="text-sm text-gray-600 hover:text-black">
        Settings
      </button>
    </nav>
  );
}