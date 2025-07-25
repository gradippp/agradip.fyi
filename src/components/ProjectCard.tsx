interface ProjectCardProps {
  name: string;
  href: string;
  description: string;
  iconUrl?: string;
}

export default function ProjectCard({
  name,
  href,
  description,
  iconUrl,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-900 text-white p-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 w-full sm:w-72 group border border-gray-700 hover:border-blue-500"
      aria-label={`Visit project: ${name}`}
    >
      {iconUrl && (
        <img
          src={iconUrl}
          alt={`${name} logo`}
          className="w-10 h-10 mb-3 rounded-md object-contain"
        />
      )}
      <h5 className="font-semibold text-lg text-white mb-1 group-hover:text-blue-400 transition-colors duration-200">
        {name}
      </h5>
      <p className="text-sm text-gray-400 leading-snug">{description}</p>
    </a>
  );
}
