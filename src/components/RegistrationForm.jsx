"use client";

import React, { useState } from "react";

const RegistrationForm = ({ activeStep, setActiveStep }) => {
    const [fullName, setFullName] = useState("");
    const [professionalRole, setProfessionalRole] = useState("");
    const [constituency, setConstituency] = useState("");
    const [activeSkills, setActiveSkills] = useState(["Python"]);
    const [idea, setIdea] = useState("");

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
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    professionalRole,
                    constituency,
                    skills: activeSkills,
                    idea,
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                // Reset form on success
                setFullName("");
                setProfessionalRole("");
                setConstituency("");
                setActiveSkills([]);
                setIdea("");
                setCharCount(0);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const skills = [
        {
            name: "Data Analytics",
            icon: (
                <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Machine Learning",
            icon: (
                <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Deep Learning",
            icon: (
                <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 7h16M4 12h16M4 17h16M7 7v10M12 7v10M17 7v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Python",
            icon: (
                <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Javascript",
            icon: (
                <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Graphic Design",
            icon: (
                <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Video Production (Reels)",
            icon: (
                <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Script Writing",
            icon: (
                <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Content Writing",
            icon: (
                <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            name: "Management",
            icon: (
                <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
            ),
        },
    ];

    return (
        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Identity & Location */}
            <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-industrial uppercase border-b-2 border-authoritative-red inline-block mb-3 sm:mb-4">
                    Core Data
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                        <label className="block uppercase text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">Full Name</label>
                        <input
                            onFocus={() => setActiveStep(1)}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="w-full p-3 sm:p-4 text-base sm:text-lg"
                            placeholder="John Doe"
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="block uppercase text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">Professional Role</label>
                        <input
                            onFocus={() => setActiveStep(1)}
                            value={professionalRole}
                            onChange={(e) => setProfessionalRole(e.target.value)}
                            required
                            className="w-full p-3 sm:p-4 text-base sm:text-lg"
                            placeholder="Senior Developer"
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="block uppercase text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">Constituency (Kerala)</label>
                        <select
                            onFocus={() => setActiveStep(2)}
                            value={constituency}
                            onChange={(e) => setConstituency(e.target.value)}
                            required
                            className="w-full p-3 sm:p-4 text-base sm:text-lg appearance-none"
                            id="constituency-select"
                        >
                            <option value="">Select your constituency...</option>
                            <option value="manjeshwar">Manjeshwar</option>
                            <option value="kasaragod">Kasaragod</option>
                            <option value="udma">Udma</option>
                            <option value="kanhangad">Kanhangad</option>
                            <option value="trikaripur">Trikaripur</option>
                            <option value="payyannur">Payyannur</option>
                            <option value="kalliasseri">Kalliasseri</option>
                            <option value="taliparamba">Taliparamba</option>
                            <option value="irikkur">Irikkur</option>
                            <option value="azhikode">Azhikode</option>
                            <option value="kannur">Kannur</option>
                            <option value="dharmadam">Dharmadam</option>
                            <option value="thalassery">Thalassery</option>
                            <option value="kuthuparamba">Kuthuparamba</option>
                            <option value="mattannur">Mattannur</option>
                            <option value="peravoor">Peravoor</option>
                            <option value="mananthavady">Mananthavady </option>
                            <option value="sulthanbathery">Sulthanbathery </option>
                            <option value="kalpetta">Kalpetta</option>
                            <option value="vadakara">Vadakara</option>
                            <option value="kuttiadi">Kuttiadi</option>
                            <option value="nadapuram">Nadapuram</option>
                            <option value="quilandy">Quilandy (Koyilandy)</option>
                            <option value="perambra">Perambra</option>
                            <option value="balusseri">Balusseri </option>
                            <option value="elathur">Elathur</option>
                            <option value="kozhikode-north">Kozhikode North</option>
                            <option value="kozhikode-south">Kozhikode South</option>
                            <option value="beypore">Beypore</option>
                            <option value="kunnamangalam">Kunnamangalam</option>
                            <option value="koduvally">Koduvally</option>
                            <option value="thiruvambadi">Thiruvambadi</option>
                            <option value="kondotty">Kondotty</option>
                            <option value="ernad">Ernad</option>
                            <option value="nilambur">Nilambur</option>
                            <option value="wandoor">Wandoor </option>
                            <option value="manjeri">Manjeri</option>
                            <option value="perinthalmanna">Perinthalmanna</option>
                            <option value="mankada">Mankada</option>
                            <option value="malappuram">Malappuram</option>
                            <option value="vengara">Vengara</option>
                            <option value="vallikkunnu">Vallikkunnu</option>
                            <option value="tirurangadi">Tirurangadi</option>
                            <option value="tanur">Tanur</option>
                            <option value="tirur">Tirur</option>
                            <option value="kottakkal">Kottakkal</option>
                            <option value="thavanur">Thavanur</option>
                            <option value="ponnani">Ponnani</option>
                            <option value="thrithala">Thrithala</option>
                            <option value="pattambi">Pattambi</option>
                            <option value="shoranur">Shoranur</option>
                            <option value="ottapalam">Ottapalam</option>
                            <option value="kongad">Kongad </option>
                            <option value="mannarkkad">Mannarkkad</option>
                            <option value="malampuzha">Malampuzha</option>
                            <option value="palakkad">Palakkad</option>
                            <option value="tarur">Tarur </option>
                            <option value="chittur">Chittur</option>
                            <option value="nenmara">Nenmara</option>
                            <option value="alathur">Alathur</option>
                            <option value="chelakkara">Chelakkara </option>
                            <option value="kunnamkulam">Kunnamkulam </option>
                            <option value="guruvayoor">Guruvayoor</option>
                            <option value="manalur">Manalur</option>
                            <option value="wadakkanchery">Wadakkanchery</option>
                            <option value="ollur">Ollur</option>
                            <option value="thrissur">Thrissur</option>
                            <option value="nattika">Nattika </option>
                            <option value="kaipamangalam">Kaipamangalam</option>
                            <option value="irinjalakuda">Irinjalakuda</option>
                            <option value="puthukkad">Puthukkad</option>
                            <option value="chalakudy">Chalakudy</option>
                            <option value="kodungallur">Kodungallur</option>
                            <option value="perumbavoor">Perumbavoor</option>
                            <option value="angamaly">Angamaly</option>
                            <option value="aluva">Aluva</option>
                            <option value="kalamassery">Kalamassery</option>
                            <option value="paravur">Paravur</option>
                            <option value="vypeen">Vypeen</option>
                            <option value="kochi">Kochi</option>
                            <option value="thrippunithura">Thrippunithura</option>
                            <option value="ernakulam">Ernakulam</option>
                            <option value="thrikkakara">Thrikkakara</option>
                            <option value="kunnathunad">Kunnathunad </option>
                            <option value="piravom">Piravom</option>
                            <option value="muvattupuzha">Muvattupuzha</option>
                            <option value="kothamangalam">Kothamangalam</option>
                            <option value="devikulam">Devikulam </option>
                            <option value="udumbanchola">Udumbanchola</option>
                            <option value="thodupuzha">Thodupuzha</option>
                            <option value="idukki">Idukki</option>
                            <option value="peerumade">Peerumade</option>
                            <option value="pala">Pala</option>
                            <option value="kaduthuruthy">Kaduthuruthy</option>
                            <option value="vaikom">Vaikom </option>
                            <option value="ettumanoor">Ettumanoor</option>
                            <option value="kottayam">Kottayam</option>
                            <option value="puthuppally">Puthuppally</option>
                            <option value="changanassery">Changanassery</option>
                            <option value="kanjirappally">Kanjirappally</option>
                            <option value="poonjar">Poonjar</option>
                            <option value="aroor">Aroor</option>
                            <option value="cherthala">Cherthala</option>
                            <option value="alappuzha">Alappuzha</option>
                            <option value="ambalappuzha">Ambalappuzha</option>
                            <option value="kuttanad">Kuttanad</option>
                            <option value="haripad">Haripad</option>
                            <option value="kayamkulam">Kayamkulam</option>
                            <option value="mavelikara">Mavelikara </option>
                            <option value="chengannur">Chengannur</option>
                            <option value="thiruvalla">Thiruvalla</option>
                            <option value="ranni">Ranni</option>
                            <option value="aranmula">Aranmula</option>
                            <option value="konni">Konni</option>
                            <option value="adoor">Adoor </option>
                            <option value="karunagappally">Karunagappally</option>
                            <option value="chavara">Chavara</option>
                            <option value="kunnathur">Kunnathur </option>
                            <option value="kottarakkara">Kottarakkara</option>
                            <option value="pathanapuram">Pathanapuram</option>
                            <option value="punalur">Punalur</option>
                            <option value="chadayamangalam">Chadayamangalam</option>
                            <option value="kundara">Kundara</option>
                            <option value="kollam">Kollam</option>
                            <option value="eravipuram">Eravipuram</option>
                            <option value="chathannoor">Chathannoor</option>
                            <option value="varkala">Varkala</option>
                            <option value="attingal">Attingal </option>
                            <option value="chirayinkeezhu">Chirayinkeezhu </option>
                            <option value="nedumangad">Nedumangad</option>
                            <option value="vamanapuram">Vamanapuram</option>
                            <option value="kazhakkoottam">Kazhakkoottam</option>
                            <option value="vattiyoorkavu">Vattiyoorkavu</option>
                            <option value="thiruvananthapuram">Thiruvananthapuram</option>
                            <option value="nemom">Nemom</option>
                            <option value="aruvikkara">Aruvikkara</option>
                            <option value="parassala">Parassala</option>
                            <option value="kattakada">Kattakada</option>
                            <option value="kovalam">Kovalam</option>
                            <option value="neyyattinkara">Neyyattinkara</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Skill Grid Section */}
            <div>
                <h3 className="text-2xl sm:text-3xl font-industrial uppercase border-b-2 border-authoritative-red inline-block mb-6 sm:mb-8">
                    Professional Stack
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0 border-t border-l border-deep-charcoal">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className={`skill-tile aspect-square border-r border-b border-deep-charcoal flex flex-col items-center justify-center p-4 text-center ${activeSkills.includes(skill.name) ? "active" : ""
                                }`}
                            onClick={() => toggleSkill(skill.name)}
                        >
                            {skill.icon}
                            <span className="font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-tighter">
                                {skill.name}
                            </span>
                        </div>
                    ))}
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
                        required
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
                        Credentials Received. Welcome to the Collective.
                    </div>
                )}
                {submitStatus === "error" && (
                    <div className="p-6 bg-authoritative-red/10 border-2 border-authoritative-red text-authoritative-red font-bold uppercase text-center">
                        Transmission Failed. Please check your data or connection.
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
