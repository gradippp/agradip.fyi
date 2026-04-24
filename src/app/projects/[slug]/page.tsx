import { PROJECTS } from "@/data/projects";
import Section from "@/components/ui/Section";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import fs from "fs/promises";
import path from "path";
import { parseMarkdown } from "@/lib/markdown";

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

  let contentHtml = "";
  try {
    const filePath = path.join(process.cwd(), "src", "content", "projects", `${slug}.md`);
    const fileContent = await fs.readFile(filePath, "utf8");
    contentHtml = await parseMarkdown(fileContent);
  } catch (_) {
    console.error(`No markdown content found for project: ${slug}`);
  }

  return (
    <main className="text-white min-h-screen p-4 flex flex-col items-center relative overflow-hidden">
      <div className="text-center w-[90%] py-12 px-6 sm:px-12 mt-12 mb-4 mx-auto">
        <div className="mb-8 text-left">
          <Link
            href="/projects"
            className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            &larr; Back to Projects
          </Link>
        </div>

        <div className="flex flex-col items-center gap-8 mb-24">
          {project.iconUrl && (
            <div className="w-24 h-24 p-5 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center">
              <img
                src={project.iconUrl}
                alt={`${project.name} logo`}
                className="w-full h-full object-contain opacity-90"
              />
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
            {project.name}
          </h1>
          {project.tags && (
            <div className="flex flex-wrap justify-center gap-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <Section title="Overview">
          <div className="text-left text-zinc-300 leading-relaxed w-full mx-auto space-y-10">
            {contentHtml ? (
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            ) : (
              <p className="text-xl text-zinc-400">{project.description}</p>
            )}
            
            <div className="flex flex-wrap gap-4 pt-8 border-t border-white/[0.05]">
              {project.openUrl && (
                <a
                  href={project.openUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-150 active:scale-95"
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
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border border-white/[0.05] text-zinc-400 font-bold rounded-xl hover:bg-white/5 hover:text-white transition-all duration-150 active:scale-95"
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
