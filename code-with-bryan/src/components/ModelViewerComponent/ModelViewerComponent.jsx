import React from "react";

const ModelViewerComponent = ({ src }) => {
  return (
    <model-viewer
      src={src}
      ar
      shadow-intensity="1"
      camera-controls
      touch-action="pan-y"
    ></model-viewer>
  );
};

export default ModelViewerComponent;
