"use client"
import DepartmentLayout from "@/components/departments/DepartmentLayout"

const eeeLinks = [
    { name: "About EEE", href: "/eee" },
    { name: "Faculty", href: "/eee/faculty" },
    { name: "Vision & Mission", href: "/eee/visionmission" },
    { name: "PEOs, POs & PSOs", href: "/eee/peos" },
    { name: "Board of Studies", href: "/eee/bosnew" },
    { name: "Academic Calendars", href: "/eee/academiccal" },
    { name: "Contact Us", href: "/eee/contactus" },
]

export default function EEELayout({ children }) {
    return (
        <DepartmentLayout
            title="Electrical & Electronics Engineering"
            shortName="EEE"
            links={eeeLinks}
        >
            {children}
        </DepartmentLayout>
    )
}
