import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import CardGrid from "@/components/ui/CardGrid";
import Section from "@/components/ui/Section";
import Twemoji from "@/components/ui/Twemoji";

export const metadata = {
  title: "Projects | Agradip's Portfolio",
  description: "A collection of things I've built or worked on.",
};

export default function ProjectsPage() {
  return (
    <main className="text-white min-h-screen p-4 flex flex-col items-center relative overflow-hidden">
      <div className="text-center w-[90%] py-12 px-6 sm:px-12 mt-12 mb-4 mx-auto">
        <div className="mb-8 text-left">
          <Link
            href="/"
            className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            &larr; Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          All <span className="text-accent">Projects</span>
        </h1>
        <p className="mb-12 text-lg text-zinc-400 w-[95%] mx-auto leading-relaxed">
          A collection of projects I&#39;ve built, ranging from web apps to CLI tools and server configurations <Twemoji name=":rocket:" />
        </p>

        <Section title="Portfolio">
          <CardGrid items={PROJECTS} />
        </Section>
      </div>
    </main>
  );
}
