import React from 'react'

const Departments_Programs = () => {
    return (
        <div className='pt-10 bg-gray-100'>

            {/* HEADER */}
            <div className='flex flex-col md:gap-6 gap-2 items-center'>
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <p className='tracking-[0.25em] font-extrabold text-[var(--color-text-primary)] uppercase text-sm'>
                        Academics
                    </p>

                    <h2 className='md:text-4xl text-2xl font-bold'>
                        Departments & Programs
                    </h2>

                    <div className='w-16 h-1 bg-orange-400'></div>

                    <p className="text-center text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
                        Seven full-fledged engineering departments with modern labs,
                        experienced faculty, and industry-aligned curriculum
                    </p>
                </div>
            </div>

            {/* GRID */}
            <div className='max-w-7xl mx-auto px-4 mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] '>

                    {/* BIG CARD */}
                    <div className='md:col-span-3 md:row-span-2 relative rounded-xl overflow-hidden group cursor-pointer'>

                        <img
                            src='/images/course/aiml_ds.png'
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />

                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />

                        <div className='absolute bottom-6 left-6 text-white max-w-md transition-all duration-300 group-hover:-translate-y-4'>

                            <span className='bg-yellow-500 text-black text-xs px-3 py-1 rounded-full'>
                                FEATURED
                            </span>

                            <h2 className='text-xl md:text-3xl font-bold mt-3'>
                                AI & Data Science
                            </h2>

                            <div className='opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 transition-all duration-300 md:group-hover:opacity-100 group-hover:translate-y-0'>
                                <p className='text-sm mt-2 hidden md:block'>
                                    Build intelligent systems with machine learning, big data, and analytics.
                                </p>

                                <button className='mt-3 text-yellow-400 font-semibold'>
                                    Explore Department →
                                </button>
                            </div>

                        </div>
                    </div>

                    {[
                        { img: "cse.png", title: "Computer Science Engineering" },
                        { img: "ece.png", title: "Electronics & Communication" },
                        { img: "mech.png", title: "Mechanical Engineering" },
                        { img: "civil.png", title: "Civil Engineering" },
                        { img: "eee.png", title: "Electrical & Electronics" },
                    ].map((item, i) => (
                        <div key={i} className='relative rounded-xl overflow-hidden group cursor-pointer'>

                            <img
                                src={`/images/course/${item.img}`}
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                            />

                            <div className='absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all'></div>

                            <div className='absolute bottom-4 left-4 right-4 text-white'>

                                <h3 className='text-sm md:text-lg font-bold'>
                                    {item.title}
                                </h3>

                                <div className=' opacity-100  translate-y-0 md:opacity-0 md:translate-y-3 transition-all duration-300 md:group-hover:opacity-100 group-hover:translate-y-0'>
                                    <p className='text-xs mt-1 font-bold text-yellow-400  md:block'>
                                        Explore this department →
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Departments_Programs