"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { marked } from "marked";
import { CONFIG } from "@/data/config";
import { TailSpin } from "react-loader-spinner";

const renderer = new marked.Renderer();

renderer.paragraph = (p) => {
  return `<p class="mb-4 text-gray-400 leading-relaxed">${p.text}</p>`;
};

renderer.hr = (tokens) => {
  return `<hr class="my-8" />`;
};

renderer.heading = ({ tokens, depth }) => {
  const text = tokens.map((token) => token.raw || token.raw || "").join("");
  let size = "";

  switch (depth) {
    case 2:
      size = "text-3xl md:text-4xl font-bold";
      break;
    case 3:
      size = "text-2xl md:text-3xl font-semibold";
      break;
    default:
      size = "text-xl font-semibold";
      break;
  }

  let id = text
    .replaceAll("-", "--")
    .replaceAll(/[^A-Za-z0-9]/g, "-")
    .replaceAll(" ", "-");
  id = id.endsWith("-") ? id.slice(0, id.length - 1) : id;
  id = id.toLowerCase();

  return `<h${depth} class="${size} mt-8 mb-4 anchor-heading" id="${id}"><a href="#${id}" class="anchor"></a>${text}</h${depth}>`;
};

marked.setOptions({ renderer });

export default function RedPilled() {
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/redpilled.md")
      .then((res) => res.text())
      .then(async (markdown) => {
        setHtmlContent(await marked(markdown, {}));
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 text-white relative">
      <div className="relative z-10 max-w-4xl w-full text-center space-y-6 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400">
          The Pale Blue Dot
        </h1>

        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border border-gray-700">
          <video
            src={CONFIG.PALE_BLUE_DOT_MP4}
            controls
            className="w-full h-full"
          />
        </div>

        <hr className="my-4 border-gray-600" />

        <div className="text-gray-400 text-base leading-relaxed text-left mt-4 px-2 md:px-6 space-y-4">
          {loading ? (
            <div className="flex justify-center items-center h-60">
              <TailSpin
                height={40}
                width={40}
                color="#3B82F6"
                ariaLabel="loading"
              />
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          )}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-6 text-blue-500 hover:text-blue-300 transition"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
