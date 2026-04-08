"use client"

export default function ScienceEventsPage() {
    const events = [
        { title: "SRUJANA-2024 Poster", date: "2024", link: "/S-H/Events/SRUJANA2k24.jpeg" },
        { title: "SRUJANA-2023 Poster", date: "2023", link: "/S-H/Events/Srujana2K23-Poster.jpg" }
    ];

    return (
        <div className="space-y-10">
            {/* HEADER */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="mb-6">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">Activities</p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Department Events</h2>
                    <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
                </div>
                <p className="text-slate-600 leading-relaxed max-w-2xl">
                    The Department of Science & Humanities regularly organizes "SRUJANA", a state-level technical and cultural symposium to showcase student talents and foster a healthy competitive spirit.
                </p>
            </div>

            {/* EVENT CARDS */}
            <div className="grid gap-6">
                {events.map((event, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-[#E29820] transition-all group">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex flex-col items-center justify-center text-[#E29820] border border-orange-100 group-hover:bg-[#E29820] group-hover:text-white transition-colors">
                                <span className="text-xs font-bold uppercase">Year</span>
                                <span className="text-xl font-black">{event.date}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#E29820] transition-colors">{event.title}</h3>
                                <p className="text-sm text-slate-500 mt-1">Annual Technical Symposium</p>
                            </div>
                        </div>
                        <a 
                            href={event.link} 
                            target="_blank"
                            className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-[#E29820] transition-all flex items-center gap-2"
                        >
                            View Details
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
            
            {/* FOOTNOTE */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p className="text-blue-800 text-sm font-medium">
                    For more archive events and photos, please visit the central college gallery or contact the departmental coordinator.
                </p>
            </div>
        </div>
    )
}
