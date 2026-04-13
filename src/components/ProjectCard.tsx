import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCardProps {
  name: string;
  description: string;
  iconUrl?: string;
  openUrl?: string;
  repoUrl?: string;
  tags?: string[];
}

export default function ProjectCard({
  name,
  description,
  iconUrl,
  openUrl,
  repoUrl,
  tags,
}: ProjectCardProps) {
  return (
    <div
      className="
        group relative flex flex-col
        w-full h-full
        rounded-2xl p-4 sm:p-5
        bg-white/[0.03]
        border border-white/10
        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-accent/40
        hover:bg-white/[0.05]
        overflow-hidden
      "
    >
      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 mb-3">
        {iconUrl && (
          <div
            className="
              flex items-center justify-center
              w-9 h-9 shrink-0
              rounded-md
              bg-white/10
              border border-white/10
              transition-colors
              group-hover:border-accent/30
            "
          >
            <img
              src={iconUrl}
              alt={`${name} logo`}
              className="w-5 h-5 object-contain opacity-90 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}

        <h5 className="text-base font-bold tracking-tight text-zinc-100 group-hover:text-accent transition-colors">
          {name}
        </h1>
      </div>

      {/* Description */}
      <p
        className="relative z-10 text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 break-words flex-grow"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {description}
      </p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="relative z-10 mb-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                inline-flex items-center
                text-[10px] sm:text-[11px] font-mono
                px-2 py-0.5
                rounded-md
                bg-white/5
                border border-white/10
                text-zinc-400
                tracking-tight
                transition-colors duration-200
                group-hover:border-accent/20
                group-hover:text-zinc-200
              "
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      {(openUrl || repoUrl) && (
        <div
          className="
            relative z-10
            mt-auto pt-3
            flex items-center gap-4
            text-xs font-medium
            border-t border-white/5
          "
        >
          {openUrl && (
            <a
              href={openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5
                text-zinc-300
                hover:text-accent
                transition-colors
              "
            >
              <span>View</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="opacity-70"
                size="sm"
              />
            </a>
          )}

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5
                text-zinc-400
                hover:text-zinc-100
                transition-colors
              "
            >
              <FontAwesomeIcon icon={faGithub} size="sm" />
              <span>Code</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
