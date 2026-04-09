const fs = require('fs');
const path = require('path');

const departments = [
    {
        key: 'civ',
        id: 'civil',
        title: 'Department of Civil Engineering',
        shortName: 'Civil Engineering',
        links: [
            { href: "/civil", name: "About Department" },
            { href: "/civil/visionmission", name: "Vision & Mission" },
            { href: "/civil/peos", name: "Educational Objectives & Outcomes" },
            { href: "/civil/bosnew", name: "Board of Studies (BoS)" },
            { href: "/civil/faculty", name: "Faculty" },
            { href: "/civil/academiccal", name: "Academic Calendar" },
            { href: "/civil/events", name: "Events" },
            { href: "/civil/contactus", name: "Contact Us" }
        ]
    },
    {
        key: 'it',
        id: 'it',
        title: 'Department of Information Technology',
        shortName: 'IT | AI&DS',
        links: [
            { href: "/it", name: "About Department" },
            { href: "/it/visionmission", name: "Vision & Mission" },
            { href: "/it/peos", name: "Educational Objectives & Outcomes" },
            { href: "/it/bosnew", name: "Board of Studies (BoS)" },
            { href: "/it/faculty", name: "Faculty" },
            { href: "/it/academiccal", name: "Academic Calendar" },
            { href: "/it/events", name: "Events" },
            { href: "/it/contactus", name: "Contact Us" }
        ]
    },
    {
        key: 'ece',
        id: 'ece',
        title: 'Department of Electronics & Communication Engineering',
        shortName: 'Electronics & Comm.',
        links: [
            { href: "/ece", name: "About Department" },
            { href: "/ece/visionmission", name: "Vision & Mission" },
            { href: "/ece/peos", name: "Educational Objectives & Outcomes" },
            { href: "/ece/bosnew", name: "Board of Studies (BoS)" },
            { href: "/ece/faculty", name: "Faculty" },
            { href: "/ece/academiccal", name: "Academic Calendar" },
            { href: "/ece/events", name: "Events" },
            { href: "/ece/contactus", name: "Contact Us" }
        ]
    },
    {
        key: 'eee',
        id: 'eee',
        title: 'Department of Electrical & Electronics Engineering',
        shortName: 'Electrical & Electronics',
        links: [
            { href: "/eee", name: "About Department" },
            { href: "/eee/visionmission", name: "Vision & Mission" },
            { href: "/eee/peos", name: "Educational Objectives & Outcomes" },
            { href: "/eee/bosnew", name: "Board of Studies (BoS)" },
            { href: "/eee/faculty", name: "Faculty" },
            { href: "/eee/academiccal", name: "Academic Calendar" },
            { href: "/eee/events", name: "Events" },
            { href: "/eee/contactus", name: "Contact Us" }
        ]
    },
    {
        key: 'mech',
        id: 'mech',
        title: 'Department of Mechanical Engineering',
        shortName: 'Mechanical Engineering',
        links: [
            { href: "/mech", name: "About Department" },
            { href: "/mech/visionmission", name: "Vision & Mission" },
            { href: "/mech/peos", name: "Educational Objectives & Outcomes" },
            { href: "/mech/bosnew", name: "Board of Studies (BoS)" },
            { href: "/mech/faculty", name: "Faculty" },
            { href: "/mech/academiccal", name: "Academic Calendar" },
            { href: "/mech/events", name: "Events" },
            { href: "/mech/contactus", name: "Contact Us" }
        ]
    },
    {
        key: 'sh',
        id: 'science',
        title: 'Department of Science & Humanities',
        shortName: 'Sciences & Humanities',
        links: [
            { href: "/science", name: "About Department" },
            { href: "/science/visionmission", name: "Vision & Mission" },
            { href: "/science/faculty", name: "Faculty" },
            { href: "/science/events", name: "Events" },
            { href: "/science/contactus", name: "Contact Us" }
        ]
    }
];

const baseDir = path.join(__dirname, '..', 'src', 'app');

departments.forEach(dept => {
    const deptDir = path.join(baseDir, dept.id);
    if (!fs.existsSync(deptDir)) {
        fs.mkdirSync(deptDir, { recursive: true });
    }

    // layout.js
    const layoutContent = `"use client"
import DepartmentLayout from "@/components/departments/DepartmentLayout"

const links = ${JSON.stringify(dept.links, null, 4)}

export default function Layout({ children }) {
    return (
        <DepartmentLayout
            title="${dept.title}"
            shortName="${dept.shortName}"
            links={links}
        >
            {children}
        </DepartmentLayout>
    )
}
`;
    fs.writeFileSync(path.join(deptDir, 'layout.js'), layoutContent);

    // main page.js (About)
    const pageContent = `"use client"

export default function AboutPage() {
    return (
        <div className="space-y-10">
            {/* CONTENT WILL BE POPULATED FROM DATA */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                    <div className="h-8 bg-slate-200 rounded w-1/2"></div>
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                </div>
            </div>
        </div>
    )
}
`;
    fs.writeFileSync(path.join(deptDir, 'page.js'), pageContent);

    // Subpages
    dept.links.forEach(link => {
        if (link.href.startsWith(`/${dept.id}/`)) {
            const subPageName = link.href.split('/').pop();
            const subPageDir = path.join(deptDir, subPageName);
            if (!fs.existsSync(subPageDir)) {
                fs.mkdirSync(subPageDir);
            }
            const subPageContent = `"use client"

export default function SubPage() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 capitalize">${subPageName.replace(/_/g, ' ')}</h2>
            <div className="animate-pulse space-y-4">
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-full"></div>
            </div>
        </div>
    )
}
`;
            fs.writeFileSync(path.join(subPageDir, 'page.js'), subPageContent);
        }
    });
});

console.log('Successfully generated scaffolding for 6 departments.');
