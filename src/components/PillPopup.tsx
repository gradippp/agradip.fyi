import React, { useRef, useEffect, useState } from "react";

interface PillPopupProps {
  onRedPill: () => void;
  onBluePill: () => void;
  closing: boolean;
}

const ORIGINAL_WIDTH = 594;
const ORIGINAL_HEIGHT = 514;

const PillPopup: React.FC<PillPopupProps> = ({
  onRedPill,
  onBluePill,
  closing,
}) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredPill, setHoveredPill] = useState<"red" | "blue" | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Matrix Animation
  useEffect(() => {
    const canvas = document.getElementById(
      "matrix-canvas"
    ) as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let animationFrameId: number;

    function draw() {
      if (!ctx) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePillInteraction = (
    pill: "red" | "blue" | null,
    e?: React.MouseEvent | React.FocusEvent
  ) => {
    setHoveredPill(pill);
    if (pill && e && imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      // For buttons, we can just center the tooltip over the button or follow mouse if it's a mouse event
      const mouseEvent = e as React.MouseEvent;
      if (mouseEvent.clientX !== undefined) {
        setTooltipPosition({
          x: mouseEvent.clientX - rect.left,
          y: mouseEvent.clientY - rect.top,
        });
      } else {
        // Focus event, place tooltip in a fixed spot relative to the pill
        if (pill === "red") {
          setTooltipPosition({
            x: (120 / ORIGINAL_WIDTH) * rect.width,
            y: (363 / ORIGINAL_HEIGHT) * rect.height,
          });
        } else {
          setTooltipPosition({
            x: (472.5 / ORIGINAL_WIDTH) * rect.width,
            y: (365 / ORIGINAL_HEIGHT) * rect.height,
          });
        }
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-zinc-950/90 backdrop-blur-md flex flex-col lg:flex-row items-center justify-center z-50 p-4 gap-12 ${
        closing ? "fade-out" : "fade-in"
      }`}
    >
      {/* Left: Image + Message Box */}
      <div className="relative p-4 text-center w-full max-w-[650px]">
        <div
          ref={imageContainerRef}
          className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-white/10"
          style={{ aspectRatio: `${ORIGINAL_WIDTH} / ${ORIGINAL_HEIGHT}` }}
        >
          {/* Matrix Canvas Background */}
          <canvas
            id="matrix-canvas"
            className="absolute top-0 left-0 w-full h-full z-0 blur-sm"
          ></canvas>

          {/* Morpheus Image */}
          <img
            src="/morpheus.png"
            alt="Morpheus"
            className="w-full h-full object-cover z-10 relative"
          />

          {/* Interactive Buttons Overlay */}
          <div className="absolute top-0 left-0 w-full h-full z-20">
            {/* Red Pill Button */}
            <button
              onClick={onRedPill}
              onMouseEnter={(e) => handlePillInteraction("red", e)}
              onMouseMove={(e) => handlePillInteraction("red", e)}
              onMouseLeave={() => handlePillInteraction(null)}
              onFocus={(e) => handlePillInteraction("red", e)}
              onBlur={() => handlePillInteraction(null)}
              className="absolute bg-transparent border-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-red-500/50 rounded-full transition-all"
              style={{
                left: "8.25%",
                top: "59.1%",
                width: "23.9%",
                height: "23.0%",
              }}
              aria-label="Take the Red Pill: Truth is freedom"
              title="Take the Red Pill"
            />

            {/* Blue Pill Button */}
            <button
              onClick={onBluePill}
              onMouseEnter={(e) => handlePillInteraction("blue", e)}
              onMouseMove={(e) => handlePillInteraction("blue", e)}
              onMouseLeave={() => handlePillInteraction(null)}
              onFocus={(e) => handlePillInteraction("blue", e)}
              onBlur={() => handlePillInteraction(null)}
              className="absolute bg-transparent border-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-full transition-all"
              style={{
                left: "67.2%",
                top: "58.9%",
                width: "24.7%",
                height: "24.1%",
              }}
              aria-label="Take the Blue Pill: Ignorance is bliss"
              title="Take the Blue Pill"
            />
          </div>

          {/* Cursor-following Tooltip */}
          {hoveredPill && (
            <div
              className={`absolute z-30 text-sm px-3 py-1 rounded-md font-semibold pointer-events-none transition-opacity duration-150 whitespace-nowrap
              ${
                hoveredPill === "red"
                  ? "bg-red-600 text-white"
                  : "bg-blue-600 text-white"
              }`}
              style={{
                left: tooltipPosition.x + 10,
                top: tooltipPosition.y + 10,
              }}
            >
              {hoveredPill === "red"
                ? "Truth is freedom"
                : "Ignorance is bliss"}
            </div>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold mt-8 text-white tracking-tight">
          This is your last chance.
        </h3>
        <p className="text-zinc-500 text-base mt-2">
          After this, there is no turning back...
        </p>
      </div>

      {/* Right: Easter Egg Message */}
      <div className="p-4 text-center lg:text-left w-full max-w-md">
        <h3
          className="vhs-text text-xl md:text-2xl font-bold mb-4 block"
          data-text="There are no accidents."
        >
          There are no accidents.
        </h3>
        <p className="text-zinc-300 text-lg font-medium leading-relaxed mb-6">
          Life always narrows down to binary choices — the{" "}
          <span className="text-red-500 font-bold">0s</span> and the{" "}
          <span className="text-blue-500 font-bold">1s</span>.
        </p>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 italic">
          Will you take the blue pill and continue to accept the illusion? Or will you
          take the red pill and uncover the truth, no matter how uncomfortable
          it is?
        </p>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0">
          <span className="text-accent font-mono text-xs font-bold">[SYSTEM]</span>
          <p className="text-zinc-500 text-xs font-mono">Curiosity detected. Awaiting input...</p>
        </div>
      </div>
    </div>
  );
};

export default PillPopup;
