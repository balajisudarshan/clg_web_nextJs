import Link from "next/link";

export default function CSEEventsPage() {
    const events = [
        { sno: 1, title: "May-2022", link: "https://drive.google.com/file/d/1jkGsG2OB0n5evQexkuw6U-8AZU4h360L/view?usp=sharing" },
        { sno: 2, title: "June-2022", link: "https://drive.google.com/file/d/1fzSBYZz79Q2V5tYwgTC5vVsdDZoFRX_o/view?usp=sharing" },
        { sno: 3, title: "Techvyuha-2023", link: "https://drive.google.com/file/d/12Ik5qd3EvwC8zaBtMjscbCcoXs9lor-Z/view?usp=sharing" },
        { sno: 4, title: "Techvyuha-2024", link: "/CSE/Techvyuha2k24.jpeg" },
        { sno: 5, title: "IEEE-SB-NEXUSVERSE-2024", link: "/CSE/IEEE270424.jpg" },
        { sno: 6, title: "ISTE Student Chapter-GNOSIS-2024", link: "/CSE/Nosis2024.jpeg" },
        { sno: 7, title: "Workshops / FDP's", link: "#" },
        { sno: 8, title: "Guest Lectures", link: "#" },
    ];

    return (
        <div className="space-y-10">
            {/* HEADER */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg className="w-32 h-32 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                    </svg>
                </div>
                <div className="relative">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-[0.2em] mb-2">Student Life & Activities</p>
                    <h2 className="text-3xl font-extrabold text-slate-800">Department Events</h2>
                    <div className="w-16 h-1.5 bg-[#E29820] rounded-full mt-4"></div>
                </div>
            </div>

            {/* EVENTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                    <a
                        key={event.sno}
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-[#E29820]/40 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden relative"
                    >
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E29820] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        
                        <div className="flex items-center gap-5 pl-2 uppercase tracking-tighter">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center font-black group-hover:bg-[#E29820] group-hover:text-white transition-all duration-300 shadow-inner">
                                {event.sno < 10 ? `0${event.sno}` : event.sno}
                            </div>
                            <h3 className="font-extrabold text-slate-700 group-hover:text-[#E29820] transition-colors text-lg tracking-tight">
                                {event.title}
                            </h3>
                        </div>
                        
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#E29820]/10 transition-all active:scale-90">
                            <svg className="w-5 h-5 text-slate-300 group-hover:text-[#E29820] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>
            
            {/* CTA / BANNER */}
            <div className="bg-[#E29820] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <h4 className="text-3xl font-black mb-4">Want to participate?</h4>
                        <p className="text-white/80 font-medium text-lg leading-relaxed">
                            Stay tuned for upcoming technical fests, workshops, and student chapter activities. Join our community and showcase your talent!
                        </p>
                    </div>
                    <div className="flex-shrink-0 bg-white/10 p-4 rounded-3xl backdrop-blur-md border border-white/20">
                         <svg className="w-24 h-24 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
