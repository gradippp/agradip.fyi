"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import { PROJECTS } from "@/data/projects";
import { SOCIALS } from "@/data/socials";
import PillPopup from "@/components/PillPopup";
import "@/app/anims.css";
import Footer from "@/components/Footer";
import { LINKS } from "@/data/links";

export default function Home() {
  const handleImageClick = () => {
    setShowPills(true);
  };

  const [showPills, setShowPills] = useState(false);
  const [closing, setClosing] = useState(false);

  const closePillPopup = () => {
    setClosing(true);
    setTimeout(() => {
      setShowPills(false);
      setClosing(false);
    }, 300); // match this to the animation duration
  };

  const handleRedPill = () => {
    console.log("Red Pill chosen");
    closePillPopup();
  };

  const handleBluePill = () => {
    console.log("Blue Pill chosen");
    closePillPopup();
  };

  return (
    <main className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-4 flex items-center justify-center relative overflow-hidden">
      {showPills && (
        <PillPopup
          onRedPill={handleRedPill}
          onBluePill={handleBluePill}
          closing={closing}
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
          <h4 className="text-xl font-semibold">About Me</h4>

          <div className="space-y-4 text-left text-gray-300 leading-relaxed">
            <p>
              Hi! I am Agradip, an 18-year-old student and full-stack developer
              from India.
            </p>
            <p>
              I have over <strong>4 years</strong> of experience as a developer,
              and I love fiddling around with random IT stuff. I am especially
              into Networking and System Administration. I’ve taken care of a
              few Linux servers over the past few years like they were my own
              kids.
            </p>
            <p>
              Outside the tech bubble, you’ll usually find me making electronic
              music, capturing life through mobile photography, or diving into
              late-night philosophical rabbit holes.
            </p>
          </div>
        </div>

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
          <h4 className="text-xl font-semibold mb-2">Links & Services</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {LINKS.map((link) => (
              <ProjectCard key={link.name} {...link} />
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
        <Footer />
      </div>
    </main>
  );
}
