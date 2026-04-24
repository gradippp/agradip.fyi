"use client";

import { CONFIG } from "@/lib/config";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-900 to-black text-center">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white">
          404
        </h1>
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white">
          Page Not Found
        </h2>
      </div>

      <HLine />

      {/* GIF and Message */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6 mb-6 md:mb-10">
        <img
          src={CONFIG.AGRADIP_BUNNY_GIF}
          alt="Funny dancing bunny GIF"
          className="w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-80 object-cover rounded-xl"
        />

        <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 max-w-md">
          Oops! This page does not exist. <br />
          But don&apos;t worry gang, I am here to dance it out!
        </p>
      </div>

      <HLine />

      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 mt-6 text-blue-500 hover:text-blue-300 transition"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Home
      </Link>
    </main>
  );
}

function HLine() {
  return <hr className="my-6 border-t border-gray-700 w-full max-w-xl" />;
}
