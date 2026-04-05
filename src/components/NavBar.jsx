"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const aboutLinks = [
  { name: "About Institute", href: "/about" },
  { name: "Vision & Mission", href: "/about/visionmission" },
  { name: "Governing Body", href: "/about/governingbody" },
  { name: "Organization Structure", href: "/about/organizationstructure" },
  { name: "Right To Information", href: "/about/right-to-information" },
]

const adminLinks = [
  { name: "Director", href: "/director" },
  { name: "Administrative Officer", href: "/admin-officer" },
  { name: "Controller of Examinations", href: "/exam-controller" },
  { name: "Admin Dashboard", href: "/admin" },
]

const academicLinks = [
  { name: "Academic Programs", href: "/academics/programs" },
  { name: "Academic Calendar", href: "/academics/calendar" },
  { name: "NEP 2020 Initiatives", href: "/academics/nep2020" },
  { name: "Syllabus", href: "/academics/syllabus" },
  { name: "Outcome Based Education", href: "/obe" },
  { name: "Academic Regulations", href: "/regulations" },
  { name: "Central Library", href: "/library" },
]

const departmentLinks = [
  { name: "Civil Engineering", href: "/civil" },
  { name: "CSE | AI&ML | DS", href: "/cse" },
  { name: "IT | AI&DS", href: "/it" },
  { name: "Electronics & Comm.", href: "/ece" },
  { name: "Electrical & Electronics", href: "/eee" },
  { name: "Mechanical Engineering", href: "/mech" },
  { name: "Sciences & Humanities", href: "/science" },
]

const placementLinks = [
  { name: "Placement Cell", href: "/placement-cell" },
  { name: "Latest Drives", href: "/drives" },
  { name: "Placement Record", href: "/records" },
  { name: "Contact Us", href: "/placement-contact" },
]

const moreLinks = [
  { name: "Exam Notifications", href: "/exam-notifications" },
  { name: "Annual Reports", href: "/annual-reports" },
  { name: "IQAC", href: "/iqac" },
  { name: "Innovation & Incubation", href: "/innovation" },
  // { name: "E-News Letter", href: "/newsletter" },
]

const navMenus = [
  { title: "About", data: aboutLinks },
  { title: "Administration", data: adminLinks },
  { title: "Academics", data: academicLinks },
  { title: "Departments", data: departmentLinks },
  { title: "Placement", data: placementLinks },
  { title: "More", data: moreLinks },
]

// ===== COMPONENT =====
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navItem =
    "hover:text-orange-500 transition cursor-pointer"

  const dropdownTrigger =
    "cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition flex items-center gap-1 pb-1"

  const dropdownMenu =
    "absolute left-0 top-full w-56 bg-white rounded-xl shadow-lg opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50"

  const dropdownItem =
    "block px-4 py-2 text-sm hover:bg-orange-50 hover:border-l-4 hover:border-orange-500 transition-all"

  return (
    <div className="w-full bg-white shadow-sm relative z-50">
      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/Emb.jpg" className="h-12" alt="NBKRIST Logo" />
          <div>
            <h1 className="text-sm font-bold">NBKRIST</h1>
            <p className="text-xs text-gray-500">Vidyanagar · Est. 1979</p>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">

          <li className={navItem}>
            <Link href="/">Home</Link>
          </li>

          {navMenus.map((menu) => (
            <li
              key={menu.title}
              className="relative"
              onMouseEnter={() => setOpenDropdown(menu.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className={dropdownTrigger}>
                {menu.title} ▾
              </span>

              <div
                className={`absolute left-0 top-full w-56 bg-white rounded-xl shadow-lg transition-all duration-200 z-50
      ${openDropdown === menu.title
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-1 pointer-events-none"
                  }`}
              >
                {menu.data.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={dropdownItem}
                    onClick={() => setOpenDropdown(null)} // 🔥 THIS FIXES CLICK CLOSE
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </li>
          ))}

          <li className={navItem}>Sports</li>

          {/* NBKR Code */}
          <li className="flex items-center gap-2 text-xs bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
            <span className="text-gray-500">EAPCET / ECET</span>
            <span className="font-semibold text-orange-600 tracking-wide">NBKR</span>
          </li>

        </ul>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>

            <SheetTrigger asChild>
              <button
                className="p-2 border rounded-md"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-80 p-0">

              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>

              <div className="flex flex-col h-full">

                {/* Header */}
                <div className="p-4 border-b">
                  <h2 className="font-semibold text-lg">Menu</h2>
                </div>

                {/* Links */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">

                  <Link
                    href="/"
                    className="block font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </Link>

                  {navMenus.map((menu) => (
                    <div key={menu.title}>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                        {menu.title}
                      </p>
                      {menu.data.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block py-1.5 text-sm hover:text-orange-500 transition"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}

                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                      Sports
                    </p>
                    <Link
                      href="/sports"
                      className="block py-1.5 text-sm hover:text-orange-500 transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      Sports
                    </Link>
                  </div>

                </div>

                {/* Footer */}
                <div className="p-4 border-t">
                  <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg">
                    <span className="text-xs text-gray-500">EAPCET / ECET Code</span>
                    <span className="font-semibold text-orange-600">NBKR</span>
                  </div>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </div>
  )
}

export default Navbar
