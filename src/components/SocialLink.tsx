import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialLinkProps {
  link: string;
  icon: IconDefinition;
}

export default function SocialLink({ link, icon }: SocialLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-2xl hover:text-blue-500 transition-colors"
    >
      <FontAwesomeIcon
        icon={icon}
        className="inline-block w-6 h-6"
      ></FontAwesomeIcon>
    </a>
  );
}
