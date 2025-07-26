"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { CONFIG } from "@/data/config";

export default function RedPilled() {
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

        <p className="text-gray-300 leading-relaxed text-lg mt-4 italic">
          &quot;Look again at that dot. That&apos;s here. That&apos;s home.
          That&apos;s us.&quot;
        </p>

        <div className="text-gray-400 text-base leading-relaxed text-left mt-4 px-2 md:px-6 space-y-2">
          <p>
            On that pale blue dot floats everything we&apos;ve ever known —
            every joy, every pain, every hero, coward, explorer, and creator. It
            reminds us of our shared fragility and the absurdity of our
            divisions.
          </p>
          <p>
            When you zoom out far enough, our pride, our wars, and even our
            borders blur into irrelevance. The universe doesn&apos;t care for
            our labels — but maybe that&apos;s a good thing. It&apos;s a call to
            humility, to kindness, and to curiosity.
          </p>
          <p>
            To be red-pilled is not just to &quot;see the truth,&quot; but to
            understand the scale of our ignorance — and to embrace the beauty of
            it.
          </p>
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
