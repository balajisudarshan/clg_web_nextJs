import React from 'react'
import { Award, BookOpen, Camera } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/image.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center 
        px-4 sm:px-6 md:px-8 gap-6 md:gap-10 max-w-6xl mx-auto py-16">

        {/* Badge */}
        <div className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 rounded-full 
          border border-orange-400/30 
          bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent 
          backdrop-blur-md 
          shadow-[0_0_20px_rgba(255,165,0,0.15)]
          text-[10px] sm:text-xs md:text-sm tracking-wide text-orange-200">

          <Award size={14} className="text-orange-400" />

          <span>NAAC 'A' GRADE</span>
          <span className="text-orange-400/60">•</span>

          <span>NBA ACCREDITED</span>
          <span className="text-orange-400/60">•</span>

          <span>AUTONOMOUS</span>
        </div>

        {/* Heading */}
        <h1 className="text-white font-extrabold leading-tight
          text-3xl  md:text-5xl lg:text-7xl">

          Engineering{" "}
          <span className="text-[var(--color-text-primary)]">Excellence</span>
          <br />
          Since 1979
        </h1>

        {/* Description */}
        <p className="text-gray-300 
          text-xs sm:text-sm md:text-base lg:text-lg 
          max-w-xl md:max-w-2xl">

          NBKR Institute of Science & Technology, Vidyanagar — shaping engineers and innovators
          for a rapidly evolving world. Affiliated to JNTUA, Ananthapuramu.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mt-4">

          <button className="flex items-center gap-2 bg-[#E29820] hover:bg-[#d48a1c] 
            text-black font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl 
            shadow-md transition w-full sm:w-auto justify-center">

            <BookOpen size={18} />
            Explore Programs
          </button>

          <button className="flex items-center gap-2 border border-white/40 
            text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl 
            backdrop-blur-sm hover:bg-white hover:text-black transition 
            w-full sm:w-auto justify-center">

            <Camera size={18} />
            Campus Life
          </button>

        </div>

      </div>
    </div>
  )
}

export default Hero