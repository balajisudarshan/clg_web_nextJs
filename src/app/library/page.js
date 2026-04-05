"use client"

import React from "react"
import { Book, Newspaper, Database, Users, Building2, Target, Flag, Clock, PersonStanding, Contact, User } from "lucide-react"

const ulText = [
    'To provide quality service to the users.',
    'To disseminate technical knowledge.',
    'To offer modern tools for accessing information.',
    'To network with leading libraries '
]
const ulMText = [
    'To provide quality service to users',

    'To disseminate technical knowledge',

    'To offer modern tools for accessing information'
]

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
        <div className="bg-[#EEEDF0] min-h-screen">

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
            <div className="mt-16 bg-gray-100 py-12 px-4 sm:px-6 md:px-10">

                <div className="max-w-6xl mx-auto flex flex-col gap-8">

                    {/* TEXT SECTION */}
                    <div className="max-w-3xl">

                        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                            About the Library
                        </h1>

                        <p className="mt-3 text-gray-600 text-sm sm:text-base  leading-relaxed">
                            The library serves as a knowledge hub for students, faculty and researchers,
                            fostering quality learning and research. Located centrally, it offers a vast
                            collection of books, journals, e-resources, and digital tools to support
                            academic excellence.
                        </p>
                        <p className="mt-3 text-gray-600 text-sm sm:text-base  leading-relaxed">Students should possess at least one text book for each subject of their study.
                            It may be noted that library is not a provider of text books to students for their
                            routine studies. Library is a reservoir of various sources of information and knowledge
                            and students should utilize library as a source of additional information. They should
                            cultivate the habit of studying in the library during library hours instead of leaving the
                            college soon after the class work is over. All eligible SC and ST students should make use of
                            the SC and ST book bank for their text books.
                        </p>

                    </div>




                </div>

            </div>

            {/* visionmission */}
            <div className="bg-gray-100/30 py-12 md:px-10 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-15">
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-2xl text-gray-700 text-center md:text-start">Vision & Mission</h1>
                    <div className="bg-white p-5 mx-3 md:mx-0 rounded-2xl shadow-2xs hover:shadow-lg transition">
                        <div className="flex gap-2 items-center ">
                            <Target size={20} className="text-blue-400" />
                            <h2 className="font-semibold text-gray-800">Vision</h2>
                        </div>
                        <p className="text-gray-600 mt-4">To Provide Valuable Resources for Industry and Society through Excellence in Technical Education and Research</p>
                    </div>

                    <div className="bg-white p-5 mx-3 md:mx-0 rounded-2xl shadow-2xs hover:shadow-lg transition">
                        <div className="flex gap-2 items-center ">
                            <Flag size={20} className="text-orange-400" />
                            <h2 className="font-semibold text-gray-800">Mission</h2>
                        </div>
                        <ul className="list-disc pl-3 ">
                            {ulText.map((txt, index) => (
                                <li key={index} className="text-sm mt-2">{txt}</li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div>
                    <h1 className="font-bold text-2xl text-gray-700 text-center md:text-start">Mission</h1>
                    <ul className="list-disc mt-5 ml-10 md:ml-3">
                        {ulMText.map((txt, ind) => (
                            <li key={ind} className="mt-3">{txt}</li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-4 mt-5">
                        <div className="bg-white p-5 mx-3 md:mx-0 rounded-2xl shadow-2xs hover:shadow-lg transition">
                            <div className="flex gap-2 items-center ">
                                <Clock size={20} className="text-blue-400" />
                                <h2 className="font-semibold text-gray-800">Timings</h2>
                            </div>
                            <p className="text-gray-600 mt-2 ml-6">8:30AM - 7:30PM</p>
                        </div>


                        <div className="bg-white p-5 mx-3 md:mx-0 rounded-2xl shadow-2xs hover:shadow-lg transition">
                            <div className="flex gap-2 items-center ">
                                <User size={20} className="text-green-400" />
                                <h2 className="font-semibold text-gray-800">Timings</h2>
                            </div>
                            <p className="text-gray-600 mt-2 ml-6">8:30AM - 7:30PM</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page