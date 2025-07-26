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
      className="group flex items-center text-white text-2xl transition-all duration-300 hover:text-blue-500"
    >
      <FontAwesomeIcon icon={icon} className="w-6 h-6" />

      <span
        className="ml-0 max-w-0 overflow-hidden whitespace-nowrap opacity-0 
                   group-hover:max-w-[200px] group-hover:ml-2 group-hover:opacity-100 
                   transition-all duration-300 ease-in-out text-base"
      >
        {text}
      </span>
    </a>
  );
}
