"use client"

export default function CivilVisionMissionPage() {
    return (
        <div className="space-y-10">
            {/* VISION SECTION */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E29820]/5 rounded-bl-full transition-all group-hover:scale-110"></div>
                <div className="flex items-center gap-5 mb-8 relative">
                    <div className="w-14 h-14 bg-[#E29820]/10 rounded-2xl flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#E29820]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-[#E29820] uppercase tracking-[0.2em]">Aspiration</p>
                        <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Our Vision</h2>
                        <div className="w-16 h-1.5 bg-[#E29820] rounded-full mt-2"></div>
                    </div>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-xl text-justify font-medium italic relative pl-4 border-l-4 border-[#E29820]/20">
                    "To promote excellence in civil engineering education, enrich research and provide quality professional service to the society in all areas of civil engineering."
                </p>
            </div>

            {/* MISSION SECTION */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full transition-all group-hover:scale-110"></div>
                <div className="flex items-center gap-5 mb-8 relative">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 14 4-4"/>
                            <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em]">Strategy</p>
                        <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Our Mission</h2>
                        <div className="w-16 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    </div>
                </div>
                
                <div className="space-y-4 relative">
                    {[
                        "To provide high quality education in Civil Engineering that prepares graduates for roles in public and private sectors and for lifelong learning.",
                        "To conduct research that will yield new knowledge and technology for reuse and for addressing the needs of Civil Engineering Profession.",
                        "To provide service that will contribute to the well-being of our citizens and organizations."
                    ].map((text, idx) => (
                        <div key={idx} className="flex items-start gap-5 p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                            <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                                {idx + 1}
                            </div>
                            <p className="text-slate-700 leading-relaxed font-medium text-lg pt-0.5">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
