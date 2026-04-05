"use client"

import Link from "next/link"
import { usePathname, useParams } from "next/navigation"

export const links = [
  { name: "At a Glance", href: "/library" },
  { name: "Department Wise Books", href: "/library/department-wise-books" },
  { name: "Journals", href: "/library/journals" },
  { name: "List of Journals", href: "/library/journals/list" },
  { name: "Library Web Links", href: "/library/web-links" },
  { name: "Video Lectures", href: "/library/video-lectures" },
  { name: "E-TextBooks", href: "/library/e-textbooks" },
  { name: "Category-Wise E-References", href: "/library/category-wise-e-references" },
  { name: "Open Access Archieves", href: "/library/open-access-archieves" },
  { name: "Open Access Journals / Magazines", href: "/library/open-access-journals-magazines" },
  { name: "NPTEL WEB COURSES", href: "/library/nptel-web-courses" },
]

export const deptMap = {
  "2": "Civil Engineering",
  "6": "Computer Science And Engineering",
  "99": "IT - AI&DS",
  "4": "Electronics And Communication Department",
  "3": "Electrical And Electronics Engineering Department",
  "5": "Mechanical Engineering Department",
  "1": "Science And Humanities Department"
}

export const getDeptLinks = (code) => [
    { name: "Home", href: `/departments/${code}` },
    { name: "Vision & Mission", href: `/departments/${code}/vision` },
    { name: "Educational Objectives", href: `/departments/${code}/eduOutcomes` },
    { name: "Board Of Studies", href: `/departments/${code}/boardOfStudies` },
    { name: "Faculty", href: `/departments/${code}/faculty` },
  ]
export default function SideBar({ dept }) {
  const pathname = usePathname()
  const params = useParams()
  const code = pathname.startsWith('/departments/') ? pathname.split('/')[2] : params?.code

  

  const menu = (dept && code) ? getDeptLinks(code) : links

  const deptName = deptMap[code] || "Department"

  return (
    <aside className="h-full w-64 bg-sky-600 text-white flex flex-col">

      {/* TITLE */}
      <div className="px-4 py-4 font-semibold border-b border-white/20">
        {(dept && code) ? deptName : "Library"}
      </div>

      {/* LINKS */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-1">

        {menu.map((item, i) => (
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