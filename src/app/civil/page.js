"use client"

export default function CivilAboutPage() {
    return (
        <div className="space-y-10">
            {/* OVERVIEW SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="mb-6">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">About</p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Department Overview</h2>
                    <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                    <p className="text-justify font-medium">
                        The Department of Civil Engineering was established in the year <strong>1980</strong>. The department has an intake of <strong>60 undergraduate</strong> students. The B.Tech Programme in Civil Engineering offered by the Department has been accredited by NBA for the third time under Tier-I for three years.
                    </p>
                    <p className="text-justify font-medium">
                        The department is recognized as a research centre by JNTUA, Anantapuramu. The department has well-qualified and experienced faculty members with a passion for teaching and research. The faculty members have published many research papers in reputed journals and conferences.
                    </p>
                </div>
            </div>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-[#E29820]/30 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-[#E29820]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">Infrastructure</h3>
                    <p className="text-slate-600 leading-relaxed">
                        The department has well-equipped laboratories with state-of-the-art equipment. The department library has a good collection of textbooks, reference books, and journals.
                    </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-blue-300 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">Research & Innovation</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Strong focus on practical research and consultancy services, collaborating with industry partners to solve real-world engineering challenges.
                    </p>
                </div>
            </div>
        </div>
    )
}
