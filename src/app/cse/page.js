"use client"

export default function CSEAboutPage() {
    return (
        <div className="space-y-10">
            {/* OVERVIEW SECTION */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="mb-6">
                    <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">About</p>
                    <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Department Overview</h2>
                    <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4 text-slate-600 leading-relaxed text-lg">
                        <p className="text-justify font-medium">
                            The Department of Computer Science and Engineering (CSE) was established in <strong>1991</strong> with an intake of 30 students in the undergraduate (UG) programme. Right from its inception, it has been continuously striving to impart quality education and foster a competitive spirit among students in pursuit of academic excellence. The current intake for the B.Tech (CSE) programme is <strong>720 students</strong>.
                        </p>
                        <p className="text-justify font-medium">
                            The aim of the department is to provide high-quality education along with training in state-of-the-art technologies. The department emphasizes all the important aspects of computers and takes initiative to improve soft skills, analytical capabilities, and verbal communication so that students can face competition in the modern world.
                        </p>
                    </div>
                    
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center text-center space-y-4">
                        <div className="text-4xl font-black text-[#E29820]">1991</div>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Inception Year</p>
                        <div className="w-12 h-px bg-slate-200 mx-auto"></div>
                        <div className="text-4xl font-black text-blue-600">720</div>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Student Intake</p>
                    </div>
                </div>
            </div>

            {/* KEY FEATURES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#E29820]/30 transition-all group shadow-sm">
                    <div className="w-14 h-14 bg-[#E29820]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-[#E29820]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Cutting-edge Curriculum</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                        Curriculum designed with industry experts, covering AI, ML, Data Science, and Cloud Computing to keep students globally competitive.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-400/30 transition-all group shadow-sm">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.477 2.387a2 2 0 00.547 1.022l1.428 1.428a2 2 0 002.828 0l1.428-1.428a2 2 0 00.547-1.022l-.477-2.387a2 2 0 00-1.414-1.96l-2.387-.477a2 2 0 00-1.022.547l-1.428 1.428a2 2 0 000 2.828l1.428 1.428" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Research Labs</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                        State-of-the-art computer labs with high-speed fiber connectivity and industry-grade software for practical exploration.
                    </p>
                </div>
            </div>
        </div>
    )
}
