import React from 'react'
import { FileText, Mail, Phone, Newspaper, User } from 'lucide-react'
import Link from 'next/link'

const TopBarItem = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-1 text-[12px] md:text-[13px] font-medium text-white/80 hover:text-orange-400 transition cursor-pointer whitespace-nowrap">
      <Icon size={14} className="opacity-80" />
      <span>{text}</span>
    </div>
  )
}

const TopBar = () => {
  return (
    <div className="bg-[#163e7e] text-white border-b border-white/10">

      <div className="px-3 md:px-6 py-2 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">

        {/* LEFT */}
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">

          <TopBarItem icon={Phone} text="+91 8985382247" />

          <div className="hidden md:block h-4 w-px bg-orange-400/60" />

          <TopBarItem icon={Mail} text="ist@nbkrist.org" />

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">

          <TopBarItem icon={FileText} text="Exam Cell" />
          <Link href='/newsletter'><TopBarItem icon={Newspaper} text="E-Newsletter" /></Link>
          <TopBarItem icon={User} text="Student Login" />

          <div className="flex items-center gap-1 text-[12px] md:text-[13px] font-semibold text-orange-400 cursor-pointer hover:text-orange-500 transition whitespace-nowrap">
            <Phone size={14} />
            <span>Contact</span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default TopBar