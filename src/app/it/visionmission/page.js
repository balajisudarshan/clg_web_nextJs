"use client"

export default function ITVisionMissionPage() {
    return (
        <div className="space-y-10">
            {/* VISION SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <i className="bi bi-eye text-8xl text-blue-600"></i>
                </div>
                <div className="mb-6 relative">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">Aspiration</p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Our Vision</h2>
                    <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-semibold italic text-justify">
                    "To create IT professionals with high-end proficiency, multi-tasking and leadership skills, along with a high sense of social and professional values."
                </p>
            </div>

            {/* MISSION SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="mb-8">
                    <p className="text-sm font-bold text-emerald-600 uppercase tracking-wider text-justify">Execution</p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Our Mission</h2>
                    <div className="w-16 h-1 bg-emerald-600 rounded-full mt-4"></div>
                </div>

                <div className="grid gap-6">
                    {[
                        { id: "M1", text: "To create an ambience in the department for academic excellence of students by providing basic infrastructure and state-of-the-art laboratories for learning through continuous research along with value and ethical-based education." }
                    ].map((item) => (
                        <div key={item.id} className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100 hover:border-emerald-200 transition-colors">
                            <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-200">
                                {item.id}
                            </span>
                            <p className="text-slate-700 leading-relaxed mt-1 text-lg font-medium">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
