"use client"
import DepartmentLayout from "@/components/departments/DepartmentLayout"

const eceLinks = [
    { name: "About ECE", href: "/ece" },
    { name: "Faculty", href: "/ece/faculty" },
    { name: "Vision & Mission", href: "/ece/visionmission" },
    { name: "PEOs, POs & PSOs", href: "/ece/peos" },
    { name: "Board of Studies", href: "/ece/bosnew" },
    { name: "Academic Calendars", href: "/ece/academiccal" },
    { name: "Contact Us", href: "/ece/contactus" },
]

export default function ECELayout({ children }) {
    return (
        <DepartmentLayout
            title="Electronics & Comm. Engineering"
            shortName="ECE"
            links={eceLinks}
        >
            {children}
        </DepartmentLayout>
    )
}
