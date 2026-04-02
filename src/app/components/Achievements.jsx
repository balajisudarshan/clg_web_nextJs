import React from 'react'
import Slider from './Slider'

const Achievements = () => {
    return (
        <div className='pt-10 bg-gray-100'>
            <div className='flex flex-col md:gap-6 gap-2 items-center'>
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <p className='tracking-[0.25em] font-extrabold text-[var(--color-text-primary)]  uppercase text-sm'>Highlights</p>
                    <h2 className='md:text-4xl text-2xl  font-bold'>Recent Achievements</h2>
                    <div className='w-16 h-1 bg-orange-400'></div>
                </div>
                <Slider />

            </div>
        </div>
    )
}

export default Achievements