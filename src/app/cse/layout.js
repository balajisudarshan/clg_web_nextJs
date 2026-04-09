"use client"
import DepartmentLayout from "@/components/departments/DepartmentLayout"

// Define the sidebar links for the CSE department
const cseLinks = [
    { href: "/cse", name: "About Department" },
    { href: "/cse/visionmission", name: "Vision & Mission" },
    { href: "/cse/peos", name: "Educational Objectives & Outcomes" },
    { href: "/cse/bosnew", name: "Board of Studies (BoS)" },
    { href: "/cse/iqac", name: "IQAC" },
    { href: "/cse/researchcell", name: "R&D Cell" },
    { href: "/cse/students_info", name: "Students Info" },
    { href: "/cse/newsletter", name: "News Letter" },
    { href: "/CSE/CSECLASSANDLABS.pdf", name: "Infrastructure" },
    { href: "/cse/faculty", name: "Faculty" },
    { href: "/cse/academiccal", name: "Academic Calendar" },
    { href: "/cse/events", name: "Events" },
    { href: "/cse/contactus", name: "Contact Us" }
]

export default function CSELayout({ children }) {
    return (
        <DepartmentLayout
            title="Computer Science & Engineering"
            shortName="CSE | AI&ML | DS"
            links={cseLinks}
        >
            {children}
        </DepartmentLayout>
    )
}
