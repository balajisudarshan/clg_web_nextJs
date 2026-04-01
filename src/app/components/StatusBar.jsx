import React from 'react'

const stats = [
    { value: "45+", label: "YEARS OF EXCELLENCE" },
    { value: "7", label: "DEPARTMENTS" },
    { value: "150+", label: "FACULTY MEMBERS" },
    { value: "44K+", label: "LIBRARY BOOKS" },
    { value: "100+", label: "PLACEMENT PARTNERS" },
]
const StatusBar = () => {
    return (
        <div className='w-full  bg-[#E29820]'>
            <div className='grid grid-cols-2 md:grid-cols-5 text-center'>
                {stats.map((stat, ind) => (
                    <div key={ind} className='py-8 border-r border-white/20 last:border-none'>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-[#0b0b2b] ">{stat.value}</h2>
                        <p className="text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatusBar