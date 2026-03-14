"use client";

import React, { useState, useRef, useEffect } from "react";

const RegistrationForm = ({ activeStep, setActiveStep }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [dob, setDob] = useState("");
    const [constituency, setConstituency] = useState("");
    const [activeSkills, setActiveSkills] = useState(["Python"]);
    const [idea, setIdea] = useState("");

    const [constituencySearch, setConstituencySearch] = useState("");
    const [skillSearch, setSkillSearch] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const [charCount, setCharCount] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'

    const toggleSkill = (skill) => {
        setActiveStep(3);
        setActiveSkills((prev) =>
            prev.includes(skill)
                ? prev.filter((s) => s !== skill)
                : [...prev, skill]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    email,
                    whatsappNumber,
                    dob,
                    constituency,
                    skills: activeSkills,
                    idea,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Registration failed");
            }

            setSubmitStatus("success");
            // Reset form on success
            setFullName("");
            setEmail("");
            setWhatsappNumber("");
            setDob("");
            setConstituency("");
            setActiveSkills([]);
            setIdea("");
            setCharCount(0);
            setConstituencySearch("");
            setSkillSearch("");
        } catch (err) {
            console.error("Submit error:", err);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const fuzzyMatch = (text, query) => {
        if (!query) return true;
        const term = query.toLowerCase().replace(/\s+/g, "");
        const string = text.toLowerCase().replace(/\s+/g, "");
        let i = 0,
            j = 0;
        while (i < term.length && j < string.length) {
            if (term[i] === string[j]) i++;
            j++;
        }
        return i === term.length;
    };

    const constituencies = [
        "Manjeshwar", "Kasaragod", "Udma", "Kanhangad", "Trikaripur",
        "Payyannur", "Kalliasseri", "Taliparamba", "Irikkur", "Azhikode",
        "Kannur", "Dharmadam", "Thalassery", "Kuthuparamba", "Mattannur",
        "Peravoor", "Mananthavady", "Sulthanbathery", "Kalpetta", "Vadakara",
        "Kuttiadi", "Nadapuram", "Quilandy (Koyilandy)", "Perambra", "Balusseri",
        "Elathur", "Kozhikode North", "Kozhikode South", "Beypore", "Kunnamangalam",
        "Koduvally", "Thiruvambadi", "Kondotty", "Ernad", "Nilambur", "Wandoor",
        "Manjeri", "Perinthalmanna", "Mankada", "Malappuram", "Vengara",
        "Vallikkunnu", "Tirurangadi", "Tanur", "Tirur", "Kottakkal", "Thavanur",
        "Ponnani", "Thrithala", "Pattambi", "Shoranur", "Ottapalam", "Kongad",
        "Mannarkkad", "Malampuzha", "Palakkad", "Tarur", "Chittur", "Nenmara",
        "Alathur", "Chelakkara", "Kunnamkulam", "Guruvayoor", "Manalur",
        "Wadakkanchery", "Ollur", "Thrissur", "Nattika", "Kaipamangalam",
        "Irinjalakuda", "Puthukkad", "Chalakudy", "Kodungallur", "Perumbavoor",
        "Angamaly", "Aluva", "Kalamassery", "Paravur", "Vypeen", "Kochi",
        "Thrippunithura", "Ernakulam", "Thrikkakara", "Kunnathunad", "Piravom",
        "Muvattupuzha", "Kothamangalam", "Devikulam", "Udumbanchola", "Thodupuzha",
        "Idukki", "Peerumade", "Pala", "Kaduthuruthy", "Vaikom", "Ettumanoor",
        "Kottayam", "Puthuppally", "Changanassery", "Kanjirappally", "Poonjar",
        "Aroor", "Cherthala", "Alappuzha", "Ambalappuzha", "Kuttanad", "Haripad",
        "Kayamkulam", "Mavelikara", "Chengannur", "Thiruvalla", "Ranni",
        "Aranmula", "Konni", "Adoor", "Karunagappally", "Chavara", "Kunnathur",
        "Kottarakkara", "Pathanapuram", "Punalur", "Chadayamangalam", "Kundara",
        "Kollam", "Eravipuram", "Chathannoor", "Varkala", "Attingal",
        "Chirayinkeezhu", "Nedumangad", "Vamanapuram", "Kazhakkoottam",
        "Vattiyoorkavu", "Thiruvananthapuram", "Nemom", "Aruvikkara", "Parassala",
        "Kattakada", "Kovalam", "Neyyattinkara"
    ];
    
    const skills = [
        {
            name: "Data Analytics",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Machine Learning",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Deep Learning",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 7h16M4 12h16M4 17h16M7 7v10M12 7v10M17 7v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Python",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "UI-UX/Backend Developer",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Graphic Design",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Video Production (Reels)",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Script Writing",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Content Writing",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Management",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "AI Video Production",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M13 3l1 2M17 5l-1 1M20 9l-2 .5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Digital Marketing",
            icon: (
                <svg className="w-6 h-6 sm:w-8 md:w-10 mb-2 sm:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
    ];

    const filteredConstituencies = constituencies.filter(c => fuzzyMatch(c, constituencySearch));
    const filteredSkills = skills.filter(s => fuzzyMatch(s.name, skillSearch));

    return (
        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Identity & Location */}
            <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-industrial uppercase border-b-2 border-authoritative-red inline-block mb-3 sm:mb-4">
                    Core Data
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                        <label className="block uppercase text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">Full Name</label>
                        <input
                            onFocus={() => setActiveStep(1)}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="w-full p-3 sm:p-4 text-base sm:text-lg"
                            placeholder="Enter Your Name.."
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="block uppercase text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">Email Address</label>
                        <input
                            onFocus={() => setActiveStep(1)}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 sm:p-4 text-base sm:text-lg"
                            placeholder="Enter Your Email.."
                            type="email"
                        />
                    </div>
                    <div>
                        <label className="block uppercase text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">WhatsApp Number</label>
                        <input
                            onFocus={() => setActiveStep(1)}
                            value={whatsappNumber}
                            onChange={(e) => setWhatsappNumber(e.target.value)}
                            required
                            className="w-full p-3 sm:p-4 text-base sm:text-lg"
                            placeholder="Enter Your WhatsApp Number.."
                            type="tel"
                        />
                    </div>
                    <div>
                        <label className="block uppercase text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">Date of Birth</label>
                        <input
                            onFocus={() => setActiveStep(1)}
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                            max={new Date().toISOString().split("T")[0]}
                            className="w-full p-3 sm:p-4 text-base sm:text-lg"
                            type="date"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2 relative" ref={dropdownRef}>
                        <label className="block uppercase text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">Constituency (Kerala)</label>
                        
                        {/* Custom Searchable Dropdown */}
                        <div 
                            className={`w-full p-3 sm:p-4 text-base sm:text-lg border-2 transition-all cursor-pointer flex justify-between items-center ${isDropdownOpen ? "border-authoritative-red bg-white shadow-lg" : "border-deep-charcoal/10 bg-black/5"}`}
                            onClick={() => {
                                setIsDropdownOpen(!isDropdownOpen);
                                setActiveStep(2);
                            }}
                        >
                            <span className={constituency ? "text-deep-charcoal font-bold" : "text-deep-charcoal/40"}>
                                {constituency ? constituencies.find(c => c.toLowerCase().replace(/\s+/g, '-') === constituency) || constituency : "Select your constituency..."}
                            </span>
                            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </div>

                        {isDropdownOpen && (
                            <div className="absolute z-50 left-0 right-0 mt-2 bg-white border-2 border-authoritative-red shadow-2xl max-h-[300px] flex flex-col">
                                <div className="p-2 border-b border-deep-charcoal/10 bg-clinical-white">
                                    <input
                                        type="text"
                                        autoFocus
                                        value={constituencySearch}
                                        onChange={(e) => setConstituencySearch(e.target.value)}
                                        placeholder="Type to filter..."
                                        className="w-full p-2 text-sm bg-white border border-deep-charcoal/20 focus:border-authoritative-red focus:outline-none font-mono"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </div>
                                <div className="overflow-y-auto scrollbar-custom">
                                    {filteredConstituencies.length > 0 ? (
                                        filteredConstituencies.map(name => {
                                            const val = name.toLowerCase().replace(/\s+/g, '-');
                                            return (
                                                <div
                                                    key={name}
                                                    className={`p-3 text-sm sm:text-base border-b border-deep-charcoal/5 cursor-pointer hover:bg-authoritative-red hover:text-white transition-colors uppercase font-bold tracking-tight ${constituency === val ? "bg-authoritative-red text-white" : ""}`}
                                                    onClick={() => {
                                                        setConstituency(val);
                                                        setIsDropdownOpen(false);
                                                        setConstituencySearch("");
                                                    }}
                                                >
                                                    {name}
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div className="p-4 text-center text-xs text-deep-charcoal/40 uppercase font-mono">
                                            No matches found // Try another term
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        
                        {/* Native Hidden Select for Form Submission/Validation */}
                        <select
                            value={constituency}
                            onChange={(e) => setConstituency(e.target.value)}
                            required
                            className="hidden"
                            id="constituency-select"
                        >
                            <option value="">Select...</option>
                            {constituencies.map(name => (
                                <option key={name} value={name.toLowerCase().replace(/\s+/g, '-')}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Skill Grid Section */}
            <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
                    <h3 className="text-2xl sm:text-3xl font-industrial uppercase border-b-2 border-authoritative-red inline-block">
                        Professional Stack
                    </h3>
                    <div className="w-full sm:w-64">
                        <label className="block uppercase text-[10px] font-bold mb-1 opacity-50">Filter Skills</label>
                        <input
                            type="text"
                            onFocus={() => setActiveStep(3)}
                            value={skillSearch}
                            onChange={(e) => setSkillSearch(e.target.value)}
                            placeholder="Search skills..."
                            className="w-full p-2 text-sm bg-black/5 border border-deep-charcoal/10 focus:border-authoritative-red focus:outline-none transition-colors"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-0 border-t border-l border-deep-charcoal">
                    {filteredSkills.length > 0 ? (
                        filteredSkills.map((skill) => (
                            <div
                                key={skill.name}
                                className={`skill-tile aspect-square border-r border-b border-deep-charcoal flex flex-col items-center justify-center p-2 sm:p-4 text-center cursor-pointer transition-all hover:bg-black/5 ${activeSkills.includes(skill.name) ? "active" : ""
                                    }`}
                                onClick={() => toggleSkill(skill.name)}
                            >
                                {skill.icon}
                                <span className="font-bold uppercase text-[8px] sm:text-xs md:text-sm tracking-tighter leading-tight">
                                    {skill.name}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-deep-charcoal/40 font-mono uppercase tracking-widest border-r border-b border-deep-charcoal">
                            No matching skills found // Reset search
                        </div>
                    )}
                </div>
            </div>

            {/* Idea Laboratory */}
            <div className={`transition-all duration-500 p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 border-2 ${activeStep === 4 ? "bg-deep-charcoal border-accent-yellow shadow-[0_0_30px_rgba(255,214,10,0.1)]" : "bg-black/5 border-deep-charcoal/10"}`}>
                <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-2 h-2 rounded-full animate-pulse mr-2 ${activeStep === 4 ? "bg-accent-yellow" : "bg-deep-charcoal/20"}`}></div>
                    <label className={`uppercase text-xs font-bold tracking-[0.2em] transition-colors ${activeStep === 4 ? "text-accent-yellow/80" : "text-deep-charcoal/40"}`}>
                        Phase 04 // Idea Laboratory
                    </label>
                </div>

                <h4 className={`text-lg sm:text-xl font-bold uppercase mb-3 sm:mb-4 leading-tight transition-colors ${activeStep === 4 ? "text-white" : "text-deep-charcoal"}`}>
                    Suggest your one idea for the <span className="text-authoritative-red">Election Campaign</span>.
                </h4>

                <div className="relative">
                    <textarea
                        onFocus={() => setActiveStep(4)}
                        value={idea}
                        onChange={(e) => {
                            setIdea(e.target.value);
                            setCharCount(e.target.value.length);
                        }}
                        className={`w-full h-36 sm:h-48 bg-black/20 backdrop-blur-sm border-2 p-4 sm:p-6 text-base sm:text-lg transition-all duration-300 resize-none font-mono ${activeStep === 4
                            ? "border-accent-yellow/50 text-white placeholder-white/20"
                            : "border-deep-charcoal/10 text-deep-charcoal placeholder-deep-charcoal/30"
                            } focus:border-accent-yellow focus:ring-0`}
                        maxLength={300}
                        placeholder="e.g., Developing an automated fact-checking bot for WhatsApp groups..."
                    ></textarea>

                    {/* Industrial corners decor */}
                    {activeStep === 4 && (
                        <>
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent-yellow -translate-x-1 -translate-y-1"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent-yellow translate-x-1 -translate-y-1"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent-yellow -translate-x-1 translate-y-1"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent-yellow translate-x-1 translate-y-1"></div>
                        </>
                    )}
                </div>

                <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest pt-2">
                    <span className={activeStep === 4 ? "text-accent-yellow/40" : "text-deep-charcoal/30"}>
                        Status: {activeStep === 4 ? "Active_Input" : "Awaiting_Focus"}
                    </span>
                    <span className={activeStep === 4 ? "text-accent-yellow" : "text-deep-charcoal/40"}>
                        <span className="font-bold">{charCount}</span> / 300_LIMIT
                    </span>
                </div>
            </div>

            <div className="space-y-4">
                {submitStatus === "success" && (
                    <div className="p-6 bg-green-500/10 border-2 border-green-500 text-green-500 font-bold uppercase text-center animate-pulse">
                        Welcome To DigitalBrigade
                    </div>
                )}
                {submitStatus === "error" && (
                    <div className="p-6 bg-authoritative-red/10 border-2 border-authoritative-red text-authoritative-red font-bold uppercase text-center">
                        Registration Failed. Please try again.
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-deep-charcoal text-white font-industrial py-5 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl hover:bg-authoritative-red transition-all group disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]`}
                >
                    {isSubmitting ? "TRANSMITTING..." : "Join The Fight"}{" "}
                    {!isSubmitting && (
                        <span className="ml-4 group-hover:translate-x-2 inline-block transition-transform">
                            →
                        </span>
                    )}
                </button>
            </div>
        </form>
    );
};

export default RegistrationForm;
