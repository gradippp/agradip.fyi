import ProjectCard from "@/components/projects/ProjectCard";
import { ProjectData } from "@/types";

interface CardGridProps {
  items: ProjectData[];
}

export default function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mx-auto">
      {items.map((item) => (
        <ProjectCard key={item.name} {...item} />
      ))}
    </div>
  );
}
