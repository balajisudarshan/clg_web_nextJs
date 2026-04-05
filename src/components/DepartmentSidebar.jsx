"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Users, Target, Layers, Home } from "lucide-react"

const deptMap = {
  "2": "Civil Engineering",
  "6": "Computer Science And Engineering",
  "99": "IT - AI&DS",
  "4": "Electronics And Communication Department",
  "3": "Electrical And Electronics Engineering Department",
  "5": "Mechanical Engineering Department",
  "1": "Science And Humanities Department"
}

const deptLinks = (code) => [
  { name: "Home", href: `/departments/${code}`, icon: Home },
  { name: "Vision & Mission", href: `/departments/${code}/vision`, icon: Target },
  { name: "Educational Objectives", href: `/departments/${code}/eduOutcomes`, icon: Layers },
  { name: "Board Of Studies", href: `/departments/${code}/boardOfStudies`, icon: BookOpen },
  { name: "Faculty", href: `/departments/${code}/faculty`, icon: Users },
]

export default function DepartmentSidebar({ code }) {
  const pathname = usePathname()
  const deptName = deptMap[code] || "Department"
  const links = deptLinks(code)

  return (
    <aside className="h-full w-64 bg-gradient-to-b from-blue-600 to-blue-700 text-white flex flex-col shadow-lg">
      {/* DEPARTMENT HEADER */}
      <div className="px-4 py-6 border-b border-blue-500/30">
        <h2 className="text-lg font-bold text-white mb-1">{deptName}</h2>
        <p className="text-xs text-blue-100">Department Information</p>
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
        {links.map((item, i) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={i}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-white text-blue-600 font-semibold shadow-md"
                  : "text-blue-50 hover:bg-blue-500/50 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* FOOTER */}
      <div className="px-4 py-4 border-t border-blue-500/30 text-xs text-blue-100">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </aside>
  )
}
