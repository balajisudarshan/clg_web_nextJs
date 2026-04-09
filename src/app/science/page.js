"use client"

export default function ScienceAboutPage() {
    return (
        <div className="space-y-10">
            {/* OVERVIEW SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E29820]/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
                <div className="mb-8 relative">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider flex items-center gap-2">
                        <span className="w-8 h-px bg-[#E29820]"></span>
                        Department Overview
                    </p>
                    <h2 className="text-4xl font-black text-slate-900 mt-2 tracking-tight">Science &<br/>Humanities</h2>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-lg relative">
                    <p className="text-justify font-medium italic border-l-4 border-[#E29820] pl-6 py-2 bg-orange-50/30 rounded-r-xl">
                        "The Department of Science & Humanities is a multidisciplinary department established in 1979. It plays a vital role in grooming students with basic knowledge of sciences and humanities, fundamental to every engineer's success."
                    </p>
                    <p className="text-justify">
                        Emphasis on practical education coupled with strong concept-oriented teaching-learning process has been the backbone of the department ever since its inception. The excellent infrastructure is further an added advantage, featuring well-established laboratories with modern equipment and personalized training.
                    </p>
                    <p className="text-justify">
                        Beyond academics, the department oversees integral administrative and co-curricular wings including Admissions, Physical Education, Library, NSS, and NCC (Armed and Naval wings). It also fosters creativity through various clubs like Literary, Language, Cultural, and Painting Clubs.
                    </p>
                </div>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { num: "1979", label: "Established", color: "text-[#E29820]", bg: "bg-orange-50" },
                    { num: "27", label: "Dedicated Faculty", color: "text-blue-600", bg: "bg-blue-50" },
                    { num: "20", label: "Ph.D. Holders", color: "text-emerald-600", bg: "bg-emerald-50" },
                    { num: "04", label: "Full-scale Labs", color: "text-purple-600", bg: "bg-purple-50" }
                ].map((stat, idx) => (
                    <div key={idx} className={`p-8 rounded-2xl ${stat.bg} border border-white shadow-sm transition-transform hover:-translate-y-1`}>
                        <div className={`text-3xl font-black ${stat.color}`}>{stat.num}</div>
                        <div className="text-sm text-slate-500 font-bold mt-2 uppercase tracking-tight">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* DISCIPLINES */}
            <div className="bg-slate-900 rounded-2xl p-10 shadow-xl border border-slate-800 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                
                <div className="mb-10 relative">
                    <p className="text-[#E29820] font-bold text-sm uppercase tracking-[0.2em] mb-2">Academic Spectrum</p>
                    <h2 className="text-3xl font-bold">Sub-Departments & Subjects</h2>
                    <div className="w-20 h-1.5 bg-[#E29820] rounded-full mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {[
                        { name: "Mathematics", desc: "Calculus, Differential Equations & Analysis", icon: "∫" },
                        { name: "Physics", desc: "Semiconductors, Optics & Quantum Physics", icon: "Φ" },
                        { name: "Chemistry", desc: "Chemical Processes & Material Science", icon: "Δ" },
                        { name: "English", desc: "Proficiency & Soft Skills Development", icon: "Aa" },
                        { name: "Economics", desc: "Managerial Economics & Finance", icon: "$" },
                        { name: "Environmental Sci", desc: "Sustainability & Ecological Awareness", icon: "E" }
                    ].map((subject, idx) => (
                        <div key={idx} className="group p-5 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-[#E29820]/50 transition-all hover:bg-slate-800 cursor-default">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-lg bg-[#E29820]/20 text-[#E29820] flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                                    {subject.icon}
                                </span>
                                <div>
                                    <h4 className="font-bold text-white group-hover:text-[#E29820] transition-colors">{subject.name}</h4>
                                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">{subject.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
