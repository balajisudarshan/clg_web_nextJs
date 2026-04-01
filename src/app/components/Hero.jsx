import React from 'react'
import { Award, BookOpen, Camera } from 'lucide-react'



const Hero = () => {
  return (
    <div className='relative h-screen w-full'>

      {/* Background */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: "url('/images/image.png')" }}
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/80' />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full gap-10 px-4 -mt-20'>

        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full 
          border border-orange-400/30 
          bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent 
          backdrop-blur-md 
          shadow-[0_0_20px_rgba(255,165,0,0.15)]
          text-xs md:text-sm tracking-wider text-orange-200">

          <Award size={14} className="text-orange-400" />
          <span>NAAC 'A' GRADE</span>
          <span className="text-orange-400/60">•</span>
          <span>NBA ACCREDITED</span>
          <span className="text-orange-400/60">•</span>
          <span>AUTONOMOUS</span>
        </div>

        {/* Heading + Text */}
        <div className='flex flex-col gap-6 text-center'>

          <h1 className='text-white text-4xl md:text-7xl font-extrabold leading-tight'>
            Engineering <span className='text-[#E29820]'>Excellence</span> <br />
            Since 1979
          </h1>

          <p className='text-[#a4a4a4] text-sm md:text-lg max-w-2xl mx-auto'>
            NBKR Institute of Science & Technology, Vidyanagar — shaping engineers and innovators
            for a rapidly evolving world. Affiliated to JNTUA, Ananthapuramu.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4">

            <button className="flex items-center gap-2 bg-[#E29820] hover:bg-[#d48a1c] 
              text-black font-semibold px-6 py-3 rounded-xl shadow-md transition">

              <BookOpen size={18} />
              Explore Programs
            </button>

            <button className="flex items-center gap-2 border border-white/40 
              text-white px-6 py-3 rounded-xl backdrop-blur-sm 
              hover:bg-white hover:text-black transition">

              <Camera size={18} />
              Campus Life
            </button>

          </div>

        </div>

      </div>

      
    </div>
  )
}

export default Hero