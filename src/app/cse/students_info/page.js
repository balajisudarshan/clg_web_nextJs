import Link from "next/link";

export default function CSEStudentsInfoPage() {
    const infoLinks = [
        { 
            sno: 1, 
            title: "Students Projects", 
            link: "#", 
            icon: "projects",
            description: "Explore the innovative projects and research work carried out by our students."
        },
        { 
            sno: 2, 
            title: "Students Internships", 
            link: "#", 
            icon: "internships",
            description: "View the list of companies and startups where our students have interned."
        },
        { 
            sno: 3, 
            title: "Students Placements", 
            link: "#", 
            icon: "placements",
            description: "Track the career milestones and top companies where our seniors are placed."
        },
    ];

    return (
        <div className="space-y-10">
            {/* HEADER */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg className="w-32 h-32 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                </div>
                <div className="relative">
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">Student Life & Activities</p>
                    <h2 className="text-3xl font-extrabold text-slate-800">Students Info</h2>
                    <div className="w-16 h-1.5 bg-blue-500 rounded-full mt-4"></div>
                </div>
            </div>

            {/* INFO CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {infoLinks.map((info) => (
                    <Link
                        key={info.sno}
                        href={info.link}
                        className="group flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-[#E29820]/40 hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden h-full"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 group-hover:bg-[#E29820]/5"></div>
                        
                        <div className="relative flex flex-col h-full">
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-[#E29820] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6 shadow-inner">
                                {info.icon === "projects" && (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                )}
                                {info.icon === "internships" && (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )}
                                {info.icon === "placements" && (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                )}
                            </div>
                            
                            <h3 className="text-xl font-black text-slate-800 group-hover:text-[#E29820] transition-colors mb-3 tracking-tight">
                                {info.title}
                            </h3>
                            
                            <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                                {info.description}
                            </p>
                            
                            <div className="flex items-center gap-2 text-sm font-bold text-[#E29820] opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                                View Details 
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* ADVISORY / CONTACT BOX */}
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-[#E29820] transition-colors">
                <div>
                    <h4 className="text-2xl font-black text-slate-800 mb-2">Need specific information?</h4>
                    <p className="text-slate-500 font-medium max-w-lg">
                        Our student portal and placement cell maintain separate records for detailed analysis and verified certificates. Contact the department office for archived information.
                    </p>
                </div>
                <Link 
                    href="/cse/contactus"
                    className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-[#E29820] transition-all duration-300 shadow-xl shadow-slate-200 active:scale-95"
                >
                    Contact Coordinator
                </Link>
            </div>
        </div>
    );
}
