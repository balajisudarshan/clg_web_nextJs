"use client"

export default function ECEContactPage() {
    const contactInfo = {
        name: "Dr. S. Mahaboob Basha",
        designation: "Professor & Head of Department",
        department: "Department of Electronics & Communication Engineering",
        college: "NBKR Institute of Science & Technology",
        phone: "+91-9440505191",
        email: "ecehod@nbkrist.org",
        secondaryEmail: "head.ece@nbkrist.org"
    }

    return (
        <div className="max-w-4xl mx-auto py-10 space-y-12">
            <div className="text-center space-y-4">
                <p className="text-[#E29820] font-bold tracking-widest uppercase">Get in Touch</p>
                <h1 className="text-4xl font-extrabold text-slate-800">Department Contact Details</h1>
                <p className="text-slate-500 max-w-2xl mx-auto">
                    Our department is open for collaborative research, industrial training, and academic partnerships. We encourage prospective students and partners to get in touch.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 overflow-hidden group">
                    <div className="bg-gradient-to-br from-[#E29820] to-orange-500 p-8 text-white relative overflow-hidden text-center">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold">
                            MB
                        </div>
                        <h2 className="text-2xl font-bold relative z-10">{contactInfo.name}</h2>
                        <p className="text-orange-100 relative z-10 font-medium">{contactInfo.designation}</p>
                    </div>

                    <div className="p-8 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">📍</div>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">Location</p>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {contactInfo.department},<br />
                                    {contactInfo.college},<br />
                                    Vidyanagar, Andhra Pradesh, PIN - 524413
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">📞</div>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">Phone Number</p>
                                <a href={`tel:${contactInfo.phone}`} className="text-blue-600 font-bold text-lg hover:underline decoration-2">
                                    {contactInfo.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">✉️</div>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">Email Addresses</p>
                                <div className="space-y-1">
                                    <a href={`mailto:${contactInfo.email}`} className="block text-slate-700 font-medium hover:text-[#E29820] transition-colors">
                                        {contactInfo.email}
                                    </a>
                                    {contactInfo.secondaryEmail && (
                                        <a href={`mailto:${contactInfo.secondaryEmail}`} className="block text-slate-700 font-medium hover:text-[#E29820] transition-colors">
                                            {contactInfo.secondaryEmail}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-800 mb-4">Working Hours</h3>
                        <ul className="space-y-3">
                            {[
                                { day: "Monday - Friday", hours: "9:00 AM - 4:30 PM" },
                                { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
                                { day: "Sunday", hours: "Closed" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-medium">{item.day}</span>
                                    <span className="text-slate-800 font-bold">{item.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl text-white">
                        <h3 className="text-lg font-bold mb-4 text-[#E29820]">Academic Support</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            For matters related to examinations, certificates, or grievance redressal, students are advised to include their Roll Number and Batch Year in all email communications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
