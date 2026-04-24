"use client";

import { useState } from "react";
import Link from "next/link";
import SocialLink from "@/components/social/SocialLink";
import { PROJECTS } from "@/data/projects";
import { SOCIALS } from "@/data/socials";
import PillPopup from "@/components/ui/PillPopup";
import { LINKS } from "@/data/links";
import { TECH_ITEMS } from "@/data/techitems";
import TechItem from "@/components/home/TechItem";
import Twemoji from "@/components/ui/Twemoji";
import Swal from "sweetalert2";
import { CONFIG } from "@/lib/config";

import Section from "@/components/ui/Section";
import CardGrid from "@/components/ui/CardGrid";
import GetInTouch from "@/components/home/GetInTouch";

export default function Home() {
  const handleImageClick = () => {
    setShowPills(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleImageClick();
    }
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
    window.location.href = CONFIG.RED_PILL_REDIRECT || "/redpilled";
    closePillPopup();
  };

  const handleBluePill = () => {
    closePillPopup();
    Swal.fire({
      title: "Blue Pill Chosen",
      text: "You chose ignorance. You can always come back if you decide to uncover the truth.",
      icon: "info",
      confirmButtonText: "Continue",
      confirmButtonColor: "#ffffff",
      allowOutsideClick: false,
      didOpen: (popup) => {
        popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
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

      <div className="text-center max-w-4xl w-full py-12 px-6 sm:px-12 mt-12 mb-4">
        <div
          className="mx-auto mt-4 w-32 h-32 cursor-pointer focus:outline-none rounded-full transition-transform duration-500 hover:scale-105 active:scale-95 group relative"
          onClick={handleImageClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label="Open secret pill popup"
        >
          {/* Outer Ring Glow */}
          <div className="absolute -inset-1 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-zinc-900 p-1 rounded-full inline-block border border-white/10 group-hover:border-white/30 transition-colors duration-500">
            <img
              src="/myphoto.jpg"
              alt="Agradip"
              className="rounded-full border-4 border-zinc-950 shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="mt-8 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Hi, I am <span className="text-accent">Agradip</span>
        </h1>
        <p className="mt-4 mb-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Full-stack developer from India. I swam too fast to the egg once and here I am{" "}
          <Twemoji name=":pensive:" />
        </p>

        <GetInTouch />

        <Section title="About Me">
          <div className="space-y-6 text-left text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              Hi! I am Agradip, a 19-year-old student and full-stack developer
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
              Outside the tech bubble, you&#39;ll usually find me making{" "}
              <a
                href="https://linktr.ee/yvksha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-4 transition-all"
              >
                electronic music
              </a>
              , capturing life through mobile photography, or diving into
              late-night philosophical rabbit holes.
            </p>
          </div>
        </Section>

        <Section title="Tech Things I Use">
          <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
            {TECH_ITEMS.map((cat) => (
              <div key={cat.category} className="flex flex-col gap-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 text-left">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((item) => (
                    <TechItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="My Projects">
          <CardGrid items={PROJECTS.filter((p) => p.featured)} />
          <div className="mt-8">
            <Link
              href="/projects"
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium underline underline-offset-4"
            >
              View All Projects &rarr;
            </Link>
          </div>
        </Section>

        <Section title="Links & Services">
          <CardGrid items={LINKS} />
        </Section>

        <Section title="My Socials">
          <div className="flex flex-wrap justify-center gap-3 mt-2 max-w-2xl mx-auto">
            {SOCIALS.map((social) => (
              <SocialLink key={social.link} {...social} />
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
