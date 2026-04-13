import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialLinkProps {
  text: string;
  link: string;
  icon: IconDefinition;
}

export default function SocialLink({ text, link, icon }: SocialLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text}
      className="
        group flex items-center gap-2.5 
        px-3.5 py-1.5 rounded-full 
        bg-white/5 border border-white/10 
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]
        transition-all duration-300 
        hover:bg-white/10 hover:border-white/20 hover:scale-105
        active:scale-95
      "
    >
      <FontAwesomeIcon 
        icon={icon} 
        className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" 
      />
      <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors">
        {text}
      </span>
    </a>
  );
}
