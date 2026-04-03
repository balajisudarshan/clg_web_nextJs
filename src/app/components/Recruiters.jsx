import React from 'react'

const Recruiters = () => {
    const items = [
        { src: "/images/company_logos/cog_com.png" ,name: "Cognizant"},
        { src: "/images/company_logos/eleation.jpg" ,name: "Elevation"},
        { src: "/images/company_logos/infosys.png" ,name: "Infosys"},
        { src: "/images/company_logos/justdial.png" ,name: "JustDial"},
        { src: "/images/company_logos/mphasis.png" ,name: "Mphasis"},
        { src: "/images/company_logos/sutherland.jpg" ,name: "Sutherland"},
        { src: "/images/company_logos/tcs.png" ,name: "TCS"},
        { src: "/images/company_logos/valuelabs.png" ,name: "ValueLabs"},
        { src: "/images/company_logos/wipro.png" ,name: "Wipro"},
    ]

    return (
        <div className='bg-gray-100 py-12 w-full'>

            {/* HEADER */}
            <div className='bg-white shadow-sm border-t border-gray-200 rounded-lg  mx-auto p-6 flex flex-col items-center gap-3'>
                <p className='tracking-[0.25em] font-extrabold text-blue-700 uppercase text-sm'>
                    Placements
                </p>

                <h2 className='md:text-4xl text-2xl font-bold text-gray-800'>
                    Our Recruiters
                </h2>

                <div className='w-16 h-1 bg-orange-400'></div>
            </div>

            {/* LOGO STRIP */}
            <div className='w-full bg-white  border-gray-200 overflow-hidden'>
                <div className='flex items-center gap-12 py-6 marquee'>

                    {[...items, ...items].map((item, index) => (
                        <div
                            key={index}
                            className='flex items-center justify-center min-w-[120px] h-[60px]  md:min-w-[220px] md:h-[100px] bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition'
                        >
                            <img
                                src={item.src}
                                alt={item.name}
                                className='h-10 object-cover grayscale hover:grayscale-0 transition'
                            />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Recruiters