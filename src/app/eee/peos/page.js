"use client"

export default function EEEPEOsPage() {
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
                        { id: 1, text: "To provide graduates with a strong foundation in Mathematics, Science and Electrical and Electronics Engineering fundamentals to solve real world problems." },
                        { id: 2, text: "To prepare graduates for successful professional career in industry or for higher studies and to make them entrepreneurs." },
                        { id: 3, text: "To inculcate in graduates professional and ethical attitude, social responsibility and effective communication skills." },
                        { id: 4, text: "To encourage graduates for lifelong learning and keep them updated with latest developments in the field of electrical and electronics engineering." }
                    ].map((peo) => (
                        <div key={peo.id} className="flex items-start gap-4 p-4 rounded-lg bg-orange-50/50 border border-orange-100">
                            <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#E29820] text-white font-bold text-lg">
                                PEO {peo.id}
                            </span>
                            <p className="text-slate-700 leading-relaxed font-medium mt-1">
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
                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-4"></div>
                </div>

                <div className="grid gap-6 px-4">
                    {[
                        { id: 1, text: "The graduates will have the ability to design and evaluate the performance of Electrical and Electronics systems as per the specific requirements." },
                        { id: 2, text: "The graduates will have the ability to solve engineering problems using latest hardware and software tools related to the field of electrical and electronics engineering." }
                    ].map((pso) => (
                        <div key={pso.id} className="flex items-start gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100">
                            <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg">
                                PSO {pso.id}
                            </span>
                            <p className="text-slate-700 leading-relaxed font-medium mt-1">
                                {pso.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
