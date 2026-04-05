"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export const links = [
  {name:"At a Glance" , href:"/library"},
  {name:"Department Wise Books",href:"/library/department-wise-books"},
  {name:"Journals",href:"/library/journals"},
  {name:"List of Journals",href:"/library/journals/list"},
  {name:"Library Web Links",href:"/library/web-links"},
  {name:"Video Lectures",href:"/library/video-lectures"},
  {name:"E-TextBooks",href:"/library/e-textbooks"},
  {name:"Category-Wise E-References",href:"/library/category-wise-e-references"},
  {name:"Open Access Archieves",href:"/library/open-access-archieves"},
  {name:"Open Access Journals / Magazines",href:"/library/open-access-journals-magazines"},
  {name:"NPTEL WEB COURSES",href:"/library/nptel-web-courses"},
]

export default function SideBar() {
  const pathname = usePathname()

  return (
    <aside className="h-full w-64 bg-sky-600 text-white flex flex-col">

      <div className="px-4 py-4 font-semibold border-b border-white/20">
        Library
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-1">

        {links.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`block px-3 py-2 rounded-md text-sm transition ${
              pathname === item.href
                ? "bg-white text-sky-600"
                : "hover:bg-white/20"
            }`}
          >
            {item.name}
          </Link>
        ))}

      </div>

    </aside>
  )
}