"use client"
import FacultyPageContent from "@/components/FacultyPageContent"

export default function EconomicsPage() {
    return (
        <div className="space-y-10">
            {/* SUBJECT OVERVIEW */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="mb-6">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">Sub-Department</p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Economics & Management</h2>
                    <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p className="text-justify px-2">
                        Understanding economic principles and management is crucial for engineers in project planning and organizational leadership. Our Economics sub-department Provides essential insights into engineering economics and managerial skills.
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
                    Economics Faculty
                </h3>
                <FacultyPageContent 
                    departmentId="13"
                    departmentName="Economics" 
                />
            </div>
        </div>
    )
}
