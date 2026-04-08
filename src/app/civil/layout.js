"use client"
import DepartmentLayout from "@/components/departments/DepartmentLayout"

const civilLinks = [
    { href: "/civil", name: "About Department" },
    { href: "/civil/visionmission", name: "Vision & Mission" },
    { href: "/civil/peos", name: "Educational Objectives & Outcomes" },
    { href: "/civil/bosnew", name: "Board of Studies (BoS)" },
    { href: "/civil/faculty", name: "Faculty" },
    { href: "/civil/academiccal", name: "Academic Calendar" },
    { href: "/civil/events", name: "Events" },
    { href: "/civil/contactus", name: "Contact Us" }
]

export default function CivilLayout({ children }) {
    return (
        <DepartmentLayout
            title="Department of Civil Engineering"
            shortName="Civil Engineering"
            links={civilLinks}
        >
            {children}
        </DepartmentLayout>
    )
}
