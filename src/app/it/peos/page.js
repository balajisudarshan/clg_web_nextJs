"use client"

export default function ITPEOsPage() {
    return (
        <div className="space-y-10">
            {/* PEO SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="mb-6">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">Objectives</p>
                    <h2 className="text-2xl font-extrabold text-slate-800 mt-1 uppercase">Program Educational Objectives (PEOs)</h2>
                    <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
                </div>

                <div className="grid gap-6 px-4">
                    {[
                        { id: 1, text: "Graduates of the program will be successful professionals in IT and related industries, exhibiting strong technical and problem-solving skills." },
                        { id: 2, text: "Graduates of the program will exhibit skills in identifying, formulating and solving problems associated with IT sector while adhering to professional and ethical standards." },
                        { id: 3, text: "Graduates of the program will demonstrate an ability to work effectively as an individual and as a member of a team across various disciplines and engage in lifelong learning." }
                    ].map((peo) => (
                        <div key={peo.id} className="flex items-start gap-4 p-4 rounded-lg bg-orange-50/50 border border-orange-100 group hover:border-orange-300 transition-colors">
                            <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#E29820] text-white font-bold text-lg group-hover:scale-105 transition-transform">
                                PEO {peo.id}
                            </span>
                            <p className="text-slate-700 leading-relaxed font-semibold mt-1 text-justify">
                                {peo.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* PSO SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="mb-6">
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">Specifics</p>
                    <h2 className="text-2xl font-extrabold text-slate-800 mt-1 uppercase">Program Specific Outcomes (PSOs)</h2>
                    <div className="w-16 h-1 bg-amber-600 rounded-full mt-4"></div>
                </div>

                <div className="grid gap-6 px-4">
                    {[
                        { id: 1, text: "The ability to understand and design quality Information Technology solutions to solve real-world problems by applying standard software engineering practices." },
                        { id: 2, text: "The ability to adapt to a rapidly changing environment by learning and using modern IT tools and techniques." }
                    ].map((pso) => (
                        <div key={pso.id} className="flex items-start gap-4 p-4 rounded-lg bg-amber-50/50 border border-amber-100 group hover:border-amber-300 transition-colors">
                            <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-amber-600 text-white font-black text-lg group-hover:scale-105 transition-transform">
                                PSO {pso.id}
                            </span>
                            <p className="text-slate-700 leading-relaxed font-semibold mt-1 text-justify">
                                {pso.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
