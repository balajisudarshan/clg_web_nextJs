"use client"

export default function CSEBoSPage() {
    const bosMembers = [
        {
            role: "Chairman",
            name: "Dr. S. Sivakumara Reddy",
            designation: "Professor & HOD",
            institution: "Department of CSE, NBKRIST",
            category: "Head of the Department"
        },
        {
            role: "University Nominee",
            name: "Dr. B. Eswara Reddy",
            designation: "Professor",
            institution: "Dept. of CSE, JNTUA College of Engineering, Anantapur",
            category: "Expert Nominated by JNTUA"
        },
        {
            role: "Subject Expert",
            name: "Dr. D. V. L. N. Somayajulu",
            designation: "Professor",
            institution: "Dept. of CSE, NIT Warangal",
            category: "Academic Expert"
        },
        {
            role: "Subject Expert",
            name: "Dr. R. B. V. Subramaanyam",
            designation: "Professor",
            institution: "Dept. of CSE, NIT Warangal",
            category: "Academic Expert"
        },
        {
            role: "Industrial Expert",
            name: "Sri. K. Venkateswara Rao",
            designation: "General Manager",
            institution: "Global Product Development, Wipro, Hyderabad",
            category: "Industry Representative"
        },
        {
            role: "Alumni Representative",
            name: "Sri. P. Mahendra Babu",
            designation: "Software Engineer",
            institution: "Microsoft, Hyderabad",
            category: "Post Graduate Alumni"
        }
    ];

    return (
        <div className="space-y-10">
            {/* HEADER */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-9xl">CSE</div>
                <div className="relative">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-[0.2em] mb-2">Governance</p>
                    <h2 className="text-3xl font-extrabold text-slate-800">Board of Studies (BoS)</h2>
                    <div className="w-16 h-1.5 bg-[#E29820] rounded-full mt-4"></div>
                </div>
            </div>

            {/* MEMBERS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bosMembers.map((member, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-[#E29820]/30 hover:shadow-md transition-all group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#E29820] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#E29820]/10 transition-colors shadow-sm">
                                <svg className="w-6 h-6 text-slate-400 group-hover:text-[#E29820]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-[#E29820] uppercase tracking-wider">{member.role}</p>
                                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#E29820] transition-colors">{member.name}</h3>
                                <p className="text-slate-600 font-medium text-sm italic">{member.designation}</p>
                                <div className="pt-2">
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        <span className="font-semibold text-slate-400 block mb-1 uppercase tracking-tighter text-[10px]">Affiliation</span>
                                        {member.institution}
                                    </p>
                                </div>
                                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-tight">
                                    {member.category}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
