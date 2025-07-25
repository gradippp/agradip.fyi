import React, { useRef, useEffect, useState } from "react";

interface PillPopupProps {
  onRedPill: () => void;
  onBluePill: () => void;
  onClose: () => void;
}

const ORIGINAL_WIDTH = 594;
const ORIGINAL_HEIGHT = 514;

const redPillPolygon: [number, number][] = [
  [65, 319],
  [99, 312],
  [128, 304],
  [171, 312],
  [191, 333],
  [185, 366],
  [169, 404],
  [135, 413],
  [95, 422],
  [62, 408],
  [50, 381],
  [49, 345],
];

const bluePillPolygon: [number, number][] = [
  [406, 320],
  [436, 303],
  [475, 305],
  [513, 319],
  [546, 334],
  [544, 374],
  [522, 417],
  [460, 427],
  [422, 410],
  [399, 364],
];

const PillPopup: React.FC<PillPopupProps> = ({
  onRedPill,
  onBluePill,
  onClose,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState("default");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!overlayRef.current || !imageContainerRef.current) return;

    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * ORIGINAL_WIDTH;
    const y = ((e.clientY - rect.top) / rect.height) * ORIGINAL_HEIGHT;

    if (
      isPointInPolygon(x, y, redPillPolygon) ||
      isPointInPolygon(x, y, bluePillPolygon)
    ) {
      setCursor("pointer");
    } else {
      setCursor("default");
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!overlayRef.current || !imageContainerRef.current) return;

    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * ORIGINAL_WIDTH;
    const y = ((e.clientY - rect.top) / rect.height) * ORIGINAL_HEIGHT;

    if (isPointInPolygon(x, y, redPillPolygon)) {
      onRedPill();
    } else if (isPointInPolygon(x, y, bluePillPolygon)) {
      onBluePill();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex flex-col lg:flex-row items-center justify-center z-50 animate-fade-in p-4 gap-6">
      {/* Left: Image + Message Box */}
      <div className="relative bg-gray-900 border border-gray-700 p-4 rounded-lg shadow-2xl text-center w-full max-w-[650px]">
        <div
          ref={imageContainerRef}
          className="relative w-full"
          style={{ aspectRatio: `${ORIGINAL_WIDTH} / ${ORIGINAL_HEIGHT}` }}
        >
          <img
            src="/morpheus.png"
            alt="Morpheus"
            className="rounded-lg w-full h-full object-cover border border-gray-600"
          />

          {/* Transparent Overlay for click detection */}
          <div
            ref={overlayRef}
            className="absolute top-0 left-0 w-full h-full"
            style={{ cursor }}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
          />
        </div>

        <h3 className="text-lg md:text-2xl font-bold mt-4">
          This is your last chance.
        </h3>
        <p className="text-gray-400 text-sm mb-2">
          After this, there is no turning back...
        </p>

        <button
          onClick={onClose}
          className="text-sm text-gray-500 mt-2 hover:underline"
        >
          Close
        </button>
      </div>

      {/* Right: Transparent Easter Egg Container */}
      <div className="p-4 text-center w-full max-w-md">
        <h3
          className="vhs-text text-xl md:text-2xl font-bold mb-2"
          data-text="There are no accidents. You were meant to find this."
        >
          There are no accidents. You were meant to find this.
        </h3>
        <h3
          className="vhs-text text-xl md:text-2xl font-bold mb-2"
          data-text="Reality is just a question of perspective."
        >
          Reality is just a question of perspective.
        </h3>
        <p className="text-gray-300 text-sm font-mono tracking-tight italic mb-1">
          Life always narrows down to binary choices — the{" "}
          <span className="font-bold">0s</span> and the{" "}
          <span className="font-bold">1s</span>. The real question is: will you
          take the blue pill and continue to accept the illusion? Or will you
          take the red pill and uncover the truth, no matter how uncomfortable
          it is?
        </p>
        <p className="text-gray-500 text-xs mt-3">
          <span className="text-green-500">[System]</span> Curiosity detected.
          Awaiting user input...
        </p>
      </div>
    </div>
  );
};

export default PillPopup;

// Point-in-polygon check
function isPointInPolygon(x: number, y: number, polygon: [number, number][]) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];

    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
