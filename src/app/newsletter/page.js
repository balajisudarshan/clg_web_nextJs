"use client"

import React, { useState } from "react"
import { FileText, ChevronRight, X, BookOpen } from "lucide-react"

// JSON array of titles and their links
const newsletters = [
  {
    title: "E-News Letters AY:2025-2026 (November)",
    link: "https://online.fliphtml5.com/fjwzs/wppq/",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    hoverBg: "hover:bg-blue-500"
  },
  {
    title: "E-News Letters AY:2025-2026 (October)",
    link: "https://online.fliphtml5.com/sjcnc/qdtz/",
    color: "text-green-500",
    bg: "bg-green-50",
    border: "border-green-200",
    hoverBg: "hover:bg-green-500"
  },
  {
    title: "E-News Letters AY:2025-2026 (September)",
    link: "https://online.fliphtml5.com/fjwzs/hrvp/",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    hoverBg: "hover:bg-orange-500"
  },
  {
    title: "E-News Letters AY:2025-2026 (August)",
    link: "https://online.fliphtml5.com/sjcnc/gzjk/",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    hoverBg: "hover:bg-indigo-500"
  },
  {
    title: "E-News Letters AY:2025-2026 (June)",
    link: "https://online.fliphtml5.com/fjwzs/uium/",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-200",
    hoverBg: "hover:bg-rose-500"
  },
  {
    title: "E-News Letters AY:2025-2026 (May)",
    link: "https://online.fliphtml5.com/fjwzs/ksfb/",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    hoverBg: "hover:bg-amber-500"
  },
  {
    title: "E-News Letters AY:2025-2026 (April)",
    link: "https://online.fliphtml5.com/fjwzs/ccob/",
    color: "text-teal-500",
    bg: "bg-teal-50",
    border: "border-teal-200",
    hoverBg: "hover:bg-teal-500"
  },
  {
    title: "E-News Letters-March-2025",
    link: "https://online.fliphtml5.com/fjwzs/sfvp/",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    hoverBg: "hover:bg-cyan-500"
  },
  {
    title: "E-News Letters AY:2024-2025",
    link: "https://online.fliphtml5.com/fjwzs/nmlu/",
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
    hoverBg: "hover:bg-purple-500"
  }
]

const NewsletterPage = () => {
    const [selectedPdf, setSelectedPdf] = useState(null)

    return (
        <div className="bg-[#EEEDF0] min-h-screen pb-20">

            {/* HERO SECTION */}
            <div className="relative h-[200px] sm:h-[300px] md:h-[350px] bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl mix-blend-screen" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl mix-blend-screen" />
                
                <div className="relative z-10 flex flex-col h-full items-center justify-center px-4 w-full text-center">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
                        College <span className="text-orange-400">Newsletters</span>
                    </h1>
                </div>
            </div>

            {/* CONTENT LIST */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 mt-10 relative z-10">
                <div className="grid gap-4">
                    {newsletters.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedPdf(item.link)}
                            className="group flex flex-row items-center w-full bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out border border-slate-300 overflow-hidden text-left"
                        >
                            {/* Color Bar */}
                            <div className={`w-1.5 self-stretch ${item.hoverBg} transition-colors duration-300 bg-gray-300`} />
                            
                            <div className="flex-1 flex items-center justify-between p-4 sm:px-6 sm:py-4">
                                <div className="flex items-center gap-4">
                                    <div className={`p-2.5 rounded-full ${item.bg} border ${item.border} group-hover:scale-110 transition-transform duration-300`}>
                                        <FileText className={`w-5 h-5 ${item.color}`} />
                                    </div>
                                    <h2 className="text-[15px] sm:text-[17px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                                        {item.title}
                                    </h2>
                                </div>
                                <div className="flex items-center gap-2 justify-center bg-gray-50 border border-gray-200 text-gray-400 group-hover:text-white group-hover:bg-slate-800 rounded-full p-2.5 transition-all duration-300">
                                     <ChevronRight className="w-5 h-5" />
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* MODAL / IFRAME */}
            {selectedPdf && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-10 backdrop-blur-sm bg-slate-900/60 transition-opacity"
                    onClick={() => setSelectedPdf(null)}
                >
                    <div 
                        className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-slate-50">
                            <div className="flex items-center gap-3">
                                <BookOpen className="w-5 h-5 text-orange-500" />
                                <h3 className="font-semibold text-slate-800 text-lg">Interactive Newsletter</h3>
                            </div>
                            <button 
                                onClick={() => setSelectedPdf(null)} 
                                className="p-2 text-slate-400 bg-slate-200 hover:bg-red-500 hover:text-white rounded-full transition-all duration-200 focus:outline-none"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        
                        {/* Iframe */}
                        <div className="flex-grow w-full bg-[#f4f4f4] relative">
                             {/* Loader Placeholder */}
                             <div className="absolute inset-0 flex items-center justify-center z-0">
                                 <span className="text-sm font-medium text-slate-500 flex items-center gap-2">
                                     <svg className="animate-spin h-5 w-5 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                     </svg>
                                     Loading Newsletter...
                                 </span>
                             </div>

                             <iframe 
                                src={selectedPdf} 
                                className="absolute inset-0 w-full h-full border-0 z-10"
                                allowFullScreen 
                             />
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default NewsletterPage