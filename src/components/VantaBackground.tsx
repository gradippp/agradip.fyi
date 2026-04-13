"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/dist/vanta.net.min";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x71717a,
          backgroundColor: 0x09090b,
          points: 12.0,
          maxDistance: 20.0,
          spacing: 16.0,
          showDots: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-20 w-full h-full pointer-events-none opacity-60"
    />
  );
};

export default VantaBackground;
