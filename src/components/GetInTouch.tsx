import React from "react";

const GetInTouch = () => {
    return (
        <div className="flex justify-center mb-12">
            <div className="relative group">
                {/* Colorful Glow Background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition-all duration-300"></div>

                <a
                    href="https://weblyx.site#contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-2 px-6 py-2.5 bg-zinc-950 text-white rounded-lg font-medium transition-transform hover:scale-105 active:scale-95"
                >
                    Get In Touch
                </a>
            </div>
        </div>
    );
};

export default GetInTouch;
