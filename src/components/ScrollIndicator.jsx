"use client";

import React from "react";

const ScrollIndicator = () => {
    const scrollToNext = () => {
        const nextSection = document.getElementById("register");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={scrollToNext}
            className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce cursor-pointer bg-transparent border-none p-0 focus:outline-none"
            aria-label="Scroll to registration section"
        >
            <span className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest mb-1 font-bold">
                Scroll
            </span>
            <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
            </svg>
        </button>
    );
};

export default ScrollIndicator;
