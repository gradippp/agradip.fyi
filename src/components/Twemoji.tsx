import twemoji from "twemoji";
import { useEffect, useRef } from "react";
import { CONFIG } from "@/data/config";
import { get as emojify } from "node-emoji";

interface TwemojiProps {
  name: string;
}

export default function Twemoji({ name }: TwemojiProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const emoji = emojify(name) ? emojify(name) : name;

  useEffect(() => {
    if (ref.current) {
      twemoji.parse(ref.current, {
        base: CONFIG.TWEMOJI_CDN,
        folder: "svg",
        ext: ".svg",
        className: "twemoji",
      });
    }
  }, [emoji]);

  return <span ref={ref}>{emoji}</span>;
}
