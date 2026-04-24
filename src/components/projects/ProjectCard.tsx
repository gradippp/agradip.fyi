import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ProjectCardProps {
  slug?: string;
  name: string;
  description: string;
  iconUrl?: string;
  openUrl?: string;
  repoUrl?: string;
  tags?: string[];
}

export default function ProjectCard({
  slug,
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
        rounded-2xl p-7
        bg-zinc-900/30
        border border-white/[0.06]
        transition-all duration-150
        hover:border-white/[0.15]
        hover:bg-zinc-900/50
        overflow-hidden
      "
    >
      {/* Header */}
      <div className="relative z-10 flex items-center gap-4 mb-5 w-full">
        {iconUrl && (
          <div
            className="
              flex items-center justify-center
              w-10 h-10 shrink-0
              rounded-xl
              bg-white/[0.03]
              border border-white/[0.08]
              transition-colors duration-150
              group-hover:border-white/[0.12]
            "
          >
            <img
              src={iconUrl}
              alt={`${name} logo`}
              className="w-5.5 h-5.5 object-contain opacity-70 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100"
            />
          </div>
        )}

        <h5 className="text-lg font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors duration-150">
          {name}
        </h5>
      </div>

      {/* Description */}
      <p
        className="relative z-10 text-sm text-zinc-400 leading-relaxed mb-6 break-words flex-grow"
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
        <div className="relative z-10 mb-7 flex flex-wrap gap-2 w-full">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                inline-flex items-center
                text-[10px] font-bold font-mono uppercase
                px-2 py-0.5
                rounded-md
                bg-white/[0.02]
                border border-white/[0.05]
                text-zinc-500
                tracking-wider
                transition-all duration-150
                group-hover:border-white/[0.1]
                group-hover:text-zinc-300
              "
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      {(slug || openUrl || repoUrl) && (
        <div
          className="
            relative z-10
            mt-auto
            flex items-center gap-6
            text-sm font-medium
            border-t border-white/[0.05]
            pt-5 w-full
          "
        >
          {slug && (
            <Link
              href={`/projects/${slug}`}
              className="
                inline-flex items-center gap-1.5
                text-zinc-400
                hover:text-white
                transition-all duration-150
              "
            >
              <FontAwesomeIcon icon={faCircleInfo} className="opacity-50" size="xs" />
              <span>Details</span>
            </Link>
          )}

          {openUrl && (
            <a
              href={openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5
                text-zinc-400
                hover:text-white
                transition-all duration-150
              "
            >
              <span>View</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="opacity-50"
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
                text-zinc-500
                hover:text-white
                transition-colors duration-150
              "
            >
              <FontAwesomeIcon icon={faGithub} className="opacity-50" size="xs" />
              <span>Code</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
