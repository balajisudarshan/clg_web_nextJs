"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldAlert, Users, BellRing, Link as LinkIcon, BarChart3, Clock } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
    const router = useRouter();
    const [role, setRole] = useState(null);

    useEffect(() => {
        const storedRole = localStorage.getItem('userRole');
        if (!storedRole || storedRole === 'undefined' || storedRole === 'null') {
            router.push('/admin/login');
        } else {
            setRole(storedRole);
        }
    }, [router]);

    if (!role) return null;

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E29820]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-extrabold text-neutral-800 tracking-tight">
                        Welcome to Command Center <span className="text-[#E29820]">.</span>
                    </h2>
                    <p className="text-neutral-500 mt-2 text-lg">
                        You have <span className="font-bold text-neutral-700 capitalize">{role}</span> privileges. Select a module below to begin managing the institution's portal.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {role === 'admin' && (
                    <>
                        <Link href="/admin/users" className="group">
                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold tracking-tight shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <ShieldAlert size={24} />
                                    </div>
                                    <LinkIcon size={20} className="text-neutral-300 group-hover:text-[#E29820]" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-800 mb-1">Security & Users</h3>
                                <p className="text-neutral-500 text-sm">Register and manage administrative personnel and examcell members.</p>
                            </div>
                        </Link>

                        <Link href="/admin/faculty" className="group">
                            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold tracking-tight shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        <Users size={24} />
                                    </div>
                                    <LinkIcon size={20} className="text-neutral-300 group-hover:text-[#E29820]" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-800 mb-1">Faculty Management</h3>
                                <p className="text-neutral-500 text-sm">Manage faculty profiles, assignments, and departmental roles.</p>
                            </div>
                        </Link>
                    </>
                )}

                <Link href="/admin/notifications" className="group">
                    <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center font-bold tracking-tight shadow-inner group-hover:bg-rose-600 group-hover:text-white transition-colors">
                                <BellRing size={24} />
                            </div>
                            <LinkIcon size={20} className="text-neutral-300 group-hover:text-[#E29820]" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-1">Notification Management</h3>
                        <p className="text-neutral-500 text-sm">
                            {role === 'admin' ? "Publish and broadcast general and exam notifications." : "Manage localized examcell announcements and schedules."}
                        </p>
                    </div>
                </Link>

            </div>
            
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                 {/* System Activity placeholder */}
                 <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-neutral-800 tracking-tight flex items-center">
                            <BarChart3 className="w-5 h-5 mr-2 text-[#E29820]" />
                            System Pulse
                        </h3>
                    </div>
                    <div className="h-48 flex items-center justify-center border-2 border-dashed border-neutral-100 bg-neutral-50 rounded-xl">
                        <p className="text-neutral-400 font-medium">Metrics tracking offline</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-neutral-800 tracking-tight flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-[#E29820]" />
                            Recent Activity
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#E29820] mt-1.5 mr-3"></div>
                            <div>
                                <p className="text-sm font-medium text-neutral-800">Secure session established</p>
                                <p className="text-xs text-neutral-500 mt-0.5">Just now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
