import { PROJECTS } from "@/data/projects";
import Section from "@/components/ui/Section";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | Agradip's Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="text-white min-h-screen p-4 flex flex-col items-center relative overflow-hidden">
      <div className="text-center max-w-4xl w-full py-12 px-6 sm:px-12 mt-12 mb-4">
        <div className="mb-8 text-left">
          <Link
            href="/projects"
            className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            &larr; Back to Projects
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6 mb-12">
          {project.iconUrl && (
            <div className="w-24 h-24 p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
              <img
                src={project.iconUrl}
                alt={`${project.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            {project.name}
          </h1>
          {project.tags && (
            <div className="flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <Section title="Overview">
          <div className="text-left text-zinc-300 leading-relaxed max-w-2xl mx-auto space-y-6">
            <p className="text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              {project.openUrl && (
                <a
                  href={project.openUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
                  <span>Visit Project</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} size="sm" />
                  <span>View Source</span>
                </a>
              )}
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
