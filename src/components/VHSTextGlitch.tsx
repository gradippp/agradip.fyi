// VHSGlitchText.tsx
import React from "react";
import "@/app/anims.css";

interface VHSGlitchTextProps {
  text: string;
}

const VHSGlitchText: React.FC<VHSGlitchTextProps> = ({ text }) => {
  return (
    <h2 className="vhs-text" data-text={text}>
      {text}
    </h2>
  );
};

export default VHSGlitchText;
