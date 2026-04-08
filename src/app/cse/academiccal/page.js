import Link from "next/link";

export default function CSEAcademicCalendarPage() {
    const calendars = [
        {
            year: "2025 - 2026",
            isCurrent: true,
            semesters: [
                {
                    name: "Semester I",
                    files: [
                        { name: "I B.Tech — I Semester", link: "/Acdemic_calendar/IB.Tech.ISem.2025-26.pdf" },
                        { name: "II, III & IV B.Tech — I Semester", link: "/Acdemic_calendar/II,III&IVB.Tech.ISem.2025.pdf" }
                    ]
                }
            ]
        },
        {
            year: "2024 - 2025",
            isCurrent: false,
            semesters: [
                {
                    name: "Semester I",
                    files: [
                        { name: "I B.Tech — I Semester", link: "/Acdemic_calendar/I-B.Tech24-25.jpeg" },
                        { name: "II, III & IV B.Tech — I Semester", link: "/Acdemic_calendar/Academic_Calendar(2024-25).pdf" }
                    ]
                },
                {
                    name: "Semester II",
                    files: [
                        { name: "I B.Tech — II Semester", link: "/Acdemic_calendar/I-B.Tech.II-Semester2024-2025.pdf" },
                        { name: "II & III B.Tech — II Semester", link: "/Acdemic_calendar/II&IIII-B.Tech.IISemester2024-25.pdf" },
                        { name: "IV B.Tech — II Semester", link: "/Acdemic_calendar/IV_IIAcademicCalendar2024-25.pdf" }
                    ]
                }
            ]
        },
        {
            year: "2023 - 2024",
            isCurrent: false,
            semesters: [
                {
                    name: "Semester I",
                    files: [
                        { name: "II, III & IV B.Tech — I Semester", link: "/Acdemic_calendar/AY23-24.jpeg" },
                        { name: "I B.Tech — I Semester", link: "/Acdemic_calendar/I-B.Tech.I-Sem.2023-24.pdf" }
                    ]
                },
                {
                    name: "Semester II",
                    files: [
                        { name: "II & III B.Tech — II Semester", link: "/Acdemic_calendar/II&IIII-B.Tech.II-Semester2023-24.pdf" },
                        { name: "IV B.Tech — II Semester", link: "/Acdemic_calendar/IV-B.Tech.II-Semester2023-24.pdf" },
                        { name: "I B.Tech — II Semester (Revised)", link: "/Acdemic_calendar/I-B.Tech.II-Semester2023-2024(Revised).pdf" }
                    ]
                }
            ]
        },
        {
            year: "2022 - 2023",
            isCurrent: false,
            semesters: [
                {
                    name: "Semester I",
                    files: [
                        { name: "I, II, III & IV B.Tech — I Semester", link: "/Acdemic_calendar/2022-2023-I-SEM.pdf" }
                    ]
                },
                {
                    name: "Semester II",
                    files: [
                        { name: "I, II, III & IV B.Tech — II Semester", link: "/Acdemic_calendar/2022-2023-II-SEM.pdf" }
                    ]
                }
            ]
        }
    ];

    return (
        <div className="space-y-10">
            {/* HEADER */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg className="w-32 h-32 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
                    </svg>
                </div>
                <div className="relative">
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">Student Resources</p>
                    <h2 className="text-3xl font-extrabold text-slate-800">Academic Calendars</h2>
                    <div className="w-16 h-1.5 bg-blue-500 rounded-full mt-4"></div>
                </div>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: "Current Year", value: "2025 – 2026", icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" },
                    { label: "Archive Available", value: "2021 – 2026", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { label: "Affiliation", value: "JNTUA, Anantapur", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-center gap-5 hover:border-blue-300 transition-colors group">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-300">
                            <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.1em]">{stat.label}</p>
                            <p className="text-xl font-extrabold text-slate-800">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CALENDARS LIST */}
            <div className="space-y-10">
                {calendars.map((cal, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative group">
                        <div className="bg-slate-50 px-8 py-5 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                                <h2 className="text-2xl font-extrabold text-slate-800">Academic Year {cal.year}</h2>
                            </div>
                            {cal.isCurrent && (
                                <span className="px-4 py-1 bg-green-100 text-green-700 text-[10px] font-black rounded-full uppercase tracking-widest border border-green-200">
                                    Current
                                </span>
                            )}
                        </div>

                        <div className="p-8 space-y-10">
                            {cal.semesters.map((sem, sIdx) => (
                                <div key={sIdx} className="space-y-6">
                                    <h3 className="text-lg font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-3">
                                        <span className="w-8 h-[2px] bg-slate-200"></span>
                                        {sem.name}
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        {sem.files.map((file, fIdx) => (
                                            <div key={fIdx} className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-[#E29820]/40 hover:bg-[#E29820]/5 transition-all group/file shadow-sm">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                                                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <span className="font-bold text-slate-700 leading-tight">{file.name}</span>
                                                </div>
                                                <a 
                                                    href={file.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#E29820] hover:text-white transition-all shadow-inner group-hover/file:scale-110"
                                                >
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ADVISORY */}
            <div className="bg-slate-900 rounded-3xl p-10 relative overflow-hidden text-white shadow-2xl">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-7h2v5h-2z" />
                    </svg>
                </div>
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                    <div className="w-16 h-16 bg-[#E29820] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#E29820]/40">
                         <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-2xl font-black mb-2 tracking-tight">Official Schedule Notice</h4>
                        <p className="text-slate-400 text-lg font-medium max-w-2xl">
                            Academic calendars are determined by JNTUA and the institute governance. Dates for examinations, holidays, and registration are subject to change. Always verify with official department notices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
