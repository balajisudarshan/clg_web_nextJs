"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export default function DepartmentLayout({ title, shortName, links, children }) {
    const pathname = usePathname();

    return (
        <div className="bg-[#F8F7FA] min-h-screen pb-20">
            {/* HERO SECTION - matching homepage dark + orange style */}
            <div className="relative h-[200px] sm:h-[280px] bg-gradient-to-b from-black via-black/95 to-black/90 flex flex-col items-center justify-center overflow-hidden">
                {/* Background image overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/images/image.png')" }}
                />
                <div className="absolute inset-0 bg-black/60" />

                {/* Accent blobs */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#E29820]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col h-full items-center justify-center px-4 w-full text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-400/30 bg-orange-500/10 backdrop-blur-md text-xs tracking-wide text-orange-200 mb-4">
                        {shortName || "Department"}
                    </div>
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        {title.split(' ').map((word, index) => {
                            if (index === 0) {
                                return <span key={index} className="text-[#E29820]">{word} </span>
                            }
                            return <span key={index}>{word} </span>
                        })}
                    </h1>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* SIDEBAR NAVIGATION */}
                    <div className="w-full lg:w-1/4 shrink-0">
                        <div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden sticky top-24">
                            <div className="bg-gradient-to-r from-[#E29820] to-orange-500 p-4">
                                <h3 className="text-white font-bold text-sm tracking-wide uppercase">
                                    Quick Links
                                </h3>
                            </div>
                            <ul className="flex flex-col py-2">
                                {links.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className={`group flex items-center justify-between px-5 py-3 text-sm font-medium transition-all border-l-4 ${
                                                    isActive
                                                        ? 'border-[#E29820] bg-orange-50 text-[#E29820] font-semibold'
                                                        : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-[#E29820] hover:border-orange-200'
                                                }`}
                                            >
                                                {link.name}
                                                <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#E29820]' : 'text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* DYNAMIC CONTENT */}
                    <div className="w-full lg:w-3/4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
