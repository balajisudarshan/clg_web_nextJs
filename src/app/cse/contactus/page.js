"use client"

export default function CSEContactUsPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CONTACT CARD */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group">
                <div className="h-3 bg-[#E29820]"></div>
                <div className="p-8">
                    <div className="mb-8">
                        <p className="text-sm font-bold text-[#E29820] uppercase tracking-[0.2em] mb-1">Get in Touch</p>
                        <h2 className="text-3xl font-extrabold text-slate-800">Contact HOD</h2>
                        <div className="w-16 h-1.5 bg-[#E29820] rounded-full mt-4"></div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 text-[#E29820] group-hover:bg-[#E29820] group-hover:text-white transition-all duration-300 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Head of the Department</p>
                                <h3 className="text-xl font-bold text-slate-800 transition-colors group-hover:text-[#E29820]">Dr. S. Sivakumara Reddy</h3>
                                <p className="text-slate-600 font-medium">M.Tech., Ph.D.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 pt-4 border-t border-slate-50">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 text-blue-600 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                                <a href="mailto:hodcse@nbkrist.org" className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors">hodcse@nbkrist.org</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* LOCATION CARD */}
            <div className="bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
                <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4">
                    <svg className="w-48 h-48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>

                <div className="relative">
                    <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 bg-[#E29820] rounded-xl flex items-center justify-center shadow-lg shadow-[#E29820]/20">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                        </span>
                        Location
                    </h3>
                    <div className="space-y-4">
                        <p className="text-lg font-bold text-slate-200 leading-snug">
                           First Floor, CSE & IT Block<br />
                            N.B.K.R. Institute of Science & Technology
                        </p>
                        <p className="text-slate-400 font-medium">
                            Vidyanagar, Kota (M), Tirupati (Dt)<br />
                            Andhra Pradesh – 524 413
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800 relative">
                    <div className="flex items-center gap-4 text-[#E29820]">
                        <span className="w-2 h-2 rounded-full bg-[#E29820] animate-pulse shadow-[0_0_8px_#E29820]"></span>
                        <span className="text-sm font-bold uppercase tracking-widest">Office Hours: 9:00 AM - 5:00 PM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
