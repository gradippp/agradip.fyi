import { ProjectData } from "@/types";

const gh = (repo: string) => `https://github.com/gradippp/${repo}`;

export const PROJECTS: ProjectData[] = [
  {
    name: "Agradip.fyi",
    openUrl: "https://agradip.fyi/",
    repoUrl: gh("agradip.fyi"),
    description: "This website, literally.",
    tags: ["Next.js", "Vite", "Portfolio"],
  },
  {
    name: "SlashU",
    openUrl: "https://files.agradip.fyi/u",
    description:
      "A minimal file-sharing service written in PHP for personal use among friends.",
    tags: ["PHP", "Files"],
  },
  {
    name: "SteganoLSB",
    repoUrl: gh("SteganoLSB"),
    description:
      "A small C++ command-line tool for hiding and extracting messages in images using LSB (Least Significant Bit) steganography.",
    tags: ["C++"],
  },
  {
    name: "Super Fancy Index",
    repoUrl: gh("superfancyindex"),
    description: "A custom Nginx fancyindex theme.",
    tags: ["HTML", "CSS", "JavaScript", "Files"],
  },
  {
    name: "haste-server",
    openUrl: "https://paste.agradip.fyi",
    repoUrl: gh("haste-server"),
    description: "My custom fork of the open-source haste-server.",
    tags: ["NodeJS", "Paste"],
  },
];
