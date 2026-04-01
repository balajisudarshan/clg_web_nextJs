import React from 'react'
import { FileText, Mail, Phone, Newspaper, User } from 'lucide-react'

const TopBarItem = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-1 text-[12px] md:text-[13px] font-medium text-white/80 hover:text-orange-400 transition-all duration-200 cursor-pointer">
      <Icon size={14} className="opacity-80" />
      <span className="tracking-wide whitespace-nowrap">{text}</span>
    </div>
  )
}

const TopBar = () => {
  return (
    <div className="bg-[#163e7e] text-white px-3 md:px-6 py-2 border-b border-white/10">

      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-2">

        {/* LEFT */}
        <div className="flex flex-wrap items-center gap-4">
          <TopBarItem icon={Phone} text="+91 8985382247" />

          <div className="hidden md:block h-4 w-px bg-orange-400/60" />

          <TopBarItem icon={Mail} text="ist@nbkrist.org" />
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap items-center gap-4">

          <TopBarItem icon={FileText} text="Exam Cell" />
          <TopBarItem icon={Newspaper} text="E-Newsletter" />
          <TopBarItem icon={User} text="Student Login" />

          {/* CONTACT highlight */}
          <div className="flex items-center gap-1 text-[12px] md:text-[13px] font-semibold text-orange-400 cursor-pointer hover:text-orange-500 transition">
            <Phone size={14} />
            <span className="tracking-wide whitespace-nowrap">Contact</span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default TopBar