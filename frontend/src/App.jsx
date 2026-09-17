import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import VideoUpload from "./pages/VideoUpload";
import DatasetUpload from "./pages/DatasetUpload";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-project" element={<NewProject />} />
      <Route path="/new-project/video" element={<VideoUpload />} />
      <Route path="/new-project/dataset" element={<DatasetUpload />} />

      {/* Result Page */}
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;