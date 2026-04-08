'use client';
import { useState } from 'react';

export default function CSENewsletterPage() {
    const newsletters = [
        { title: "E-News Letters AY:2025-2026(November)", link: "https://online.fliphtml5.com/fjwzs/wppq/" },
        { title: "E-News Letters AY:2025-2026(October)", link: "https://online.fliphtml5.com/sjcnc/qdtz/" },
        { title: "E-News Letters AY:2025-2026(September)", link: "https://online.fliphtml5.com/fjwzs/hrvp/" },
        { title: "E-News Letters AY:2025-2026(August)", link: "https://online.fliphtml5.com/sjcnc/gzjk/" },
        { title: "E-News Letters AY:2025-2026(June)", link: "https://online.fliphtml5.com/fjwzs/uium/" },
        { title: "E-News Letters AY:2025-2026(May)", link: "https://online.fliphtml5.com/fjwzs/ksfb/" },
        { title: "E-News Letters AY:2025-2026(April)", link: "https://online.fliphtml5.com/fjwzs/ccob/" },
        { title: "E-News Letters-March-2025", link: "https://online.fliphtml5.com/fjwzs/sfvp/" },
        { title: "E-News Letters AY:2024-2025", link: "https://online.fliphtml5.com/fjwzs/nmlu/" },
    ];

    const [selectedLetter, setSelectedLetter] = useState(null);

    return (
        <div className="space-y-10">
            {/* HEADER */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg className="w-32 h-32 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                </div>
                <div className="relative">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-[0.2em] mb-2">Publications</p>
                    <h2 className="text-3xl font-extrabold text-slate-800">Department Newsletters</h2>
                    <div className="w-16 h-1.5 bg-[#E29820] rounded-full mt-4"></div>
                </div>
            </div>

            {/* NEWSLETTERS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsletters.map((nl, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setSelectedLetter(nl)}
                        className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-[#E29820]/40 hover:shadow-xl hover:-translate-y-1 transition-all text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#E29820] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#E29820]/10 group-hover:scale-110 transition-all duration-300">
                            <svg className="w-8 h-8 text-slate-400 group-hover:text-[#E29820]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-slate-700 group-hover:text-[#E29820] transition-colors line-clamp-2 px-2">
                            {nl.title}
                        </h3>
                        <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#E29820] bg-[#E29820]/5 px-4 py-2 rounded-full ring-1 ring-[#E29820]/10 transition-all group-hover:bg-[#E29820] group-hover:text-white">
                            READ ISSUE
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>

            {/* FLIPBOOK MODAL */}
            {selectedLetter && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={() => setSelectedLetter(null)}></div>
                    <div className="bg-white w-full max-w-6xl h-full max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden relative z-10 animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-white">
                            <h3 className="font-bold text-slate-800 flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#E29820]/10 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#E29820]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[10px] text-[#E29820] uppercase border border-[#E29820]/20 px-2 py-0.5 rounded-full block mb-0.5 w-fit">Digital Edition</span>
                                    {selectedLetter.title}
                                </div>
                            </h3>
                            <div className="flex items-center gap-3">
                                <a 
                                    href={selectedLetter.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-lg shadow-slate-900/20 active:scale-95"
                                >
                                    <span>Download PDF</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </a>
                                <button 
                                    onClick={() => setSelectedLetter(null)}
                                    className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all group"
                                >
                                    <svg className="w-7 h-7 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 w-full bg-slate-100 relative">
                            <iframe 
                                src={selectedLetter.link}
                                className="absolute inset-0 w-full h-full border-0"
                                title={selectedLetter.title}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
