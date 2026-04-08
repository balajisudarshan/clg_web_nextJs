"use client"

export default function ITBoSPage() {
    const bosMembers = [
        {
            role: "Chairman",
            name: "Dr. G. Sankar",
            designation: "Professor & HOD",
            institution: "Department of IT, NBKRIST",
            category: "Head of the Department"
        },
        {
            role: "University Nominee",
            name: "Prof. T. Hitendra Sarma",
            designation: "Professor",
            institution: "Department of CSE, JNTUA, Ananthapuramu",
            category: "Expert Nominated by JNTUA"
        },
        {
            role: "Subject Expert",
            name: "Prof. M. Ramasubba Reddy",
            designation: "Professor",
            institution: "Department of Applied Mechanics, IIT Madras, Chennai",
            category: "Academic Expert from outside the college"
        },
        {
            role: "Subject Expert",
            name: "Dr. K. Venkata Ramana",
            designation: "Professor",
            institution: "Department of IT, SVU College of Engineering, Tirupati",
            category: "Academic Expert from outside the college"
        },
        {
            role: "Industrial Representative",
            name: "Mr. K. Chandra Sekhar",
            designation: "Project Manager",
            institution: "Wipro Technologies, Hyderabad",
            category: "Industry Expert"
        },
        {
            role: "Alumni Representative",
            name: "Mr. P. Muni Sankar",
            designation: "System Analyst",
            institution: "TCS, Chennai",
            category: "Post Graduate Meritorious Alumnus"
        }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="mb-8">
                <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">Governance</p>
                <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Board of Studies (BoS)</h2>
                <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="py-4 px-6 text-sm font-bold text-slate-700">Role</th>
                            <th className="py-4 px-6 text-sm font-bold text-slate-700">Member Details</th>
                            <th className="py-4 px-6 text-sm font-bold text-slate-700">Category</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {bosMembers.map((member, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                <td className="py-6 px-6 align-top">
                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                                        member.role === 'Chairman' 
                                        ? 'bg-orange-100 text-orange-700' 
                                        : 'bg-slate-100 text-slate-700'
                                    }`}>
                                        {member.role}
                                    </span>
                                </td>
                                <td className="py-6 px-6">
                                    <div className="font-bold text-slate-900 text-lg">{member.name}</div>
                                    <div className="text-slate-600 font-medium">{member.designation}</div>
                                    <div className="text-slate-500 text-sm mt-1">{member.institution}</div>
                                </td>
                                <td className="py-6 px-6 text-sm text-slate-600 italic">
                                    {member.category}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
