"use client"

export default function MechAboutPage() {
    return (
        <div className="space-y-10">
            {/* OVERVIEW SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="mb-6">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">About</p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Department Overview</h2>
                    <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p className="text-justify">
                        The Department of Mechanical Engineering was started in the year <strong>1979</strong> with an initial intake of 40. The current intake is <strong>60</strong>. The department has well qualified faculty and 12 state-of-the-art laboratories.
                    </p>
                    <p className="text-justify">
                        Our mission is to prepare students for leadership in the mechanical engineering profession through a rigorous curriculum and practical research orientation. The department emphasizes Design, Thermal, and Manufacturing engineering disciplines.
                    </p>
                </div>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                    <div className="text-3xl font-extrabold text-[#E29820]">1979</div>
                    <div className="text-sm text-slate-500 font-semibold mt-1">Established</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                    <div className="text-3xl font-extrabold text-blue-600">60</div>
                    <div className="text-sm text-slate-500 font-semibold mt-1">Student Intake</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                    <div className="text-3xl font-extrabold text-green-600">22</div>
                    <div className="text-sm text-slate-500 font-semibold mt-1">Faculty Members</div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                    <div className="text-3xl font-extrabold text-purple-600">12</div>
                    <div className="text-sm text-slate-500 font-semibold mt-1">Laboratories</div>
                </div>
            </div>

            {/* PROGRAMS OFFERED SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="mb-6">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">Academics</p>
                    <h2 className="text-2xl font-extrabold text-slate-800 mt-1">Courses Offered</h2>
                    <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="py-3 px-4 text-sm font-bold text-slate-700">S.No</th>
                                <th className="py-3 px-4 text-sm font-bold text-slate-700">Course</th>
                                <th className="py-3 px-4 text-sm font-bold text-slate-700">Branch</th>
                                <th className="py-3 px-4 text-sm font-bold text-slate-700">Intake</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-4 px-4 text-slate-600">1</td>
                                <td className="py-4 px-4 font-semibold text-slate-800">B.Tech</td>
                                <td className="py-4 px-4 text-slate-600">Mechanical Engineering</td>
                                <td className="py-4 px-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700">
                                        60
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
