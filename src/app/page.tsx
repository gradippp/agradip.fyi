"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import { PROJECTS } from "@/data/projects";
import { SOCIALS } from "@/data/socials";
import PillPopup from "@/components/PillPopup";
import "@/app/anims.css";
import { LINKS } from "@/data/links";
import { MISC } from "@/data/misc";
import { TECH_ITEMS } from "@/data/techitems";
import TechItem from "@/components/TechItem";
import Twemoji from "@/components/Twemoji";
import Swal from "sweetalert2";
import { CONFIG } from "@/data/config";

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
    }, 300);
  };

  const handleRedPill = () => {
    window.location.href = MISC.RED_PILL_REDIRECT;
    closePillPopup();
  };

  const handleBluePill = () => {
    closePillPopup();
    Swal.fire({
      title: "Blue Pill Chosen",
      text: "You chose ignorance. You can always come back if you decide to uncover the truth.",
      icon: "info",
      confirmButtonText: "Continue",
      confirmButtonColor: "#3085d6",
      allowOutsideClick: false,
      didOpen: (popup) => {
        popup.style.backgroundImage = `url("${CONFIG.PALE_BLUE_DOT_PNG}")`;
        popup.style.backgroundSize = "cover";
        popup.style.backgroundPosition = "center";
        popup.style.color = "white";
        popup.style.border = "1px solid rgba(255, 255, 255, 0.2)";
      },
    });
  };

  return (
    <main className="text-white min-h-screen p-4 flex items-center justify-center relative overflow-hidden">
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
          I swam too fast to the egg once and here I am{" "}
          <Twemoji name=":pensive:" />
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
              into Networking and System Administration. I&#39;ve taken care of
              a few Linux servers over the past few years like they were my own
              kids.
            </p>
            <p>
              Outside the tech bubble, you&#39;ll usually find me making
              electronic music, capturing life through mobile photography, or
              diving into late-night philosophical rabbit holes.
            </p>
          </div>
        </div>

        <hr className="my-4 border-gray-600" />

        <div className="mt-4">
          <h4 className="text-xl font-semibold mb-2">Tech Things I Use</h4>
          <div className="w-full flex flex-col gap-6">
            {TECH_ITEMS.map((cat) => (
              <div
                key={cat.category}
                className="flex flex-col md:flex-row md:items-center"
              >
                <div className="w-full md:w-[360px] mb-2 md:mb-0">
                  <h6 className="text-md font-semibold">{cat.category}</h6>
                </div>

                <div className="w-full">
                  <div className="flex flex-wrap gap-4">
                    {cat.items.map((item) => (
                      <TechItem key={item.name} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

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
      </div>
    </main>
  );
}
