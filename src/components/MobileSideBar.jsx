"use client"

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { links } from "./SideBar"

export default function MobileSidebar() {
  const pathname = usePathname()

  return (
    <div className="md:hidden p-3 bg-white border-b flex items-center">

      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6" />
        </SheetTrigger>

        <SheetContent side="left" className="w-64 bg-sky-600 text-white p-0">

          <div className="px-4 py-4 font-semibold border-b border-white/20">
            Library
          </div>

          <div className="flex flex-col px-2 py-3 space-y-1">

            {links.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm transition ${
                  pathname === item.href
                    ? "bg-white text-sky-600"
                    : "hover:bg-white/20"
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>

        </SheetContent>
      </Sheet>

      <span className="ml-3 font-semibold text-gray-800">
        Library
      </span>

    </div>
  )
}