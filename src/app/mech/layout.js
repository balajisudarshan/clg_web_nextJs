"use client"
import DepartmentLayout from "@/components/departments/DepartmentLayout"

const mechLinks = [
    { name: "About ME", href: "/mech" },
    { name: "Faculty", href: "/mech/faculty" },
    { name: "Vision & Mission", href: "/mech/visionmission" },
    { name: "PEOs, POs & PSOs", href: "/mech/peos" },
    { name: "Board of Studies", href: "/mech/bosnew" },
    { name: "Academic Calendars", href: "/mech/academiccal" },
    { name: "Contact Us", href: "/mech/contactus" },
]

export default function MechLayout({ children }) {
    return (
        <DepartmentLayout
            title="Mechanical Engineering"
            shortName="MECH"
            links={mechLinks}
        >
            {children}
        </DepartmentLayout>
    )
}
