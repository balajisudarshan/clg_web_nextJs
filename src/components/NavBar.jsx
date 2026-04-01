"use client"

import React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet"

import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

// ===== DATA =====
const aboutLinks = [
  { name: "About Institute", href: "/about" },
  { name: "Vision & Mission", href: "/vision" },
  { name: "Governing Body", href: "/governing-body" },
  { name: "Organization Structure", href: "/orgStructure" },
  { name: "Right To Information", href: "/right-to-information" },
]

const adminLinks = [
  { name: "Director", href: "/director" },
  { name: "Administrative Officer", href: "/admin-officer" },
  { name: "Controller of Examinations", href: "/exam-controller" },
  { name: "Admin Dashboard", href: "/admin-dashboard" },
]

const academicLinks = [
  { name: "Academic Programs", href: "/academic-programs" },
  { name: "Academic Calendar", href: "/academic-calendar" },
  { name: "NEP 2020 Initiatives", href: "/nep-2020" },
  { name: "Syllabus", href: "/syllabus" },
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
  { name: "E-News Letter", href: "/newsletter" },
]

// ===== COMPONENT =====
const Navbar = () => {

  const navItem = "hover:text-orange-500 transition cursor-pointer"

  const dropdownTrigger =
    "cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition flex items-center gap-1 pb-1"

  const dropdownMenu =
    "absolute left-0 top-full mt-1 w-56 bg-white rounded-xl shadow-lg opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50"

  const dropdownItem =
    "block px-4 py-2 text-sm hover:bg-orange-50 hover:border-l-4 hover:border-orange-500 transition-all"

  return (
    <div className="w-full bg-white shadow-sm">

      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/Emb.jpg" className="h-12" />
          <div>
            <h1 className="text-sm font-bold">NBKRIST</h1>
            <p className="text-xs text-gray-500">Vidyanagar · Est. 1979</p>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">

          <li className={navItem}><Link href="/">Home</Link></li>

          {/* Dropdown Template */}
          {[
            { title: "About", data: aboutLinks },
            { title: "Administration", data: adminLinks },
            { title: "Academics", data: academicLinks },
            { title: "Departments", data: departmentLinks },
            { title: "Placement", data: placementLinks },
            { title: "More", data: moreLinks },
          ].map(menu => (
            <li key={menu.title} className="relative">
              <div className="group inline-block">

                <span className={dropdownTrigger}>
                  {menu.title} ▾
                </span>

                <div className={dropdownMenu}>
                  {menu.data.map(link => (
                    <Link key={link.href} href={link.href} className={dropdownItem}>
                      {link.name}
                    </Link>
                  ))}
                </div>

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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-80 p-0">

              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>

              <div className="flex flex-col h-full">

                <div className="p-4 border-b">
                  <h2 className="font-semibold text-lg">Menu</h2>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">

                  <Link href="/" className="font-medium">Home</Link>

                  {[ 
                    { title: "About", data: aboutLinks },
                    { title: "Administration", data: adminLinks },
                    { title: "Academics", data: academicLinks },
                    { title: "Departments", data: departmentLinks },
                    { title: "Placement", data: placementLinks },
                    { title: "More", data: moreLinks },
                  ].map(menu => (
                    <div key={menu.title}>
                      <p className="text-xs text-gray-500 mb-2">{menu.title}</p>
                      {menu.data.map(link => (
                        <Link key={link.href} href={link.href} className="block py-1 text-sm">
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}

                </div>

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