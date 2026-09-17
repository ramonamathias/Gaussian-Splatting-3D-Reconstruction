import { useEffect, useRef } from "react";
import * as GaussianSplats3D from "@mkkellogg/gaussian-splats-3d";

export default function GaussianViewer({ modelUrl }) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !modelUrl) return;

    let viewer;

    const loadViewer = async () => {
      try {
        viewer = new GaussianSplats3D.Viewer({
          rootElement: containerRef.current,

          cameraUp: [0, -1, -0.6],

          initialCameraPosition: [-3.95, 0.40, 15],

          initialCameraLookAt: [-3.95, 0.40, 31.29],

          sharedMemoryForWorkers: false,

          gpuAcceleratedSort: false,

          integerBasedSort: false,

          showLoadingUI: true,
        });

        viewerRef.current = viewer;

        await viewer.addSplatScene(modelUrl, {
          showLoadingUI: true,
          progressiveLoad: true,
        });

        viewer.start();

        console.log("Gaussian Splat loaded successfully!");
      } catch (error) {
        console.error("Gaussian Splat loading failed:", error);
      }
    };

    loadViewer();

    return () => {
      if (viewerRef.current) {
        viewerRef.current.dispose();
        viewerRef.current = null;
      }
    };
  }, [modelUrl]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[600px] rounded-xl overflow-hidden bg-black"
    />
  );
}