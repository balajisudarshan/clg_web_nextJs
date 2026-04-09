"use client"
import FacultyPageContent from "@/components/FacultyPageContent"

export default function MathematicsPage() {
    return (
        <div className="space-y-10">
            {/* SUBJECT OVERVIEW */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="mb-6">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">Sub-Department</p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Mathematics</h2>
                    <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p className="text-justify px-2">
                        Mathematics is the core language of engineering and science. The Mathematics sub-department at NBKRIST provides foundational courses that enable students to build strong analytical and problem-solving skills necessary for their core engineering subjects. Our faculty specialize in topics from Calculus and Numerical Methods to Discrete Mathematics and Statistics.
                    </p>
                </div>
            </div>

            {/* FACULTY FOR THIS SUBJECT */}
            <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#E29820] flex items-center justify-center mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </span>
                    Mathematics Faculty
                </h3>
                <FacultyPageContent 
                    departmentId="9"
                    departmentName="Mathematics" 
                />
            </div>
        </div>
    )
}
