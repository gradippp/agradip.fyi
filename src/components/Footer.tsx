"use client";

import { useEffect, useState } from "react";

const messages = [
  "Just vibing in the footer, don't mind me!",
  "Yes, I built this. No, I wouldn’t trust it either.",
  "Look at you, searching for meaning in a footer. Get help.",
  "Footer enjoyer? That’s your personality now.",
  "You probably pronounce ‘meme’ as ‘me-me’, don’t you?",
  "You probably watch a productivity video… then take a 3-hour nap",
  "Dawg, you really out here acting like this footer owes you something?",
  "Homie no offense, your personality couldn't fight off a toddler.",
];

export default function Footer() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  }, []);

  return (
    <footer className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-4 pb-6">
      <div>
        {"\u00A9"} {new Date().getFullYear()} Agradip. All rights reserved.
      </div>
      <div className="mt-2 text-xs italic text-gray-400">{message}</div>
    </footer>
  );
}
