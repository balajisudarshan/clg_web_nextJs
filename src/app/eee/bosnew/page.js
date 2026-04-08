"use client"

export default function EEEBoSPage() {
    const bosMembers = [
        {
            role: "Chairman",
            name: "Dr. K. Venkata Kumar",
            designation: "Professor & HOD",
            institution: "Department of EEE, NBKRIST",
            category: "Head of the Department"
        },
        {
            role: "University Nominee",
            name: "Prof. G. Sreenivasan",
            designation: "Professor",
            institution: "Department of EEE, JNTUA, Anantapuramu",
            category: "Expert Nominated by JNTUA"
        },
        {
            role: "Subject Expert",
            name: "Prof. B. Saravanan",
            designation: "Professor",
            institution: "Department of Electrical Engineering, VIT, Vellore",
            category: "Academic Expert from outside the college"
        },
        {
            role: "Subject Expert",
            name: "Dr. P. Hari Krishna",
            designation: "Associate Professor",
            institution: "Department of EEE, NIT Warangal",
            category: "Academic Expert from outside the college"
        },
        {
            role: "Industrial Representative",
            name: "Mr. T. Naga Raju",
            designation: "Project Head",
            institution: "L&T Construction, Chennai",
            category: "Industry Expert"
        },
        {
            role: "Alumni Representative",
            name: "Mr. C. Muni Sankar",
            designation: "System Architect",
            institution: "General Electric (GE), Bangalore",
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

            <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                <p className="text-sm text-slate-600 leading-relaxed">
                    The BoS convenes annually to audit the B.Tech electrical syllabus, ensuring compliance with AICTE guidelines and integrating emerging technologies like Smart Grids and EV infrastructure into the core curriculum.
                </p>
            </div>
        </div>
    )
}
