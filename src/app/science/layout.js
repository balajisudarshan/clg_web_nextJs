"use client"
import DepartmentLayout from "@/components/departments/DepartmentLayout"

const scienceLinks = [
    { href: "/science", name: "About S&H" },
    { href: "/science/visionmission", name: "Vision & Mission" },
    { href: "/science/faculty", name: "All Faculty" },
    { href: "/science/mathematics", name: "Mathematics" },
    { href: "/science/physics", name: "Physics" },
    { href: "/science/chemistry", name: "Chemistry" },
    { href: "/science/english", name: "English" },
    { href: "/science/economics", name: "Economics" },
    { href: "/science/physical-education", name: "Physical Education" },
    { href: "/science/library", name: "Library" },
    { href: "/science/events", name: "Events" },
    { href: "/science/contactus", name: "Contact Us" },
]

export default function ScienceLayout({ children }) {
    return (
        <DepartmentLayout
            title="Sciences & Humanities"
            shortName="S&H"
            links={scienceLinks}
        >
            {children}
        </DepartmentLayout>
    )
}
