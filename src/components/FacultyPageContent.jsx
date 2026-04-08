"use client"

import { api } from '@/lib/api'
import { useEffect, useState } from 'react'
import { AlertCircle, Mail, Phone, GraduationCap, Link as LinkIcon, User, Search } from 'lucide-react'

export default function FacultyPageContent({ departmentId, departmentName }) {
    const [faculties, setFaculties] = useState([]);
    const [filteredFaculties, setFilteredFaculties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchFaculties()
    }, [departmentId])

    useEffect(() => {
        const filtered = faculties.filter(f =>
            f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            f.designation?.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredFaculties(filtered);
    }, [searchQuery, faculties]);

    const fetchFaculties = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await api('faculties');
            const data = Array.isArray(res) ? res : (res.data || []);

            // Support single ID string or array of IDs (e.g. Science has IDs 9-15)
            const deptIds = Array.isArray(departmentId)
                ? departmentId.map(id => id.toString())
                : [departmentId.toString()];

            const deptFaculties = data.filter(f => {
                const fId = f.departmentId?.toString();
                return deptIds.includes(fId) ||
                    f.departmentId?.toLowerCase() === departmentName?.toLowerCase();
            });

            setFaculties(deptFaculties);
            setFilteredFaculties(deptFaculties);
        } catch (error) {
            console.error('Error fetching faculties:', error);
            setError(error.message || "Failed to fetch faculty data.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <p className="text-sm font-bold text-[#E29820] uppercase tracking-wider">Our Team</p>
                        <h2 className="text-3xl font-extrabold text-slate-800 mt-1">Faculty Members</h2>
                        <div className="w-16 h-1 bg-[#E29820] rounded-full mt-4"></div>
                    </div>

                    <div className="relative max-w-sm w-full group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E29820] transition-colors w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search by name or designation..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-[#E29820] outline-none transition-all text-sm placeholder:text-slate-400"
                        />
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-24 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="relative">
                        <div className="w-14 h-14 border-4 border-orange-200 border-t-[#E29820] rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-[#E29820]">
                            <User className="w-5 h-5" />
                        </div>
                    </div>
                    <p className="text-slate-500 font-medium text-sm mt-6">Loading faculty data...</p>
                </div>
            ) : error ? (
                <div className="bg-red-50 border border-red-200 rounded-xl p-10 text-center">
                    <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-red-800 mb-2">Unable to Load Faculty</h3>
                    <p className="text-red-600/80 mb-6 text-sm">{error}</p>
                    <button
                        onClick={fetchFaculties}
                        className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-sm transition-all"
                    >
                        Try Again
                    </button>
                </div>
            ) : filteredFaculties.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <User className="w-8 h-8 text-slate-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">No Faculty Found</h3>
                    <p className="text-slate-500 text-sm">No faculty members match your current search criteria.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredFaculties.map((faculty, idx) => (
                        <div
                            key={faculty._id || idx}
                            className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            {/* ID Card Top - Orange Background + Image */}
                            <div className="relative bg-gradient-to-br from-[#E29820] to-orange-500 pt-8 pb-16 flex items-center justify-center">
                                {/* Subtle pattern overlay */}
                                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                                {/* Profile Image - overlapping the boundary */}
                                <div className="relative z-20 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white translate-y-10">
                                    {faculty.image ? (
                                        <img
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(faculty.name) + "&background=E29820&color=fff&bold=true&size=200";
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-orange-50 text-[#E29820]">
                                            <User className="w-10 h-10" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="pt-12 pb-6 px-6 flex-grow flex flex-col text-center">
                                <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#E29820] transition-colors leading-tight">
                                    {faculty.name}
                                </h3>
                                <p className="text-[#E29820] font-semibold text-xs uppercase tracking-wider mt-1">
                                    {faculty.designation}
                                </p>

                                {/* Details */}
                                <div className="mt-5 space-y-3 text-left flex-grow">
                                    {faculty.qualification && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#E29820] flex items-center justify-center flex-shrink-0">
                                                <GraduationCap className="w-4 h-4" />
                                            </div>
                                            <span className="text-xs text-slate-600 font-medium">{faculty.qualification}</span>
                                        </div>
                                    )}

                                    {faculty.email && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <a href={`mailto:${faculty.email}`} className="text-xs text-slate-500 hover:text-[#E29820] transition-colors truncate">
                                                {faculty.email}
                                            </a>
                                        </div>
                                    )}

                                    {faculty.phone && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            <span className="text-xs text-slate-700 font-medium">{faculty.phone}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Action Button */}
                                <div className="mt-6 pt-4 border-t border-slate-100">
                                    {faculty.profile_link ? (
                                        <a
                                            href={faculty.profile_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-2.5 bg-slate-800 hover:bg-[#E29820] text-white rounded-lg font-semibold text-xs text-center transition-all flex items-center justify-center gap-2"
                                        >
                                            <LinkIcon className="w-3.5 h-3.5" />
                                            View Profile
                                        </a>
                                    ) : (
                                        <div className="w-full py-2.5 bg-slate-50 text-slate-400 rounded-lg font-medium text-xs text-center border border-slate-100">
                                            Profile Not Available
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
