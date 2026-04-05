"use client"

import { api } from '@/lib/api'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator'

const Page = () => {
    const [faculties, setFaculties] = useState([])
    const { code } = useParams()

    const deptMap = {
        "2": "Civil Engineering",
        "6": "Computer Science And Engineering",
        "99": "IT - AI&DS",
        "4": "Electronics And Communication Department",
        "3": "Electrical And Electronics Engineering Department",
        "5": "Mechanical Engineering Department",
        "1": "Science And Humanities Department"
    }

    const dept = deptMap[code]

    useEffect(() => {
        if (!code) return

        const fetchFaculties = async () => {
            const res = await api(`faculties?departmentId=${code}`)
            setFaculties(res.data)
        }

        fetchFaculties()
    }, [code])

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">

            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 text-gray-800">
                Department of <span className="text-orange-500">{dept}</span> Faculty
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

                {faculties.map((faculty, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 flex gap-5"
                    >

                        {/* IMAGE */}
                        <div className="flex flex-col items-center gap-3 min-w-[110px]">

                            <img
                                src={faculty?.image}
                                className="w-[100px] h-[120px] object-cover rounded-lg border"
                            />

                            <button className="bg-orange-500 text-white text-sm px-3 py-1.5 rounded-md hover:bg-orange-400 transition w-full">
                                View Profile
                            </button>
                        </div>

                        {/* DETAILS */}
                        <div className="flex flex-col gap-2 flex-1">

                            <h1 className="text-lg md:text-xl font-semibold text-gray-800">
                                {faculty?.name}
                            </h1>

                            <p className="text-sm text-gray-600">
                                {faculty?.designation}
                            </p>

                            <Separator />

                            <p className="text-sm text-gray-700">
                                {faculty?.qualification}
                            </p>

                            <p className="text-sm text-gray-600">
                                DOJ: {faculty?.doj}
                            </p>

                            <p className="text-sm text-gray-600">
                                Phone: {faculty?.phone}
                            </p>

                            <p className="text-sm text-gray-600 break-all">
                                Email: {faculty?.email}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Page