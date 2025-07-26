import { get as emojify } from "node-emoji";
import { CONFIG } from "@/data/config";

interface TwemojiProps {
  name: string;
}

export default function Twemoji({ name }: TwemojiProps) {
  const emoji = emojify(name) || name;

  const toCodePoints = (unicode: string) =>
    [...unicode]
      .map((char) => char.codePointAt(0)?.toString(16))
      .filter(Boolean)
      .join("-");

  const codepoints = toCodePoints(emoji);
  const emojiUrl = `${CONFIG.TWEMOJI_CDN}/svg/${codepoints}.svg`;

  return (
    <img
      src={emojiUrl}
      alt={emoji}
      className="twemoji"
      draggable={false}
      height={20}
      width={20}
    />
  );
}
