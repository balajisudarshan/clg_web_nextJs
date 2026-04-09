"use client"

export default function ScienceVisionMissionPage() {
    return (
        <div className="space-y-10">
            {/* VISION SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E29820]/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
                <div className="mb-8 relative">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider flex items-center gap-2">
                        <span className="w-8 h-px bg-[#E29820]"></span>
                        Aspiration
                    </p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Our Vision</h2>
                </div>
                <div className="relative">
                    <p className="text-xl text-slate-700 leading-relaxed font-semibold italic border-l-4 border-[#E29820] pl-6 py-2 bg-orange-50/30 rounded-r-xl">
                        "To emerge as a comprehensive Institute that provides quality technical education and research thereby building up a precious human resource for the industry and society."
                    </p>
                </div>
            </div>

            {/* MISSION SECTION */}
            <div className="bg-slate-900 rounded-2xl p-10 shadow-xl border border-slate-800 text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                    <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>

                <div className="mb-10 relative">
                    <p className="text-[#E29820] font-bold text-sm uppercase tracking-[0.2em] mb-2">Execution Strategy</p>
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                    <div className="w-20 h-1.5 bg-[#E29820] rounded-full mt-4"></div>
                </div>

                <div className="grid gap-6 relative">
                    {[
                        { id: "M1", text: "To provide a learner-centered environment that challenges individuals to actively participate in the education process." },
                        { id: "M2", text: "To empower the faculty to excel in teaching while engaging in research, creativity and public service." },
                        { id: "M3", text: "To attain self-sustainability and overall development through Research, Consultancy." },
                        { id: "M4", text: "To produce best quality Engineering Professionals by imparting quality training, hands on experience and value education." }
                    ].map((item) => (
                        <div key={item.id} className="group flex items-start gap-6 p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-[#E29820]/30 transition-all hover:bg-slate-800 cursor-default">
                            <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E29820] to-[#DF4323] text-white flex items-center justify-center font-black text-lg group-hover:scale-110 transition-transform shadow-lg shadow-orange-950/50">
                                {item.id}
                            </span>
                            <p className="text-slate-300 leading-relaxed text-lg pt-1 group-hover:text-white transition-colors">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
