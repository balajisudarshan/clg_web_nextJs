"use client"

export default function CSEIQACPage() {
    return (
        <div className="space-y-10">
            {/* HEADER */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg className="w-32 h-32 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                </div>
                <div className="relative">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-[0.2em] mb-2">Quality Assurance</p>
                    <h2 className="text-3xl font-extrabold text-slate-800">Department IQAC</h2>
                    <div className="w-16 h-1.5 bg-[#E29820] rounded-full mt-4"></div>
                </div>
            </div>

            {/* DOCUMENT VIEWER */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden min-h-[700px] flex flex-col relative group">
                <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center text-slate-400 z-0">
                    <svg className="w-12 h-12 mb-4 animate-pulse opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm font-bold uppercase tracking-widest">Loading Document...</p>
                </div>
                {/* Embed PDF with z-10 to overlay loading state */}
                <iframe 
                    src="/CSE/cse_DIQAC.pdf" 
                    className="w-full relative z-10 flex-1 border-0" 
                    title="Department IQAC"
                ></iframe>
            </div>
            
            <div className="flex justify-end pt-4">
                <a 
                    href="/CSE/cse_DIQAC.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-[#E29820] border border-[#E29820]/30 rounded-xl hover:bg-[#E29820] hover:text-white transition-all duration-300 font-bold shadow-sm active:scale-95"
                >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in Full View
                </a>
            </div>
        </div>
    );
}
