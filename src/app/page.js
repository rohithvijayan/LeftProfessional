"use client";

import React, { useState } from "react";
import RegistrationForm from "@/components/RegistrationForm";
import KeralaMap from "@/components/KeralaMap";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="bg-clinical-white text-deep-charcoal font-sans selection:bg-accent-yellow overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative min-h-[100dvh] flex items-center pt-16 pb-20 px-4 sm:px-6 lg:px-24 soviet-grid hero-custom-bg overflow-hidden">
        {/* Dark Overlay for Legibility */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        {/* Geometric Gear Watermark */}
        <svg
          className="gear-watermark z-0 hidden sm:block"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <path d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 25c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zM92.5 45H85c-1-4.3-2.8-8.3-5.2-11.8l5.3-5.3c.8-.8.8-2 0-2.8l-4.4-4.4c-.8-.8-2-.8-2.8 0l-5.3 5.3C69.1 23.6 65.1 21.8 60.8 20.8V13.3c0-1.1-.9-2-2-2h-6.2c-1.1 0-2 .9-2 2v7.5c-4.3 1-8.3 2.8-11.8 5.2l-5.3-5.3c-.8-.8-2-.8-2.8 0l-4.4 4.4c-.8.8-.8 2 0 2.8l5.3 5.3c-2.4 3.5-4.2 7.5-5.2 11.8H13.3c-1.1 0-2 .9-2 2v6.2c0 1.1.9 2 2 2h7.5c1 4.3 2.8 8.3 5.2 11.8l-5.3 5.3c-.8.8-.8 2 0 2.8l4.4 4.4c.8.8 2 .8 2.8 0l5.3-5.3c3.5 2.4 7.5 4.2 11.8 5.2v7.5c0 1.1.9 2 2 2h6.2c1.1 0 2-.9 2-2v-7.5c4.3-1 8.3-2.8 11.8-5.2l5.3 5.3c.8.8 2 .8 2.8 0l4.4-4.4c.8-.8.8-2 0-2.8l-5.3-5.3c2.4-3.5 4.2-7.5 5.2-11.8h7.5c1.1 0 2-.9 2-2v-6.2c0-1.1-.9-2-2-2z"></path>
        </svg>
        <div className="z-10 max-w-5xl w-full">
          <div className="mb-3 sm:mb-4 md:mb-8 flex items-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-authoritative-red flex items-center justify-center mr-3 sm:mr-4 shrink-0">
              <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">3.0</span>
            </div>
            <span className="uppercase tracking-widest font-bold border-b-2 border-white text-white text-xs sm:text-sm md:text-base">
              Citizen-Architect
            </span>
          </div>
          <h1 className="font-industrial text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-white leading-tight mb-3 sm:mb-4 drop-shadow-lg text-balance">
            നിങ്ങളുടെ പ്രൊഫഷണൽ മികവ് മാറ്റത്തിനായി ഉപയോഗിക്കൂ.
          </h1>
          <p className="font-industrial text-lg sm:text-xl md:text-4xl text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-md flex flex-wrap gap-1 sm:gap-2">
            <span className="text-authoritative-red">CODE.</span>
            <span className="text-white">DESIGN.</span>
            <span className="text-authoritative-red">ORGANIZE.</span>
          </p>
          <p className="text-sm sm:text-base md:text-xl max-w-2xl mb-5 sm:mb-6 md:mb-8 text-white/90 leading-relaxed font-medium">
            A platform for professionals to work for the 2026
            election campaign. Deploy your skills for the collective progress.
          </p>
          <a
            className="inline-block bg-authoritative-red text-white font-industrial text-sm sm:text-base md:text-lg px-5 py-3 sm:px-6 md:px-10 md:py-5 hover:bg-white hover:text-deep-charcoal transition-colors uppercase tracking-wider shadow-xl active:scale-95"
            href="#register"
          >
            [Join the Collective]
          </a>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </header>

      {/* Form Workflow Section */}
      <main className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-24 border-t-2 border-deep-charcoal" id="register">
        <div className="max-w-6xl mx-auto">
          {/* Progress Tracker */}
          <nav className="mb-10 sm:mb-14 md:mb-20 flex overflow-x-auto sm:grid sm:grid-cols-4 gap-3 sm:gap-4 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            <div className={`border-l-4 pl-3 sm:pl-4 py-2 transition-all duration-300 shrink-0 min-w-[120px] sm:min-w-0 ${activeStep === 1 ? "border-authoritative-red scale-105" : "border-gray-300 opacity-50"}`}>
              <span className={`block text-[10px] sm:text-xs uppercase font-bold ${activeStep === 1 ? "text-authoritative-red" : ""}`}>Step 01</span>
              <span className="text-sm sm:text-lg font-bold">Identity</span>
            </div>
            <div className={`border-l-4 pl-3 sm:pl-4 py-2 transition-all duration-300 shrink-0 min-w-[120px] sm:min-w-0 ${activeStep === 2 ? "border-authoritative-red scale-105" : "border-gray-300 opacity-50"}`}>
              <span className={`block text-[10px] sm:text-xs uppercase font-bold ${activeStep === 2 ? "text-authoritative-red" : ""}`}>Step 02</span>
              <span className="text-sm sm:text-lg font-bold">Location</span>
            </div>
            <div className={`border-l-4 pl-3 sm:pl-4 py-2 transition-all duration-300 shrink-0 min-w-[120px] sm:min-w-0 ${activeStep === 3 ? "border-authoritative-red scale-105" : "border-gray-300 opacity-50"}`}>
              <span className={`block text-[10px] sm:text-xs uppercase font-bold ${activeStep === 3 ? "text-authoritative-red" : ""}`}>Step 03</span>
              <span className="text-sm sm:text-lg font-bold">Expertise</span>
            </div>
            <div className={`border-l-4 pl-3 sm:pl-4 py-2 transition-all duration-300 shrink-0 min-w-[120px] sm:min-w-0 ${activeStep === 4 ? "border-authoritative-red scale-105" : "border-gray-300 opacity-50"}`}>
              <span className={`block text-[10px] sm:text-xs uppercase font-bold ${activeStep === 4 ? "text-authoritative-red" : ""}`}>Step 04</span>
              <span className="text-sm sm:text-lg font-bold">The Pitch</span>
            </div>
          </nav>

          <div className="w-full">
            {/* Input Controls */}
            <section>
              <RegistrationForm activeStep={activeStep} setActiveStep={setActiveStep} />
            </section>
          </div>


          {/* Manifesto Snippet */}
          <div className="mt-10 sm:mt-16 border-l-4 sm:border-l-8 border-authoritative-red p-4 sm:p-6 md:p-8 bg-clinical-white max-w-3xl">
            <blockquote className="text-lg sm:text-xl md:text-2xl font-bold leading-tight italic">
              "Building the digital infrastructure for the masses is not just a job—it is a duty of the professional vanguard."
            </blockquote>
            <p className="mt-3 sm:mt-4 uppercase text-[10px] sm:text-xs font-bold">— Section 4: Technological Sovereignty</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-deep-charcoal text-clinical-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 md:gap-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-industrial text-2xl sm:text-3xl md:text-4xl text-authoritative-red">
              CITIZEN-ARCHITECT 3.0
            </h2>
            <div className="stark-divider w-16 sm:w-24"></div>
            <p className="max-w-sm text-clinical-white/60 text-sm sm:text-base">
              Organized by the CPIM Tech Support Wing. Dedicated to systematic
              progress through technological rigor and collective action.
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="font-industrial text-base sm:text-lg md:text-xl">BUILT FOR THE PEOPLE.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
