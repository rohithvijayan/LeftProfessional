"use client";

import React from "react";

const KeralaMap = () => {
    return (
        <div className="p-8 border-2 border-deep-charcoal relative bg-white/50">
            <h4 className="font-industrial uppercase text-sm mb-8 tracking-widest">
                Active Influence Map
            </h4>
            <div className="w-full flex justify-center">
                {/* Minimalist Kerala SVG */}
                <svg
                    className="h-[500px] text-deep-charcoal"
                    viewBox="0 0 150 400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M60,10 L70,30 L65,60 L75,90 L60,120 L55,160 L65,190 L50,230 L55,270 L40,310 L45,350 L30,380 L15,390 L25,360 L10,320 L20,280 L15,240 L30,190 L25,140 L35,100 L25,60 L40,30 Z" />
                    {/* Glowing Dots */}
                    <circle className="animate-pulse" cx="55" cy="160" fill="#D01C1C" r="4" />
                    <circle cx="65" cy="90" fill="#D01C1C" r="3" />
                    <circle className="animate-pulse" cx="35" cy="350" fill="#D01C1C" r="5" />
                </svg>
            </div>
            <div className="absolute bottom-8 right-8 text-right">
                <span className="text-4xl font-industrial block">140</span>
                <span className="text-xs uppercase font-bold text-authoritative-red">
                    Target Sectors
                </span>
            </div>
        </div>
    );
};

export default KeralaMap;
