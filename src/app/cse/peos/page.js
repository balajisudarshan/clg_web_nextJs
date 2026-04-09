"use client"

export default function CSEPEOsPage() {
    return (
        <div className="space-y-10">
            {/* PEO SECTION */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E29820]/5 rounded-bl-full transition-all group-hover:scale-110"></div>
                <div className="mb-10 relative">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-[0.2em]">Objectives</p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Program Educational Objectives (PEOs)</h2>
                    <div className="w-16 h-1.5 bg-[#E29820] rounded-full mt-3"></div>
                </div>

                <div className="grid gap-5 relative">
                    {[
                        { id: 1, text: "To produce computer science graduates with deep knowledge in both theoretical and practical concepts of computer science and with an ability to apply these concepts in solving real-time problems." },
                        { id: 2, text: "To prepare graduates to keep update with the standard practices in the computer industry and with the latest technologies through lifelong learning and in order to achieve success in their professional career." },
                        { id: 3, text: "To develop graduates into successful computer professionals with high ethical values and with an ability to work in a team with better communication skills." }
                    ].map((peo) => (
                        <div key={peo.id} className="flex items-start gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#E29820]/30 hover:bg-white hover:shadow-md transition-all group/item">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 group-hover/item:bg-[#E29820] group-hover/item:text-white transition-colors duration-300">
                                <span className="text-xl font-black text-slate-800 group-hover/item:text-white">0{peo.id}</span>
                            </div>
                            <p className="text-slate-700 leading-relaxed font-medium text-lg pt-1">
                                {peo.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
