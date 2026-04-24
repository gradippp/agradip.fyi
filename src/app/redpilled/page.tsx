"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { CONFIG } from "@/lib/config";
import { TailSpin } from "react-loader-spinner";
import { parseMarkdown } from "@/lib/markdown";

export default function RedPilled() {
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/redpilled.md")
      .then((res) => res.text())
      .then(async (markdown) => {
        setHtmlContent(await parseMarkdown(markdown));
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 text-white relative">
      <div className="relative z-10 w-[90%] text-center space-y-6 flex-grow mx-auto">
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
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
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
