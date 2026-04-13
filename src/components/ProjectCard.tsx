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
        group relative flex flex-col items-start text-left
        w-full h-full
        rounded-xl p-5
        bg-[#111113]
        border border-white/5
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]
        transition-all duration-200
        hover:border-white/20
        hover:bg-[#161618]
        overflow-hidden
      "
    >
      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 mb-4 w-full">
        {iconUrl && (
          <div
            className="
              flex items-center justify-center
              w-9 h-9 shrink-0
              rounded-lg
              bg-white/5
              border border-white/10
              shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]
              transition-colors
              group-hover:border-white/20
            "
          >
            <img
              src={iconUrl}
              alt={`${name} logo`}
              className="w-5 h-5 object-contain opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100"
            />
          </div>
        )}

        <h5 className="text-base font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
          {name}
        </h5>
      </div>

      {/* Description */}
      <p
        className="relative z-10 text-sm text-zinc-300 leading-relaxed mb-6 break-words flex-grow"
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
        <div className="relative z-10 mb-6 flex flex-wrap gap-2 w-full">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                inline-flex items-center
                text-[11px] font-medium font-mono
                px-2.5 py-1
                rounded-md
                bg-white/5
                border border-white/10
                text-zinc-400
                tracking-tight
                transition-all duration-200
                group-hover:border-white/20
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
            mt-auto
            flex items-center gap-6
            text-sm font-medium
            border-t border-white/5
            pt-4 w-full
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
                transition-all
              "
            >
              <span>View</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="opacity-60"
                size="xs"
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
                hover:text-white
                transition-colors
              "
            >
              <FontAwesomeIcon icon={faGithub} size="xs" />
              <span>Code</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
