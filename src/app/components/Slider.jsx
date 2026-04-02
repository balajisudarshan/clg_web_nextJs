"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const slides = [
    {
        image: "/images/scroll/Ncc7325.jpg",
        title: "Naval NCC Unit - Camp Activity 2025",
        desc: "NBKRIST Naval NCC cadets participating in national camp activities.",
        badge:"NCC"
    },
    {
        image: "/images/scroll/JEC.jpg",
        title: "Engineering Excellence",
        desc: "Shaping engineers and innovators.",
        badge:"ACADEMICS"

    },
    {
        image: "/images/scroll/mixed.jpg",
        title: "NBKRIST — Excellence Across Every Discipline",
        desc: "A vibrant campus life blending academics, sports, NCC, and national-level competitions.",
        badge:"CAMPUS LIFE"
    }
]

const Slider = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-10">

            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[520px]">

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop
                    className="h-full w-full rounded-xl overflow-hidden shadow-lg"
                >

                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full rounded-xl overflow-hidden">

                                {/* Image */}
                                <img
                                    src={slide.image}
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient Overlay (IMPORTANT) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                                        {slide.badge}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-6 left-6 right-6 text-white">

                                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                                        {slide.title}
                                    </h2>

                                    <p className="text-xs sm:text-sm md:text-base mt-2 text-gray-200 max-w-2xl">
                                        {slide.desc}
                                    </p>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </div>
    )
}

export default Slider