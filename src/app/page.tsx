"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import { PROJECTS } from "@/data/projects";
import { SOCIALS } from "@/data/socials";
import PillPopup from "@/components/PillPopup"; // <-- NEW
import "@/app/anims.css";

export default function Home() {
  const [showPills, setShowPills] = useState(false);

  const handleImageClick = () => {
    setShowPills(true);
  };

  const handleRedPill = () => {
    console.log("Red Pill chosen");
    setShowPills(false);
  };

  const handleBluePill = () => {
    console.log("Blue Pill chosen");
    setShowPills(false);
  };

  return (
    <main className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-4 flex items-center justify-center relative overflow-hidden">
      {showPills && (
        <PillPopup
          onRedPill={handleRedPill}
          onBluePill={handleBluePill}
          onClose={() => setShowPills(false)}
        />
      )}

      <div className="text-center max-w-4xl w-full">
        <div
          className="mx-auto mt-4 w-32 h-32 cursor-pointer"
          onClick={handleImageClick}
        >
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-full inline-block">
            <img
              src="/myphoto.jpg"
              alt="Agradip"
              className="rounded-full border-4 border-black shadow-lg w-full h-full"
            />
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-bold">Hi, I am Agradip</h2>
        <p className="mt-2 mb-4 text-gray-400">
          I swam too fast to the egg once and here I am <span>😔</span>
        </p>

        <hr className="my-4 border-gray-600" />

        <div className="mt-4">
          <h4 className="text-xl font-semibold mb-2">My Projects</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

        <div className="mt-4">
          <h4 className="text-xl font-semibold mb-2">My Socials</h4>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {SOCIALS.map((social) => (
              <SocialLink key={social.link} {...social} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
