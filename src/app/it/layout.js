"use client"
import DepartmentLayout from "@/components/departments/DepartmentLayout"

const itLinks = [
    { name: "About IT", href: "/it" },
    { name: "Faculty", href: "/it/faculty" },
    { name: "Vision & Mission", href: "/it/visionmission" },
    { name: "PEOs, POs & PSOs", href: "/it/peos" },
    { name: "Board of Studies", href: "/it/bosnew" },
    { name: "Academic Calendars", href: "/it/academiccal" },
    { name: "Contact Us", href: "/it/contactus" },
]

export default function ITLayout({ children }) {
    return (
        <DepartmentLayout
            title="Information Technology"
            shortName="IT | AI&DS"
            links={itLinks}
        >
            {children}
        </DepartmentLayout>
    )
}
