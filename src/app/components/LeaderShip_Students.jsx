import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const admins = [
    {
        name: "Dr. Y Venkatarami Reddy",
        position: "Chairman",
        image: '/images/admins/chaiman.png'
    },
    {
        name: "Nedurumalli Ramkumar",
        position: "Correspondent",
        image: '/images/admins/correspondent.png'
    },
    {
        name: "Dr. V. Vijaya Kumar Reddy",
        position: "Director",
        image: "/images/admins/director.png"
    }
]

const testimonals = [
    {
        name: "Shaik Safeena",
        position: "III B.Tech CSE AI&ML",
        feedback: "NBKRIST gave me the technical depth and confidence to land my dream placement."
    },
    {
        name: "Yempuluru Sai Sathwik",
        position: "CSE AI/ML - 2023 Batch",
        feedback: "The supportive environment shaped me into a problem solver."
    },
    {
        name: "A Neetu Reddy",
        position: "III B.Tech Data Science",
        feedback: "The campus helped me grow through NCC, technical events, and leadership activities that no other college offered."
    }
]

const LeaderShip_Students = () => {
    return (
        <div className='min-h-screen bg-[#0f172a] py-12 px-4'>

            {/* CENTERED CONTAINER */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>

                {/* LEFT SIDE */}
                <div>
                    <div className='flex flex-col gap-4 md:items-start items-center text-center md:text-left'>
                        <p className="tracking-[0.25em] font-extrabold text-orange-400 uppercase text-sm">
                            LEADERSHIP
                        </p>

                        <h1 className='md:text-4xl text-2xl text-white font-bold'>
                            Our Administration
                        </h1>

                        <div className="w-16 h-1 bg-orange-400"></div>

                        <p className='text-gray-400 text-sm md:text-lg'>
                            The leadership team guiding institutional growth and academic excellence at NBKRIST.
                        </p>
                    </div>

                    {/* ADMIN CARDS */}
                    <div className='flex flex-col gap-5 mt-10'>
                        {admins.map((admin, index) => (
                            <Card
                                key={index}
                                className='bg-[#1e293b] border-0 hover:border-orange-400 hover:border-1  rounded-xl shadow-md hover:shadow-xl hover:-translate-1 transition duration-300'
                            >
                                <CardContent className='flex items-center gap-4 p-5'>
                                    <img
                                        src={admin.image}
                                        className='w-16 h-16 rounded-full object-cover border-2 border-orange-400'
                                    />

                                    <div className='flex flex-col gap-1'>
                                        <p className="tracking-widest text-orange-400 uppercase text-xs font-semibold">
                                            {admin.position}
                                        </p>

                                        <h2 className='text-white text-lg font-bold'>
                                            {admin.name}
                                        </h2>

                                        <p className='text-gray-400 text-sm'>
                                            NBKR Educational Society
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    <div className='flex flex-col gap-4 md:items-start items-center text-center md:text-left'>
                        <p className="tracking-[0.25em] font-extrabold text-orange-400 uppercase text-sm">
                            STUDENT VOICES
                        </p>

                        <h1 className='md:text-4xl text-2xl text-white font-bold'>
                            What Our Students Say
                        </h1>

                        <div className="w-16 h-1 bg-orange-400"></div>

                        <p className='text-gray-400 text-sm md:text-lg'>
                            Real experiences and feedback from our students.
                        </p>
                    </div>

                    {/* TESTIMONIAL CARDS */}
                    <div className='flex flex-col gap-5 mt-10'>
                        {testimonals.map((testi, index) => (
                            <Card key={index} className='bg-[#1e293b] border-none rounded-xl hover:-translate-1 transition-all shadow-md p-5'>
                                <CardContent>
                                    <p className='text-gray-300 italic mb-4'>
                                        {testi.feedback}
                                    </p>

                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h3 className='text-white font-semibold'>
                                                {testi.name}
                                            </h3>
                                            <p className='text-gray-400 text-sm'>
                                                {testi.position}
                                            </p>
                                        </div>

                                        <span className='text-yellow-400'>★★★★★</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}




                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeaderShip_Students