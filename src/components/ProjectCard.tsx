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
        w-full sm:w-80 max-w-full
        rounded-2xl p-5
        bg-black/70
        border border-white/10
        backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-500/60
        hover:shadow-[0_0_0_1px_rgba(59,130,246,0.25),0_20px_40px_rgba(0,0,0,0.6)]
        overflow-hidden
      "
    >
      {/* Subtle glow overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-start gap-4 mb-3 min-h-[44px]">
        {iconUrl && (
          <div
            className="
              flex items-center justify-center
              w-11 h-11 shrink-0
              rounded-lg
              bg-white/5
              border border-white/10
              transition-colors
              group-hover:border-blue-500/50
            "
          >
            <img
              src={iconUrl}
              alt={`${name} logo`}
              className="w-6 h-6 object-contain opacity-90"
            />
          </div>
        )}

        <h5 className="text-lg font-semibold tracking-tight text-white font-sans">
          {name}
        </h5>
      </div>

      {/* Description (3-line clamp without Tailwind config) */}
      <p
        className="relative z-10 text-sm text-gray-400 leading-relaxed mb-6 break-words"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {description}
      </p>

      {/* Tags (space always reserved) */}
      <div className="relative z-10 mb-5 min-h-[28px] flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="
              inline-flex items-center
              text-[11px] font-mono
              px-2 py-1
              rounded
              bg-white/3
              border border-white/10
              text-gray-400
              tracking-tight
              transition-all duration-200
              hover:border-blue-500/50
              hover:text-blue-300
              hover:bg-blue-500/5
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      {(openUrl || repoUrl) && (
        <div
          className="
            relative z-10
            mt-auto pt-4
            min-h-[40px]
            flex items-center gap-6
            text-sm
            border-t border-white/5
          "
        >
          {openUrl && (
            <a
              href={openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-blue-400
                hover:text-blue-300
                transition-colors
              "
            >
              <span>View</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-xs opacity-70"
              />
            </a>
          )}

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-gray-400
                hover:text-white
                transition-colors
              "
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Code</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
