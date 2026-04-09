import Link from "next/link";

export default function CSEResearchCellPage() {
    return (
        <div className="space-y-10">
            {/* HEADER */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg className="w-32 h-32 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                </div>
                <div className="relative">
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">Research & Development</p>
                    <h2 className="text-3xl font-extrabold text-slate-800">R&D Cell</h2>
                    <div className="w-16 h-1.5 bg-blue-500 rounded-full mt-4"></div>
                </div>
            </div>

            {/* QUICK LINKS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Vision & Mission", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
                    { title: "Objectives", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                    { title: "Contact Us", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
                ].map((item, idx) => (
                    <Link key={idx} href="#" className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all text-center group">
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
                            <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                            </svg>
                        </div>
                        <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-lg tracking-tight">{item.title}</h3>
                    </Link>
                ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                <div className="p-8 md:p-10 space-y-6">
                    <p className="text-justify text-slate-600 leading-relaxed text-lg font-medium">
                        Research and innovation are the pillars of quality education. The National Education Policy 2020 states that quality education builds on quality research in the institutes of higher education. Only a dynamic education setup encompassing active teaching, extensive learning, research, innovation and technology development can answer the social challenges to realise the dream of a self-reliant India. The research potential of Universities and HEIs play a vital role in imparting quality education.
                    </p>
                    
                    <blockquote className="border-l-4 border-[#E29820] bg-[#E29820]/5 px-8 py-6 my-10 rounded-r-2xl italic text-slate-700 font-semibold text-xl shadow-sm relative">
                        <svg className="absolute top-2 left-2 w-10 h-10 text-[#E29820]/10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        "R&D Cell provides a platform for creativity and innovation to flourish young minds in Computer Science & Engineering Department. Innovative breakthroughs will happen only because of meticulous efforts of R&D."
                    </blockquote>

                    <p className="text-justify text-slate-600 leading-relaxed text-lg font-medium">
                        The Research and Development Cell (R&D Cell) of the N.B.K.R. Institute of Science and Technology, Department of Computer Science and Engineering facilitates and encourages the research culture among the teachers and the students. The establishment of the R&D Cell is to develop and strengthen the research environment in the department and to align it with the educational policies of India. The R&D Cell would provide a favourable environment for productive research, Industrial and Institutional collaborations and mobilise the resources and grants.
                    </p>
                </div>
            </div>
        </div>
    );
}
