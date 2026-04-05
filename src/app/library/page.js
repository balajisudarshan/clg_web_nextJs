"use client"

import React from "react"
import { Book, Newspaper, Database, Users, Building2 } from "lucide-react"

const stats = [
    { title: "Books", value: "44,191", icon: Book, color: "text-blue-500", bg: "bg-blue-100" },
    { title: "Journals", value: "267", icon: Newspaper, color: "text-green-500", bg: "bg-green-100" },
    { title: "E-Journals", value: "7,108", icon: Database, color: "text-cyan-500", bg: "bg-cyan-100" },
    { title: "E-Books", value: "12,292", icon: Book, color: "text-orange-500", bg: "bg-orange-100" },
    { title: "Established", value: "1979", icon: Building2, color: "text-indigo-500", bg: "bg-indigo-100" },
    { title: "Users", value: "3,590", icon: Users, color: "text-blue-500", bg: "bg-blue-100" },
]

const page = () => {
    return (
        <div className="bg-gray-100 min-h-screen">

            {/* HERO */}
            <div
                className="relative h-[180px] sm:h-[3s50px] md:h-[400px] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/library/library.png')" }}
            >
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 flex h-full items-center justify-center px-4">
                    <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold text-center leading-tight">
                        Library & <span className="text-orange-400">Information</span> Center
                    </h1>
                </div>
            </div>

            {/* STATus */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 md:-mt-16 mt-1 relative z-20">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {stats.map((stat, index) => {
                        const Icon = stat.icon

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md transition"
                            >

                                {/* ICON */}
                                <div className={`${stat.bg} p-2 sm:p-3 rounded-lg`}>
                                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                                </div>

                                {/* TEXT */}
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                        {stat.value}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-500">
                                        {stat.title}
                                    </p>
                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>

            {/* about */}
            <div className="mt-80">
                <h1>About the Library</h1>
            </div>


        </div>
    )
}

export default page