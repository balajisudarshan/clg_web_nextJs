"use client"

export default function ECEVisionMissionPage() {
    return (
        <div className="space-y-10">
            {/* VISION SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
                <div className="mb-6 relative">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">Aspiration</p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Our Vision</h2>
                    <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium italic">
                    "To be a center of excellence in Electronics and Communication Engineering education and research, producing globally competent professionals with social responsibility."
                </p>
            </div>

            {/* MISSION SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="mb-8">
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">Execution</p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Our Mission</h2>
                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-4"></div>
                </div>

                <div className="grid gap-6">
                    {[
                        { id: "M1", text: "To provide a conducive environment for students to acquire in-depth knowledge in the field of Electronics and Communication Engineering." },
                        { id: "M2", text: "To facilitate learning through research and innovation, and to instill ethical values for professional growth." }
                    ].map((item) => (
                        <div key={item.id} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                {item.id}
                            </span>
                            <p className="text-slate-700 leading-relaxed mt-1">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
