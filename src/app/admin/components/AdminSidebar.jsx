"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Users, UsersRound, BellRing, LogOut, ShieldAlert, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AdminSidebar({ isOpen, onClose }) {
    const pathname = usePathname();
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

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        router.push('/admin/login');
    };

    if (!role) return null; // Avoid rendering until role is known to prevent hydration flash

    const links = [
        { name: 'Dashboard Stats', href: '/admin', icon: LayoutDashboard, roles: ['admin', 'examcell'] },
        { name: 'Register Users', href: '/admin/users', icon: Users, roles: ['admin'] },
        { name: 'Faculty Management', href: '/admin/faculty', icon: UsersRound, roles: ['admin'] },
        { name: 'Notification Management', href: '/admin/notifications', icon: BellRing, roles: ['admin', 'examcell'] },
    ];

    const filteredLinks = links.filter(link => link.roles.includes(role));

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-20 md:hidden" 
                    onClick={onClose}
                />
            )}
            
            <aside className={`w-64 bg-neutral-950 border-r border-neutral-800 flex flex-col text-white fixed inset-y-0 left-0 z-30 transition-transform duration-300 md:static md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-16 flex items-center justify-between px-6 border-b border-neutral-800 shrink-0">
                    <div className="flex items-center">
                        <ShieldAlert className="w-8 h-8 text-[#E29820] mr-3" />
                        <span className="text-xl font-bold tracking-tight text-white">Admin Panel</span>
                    </div>
                    {/* Close button for mobile */}
                    <button onClick={onClose} className="md:hidden text-neutral-400 hover:text-white">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="p-4 mb-4 mt-2">
                    <div className="bg-neutral-900 rounded-lg p-3 border border-neutral-800 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#E29820] animate-pulse mr-2"></div>
                        <div>
                            <p className="text-xs text-neutral-400 font-medium">Logged in as</p>
                            <p className="text-sm text-white font-bold capitalize">{role}</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
                    {filteredLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = link.href === '/admin' 
                            ? pathname === '/admin' 
                            : pathname.startsWith(link.href);

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={onClose}
                                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                                    isActive 
                                        ? 'bg-[#E29820]/10 text-[#E29820] font-semibold' 
                                        : 'text-neutral-400 hover:bg-neutral-900 hover:text-white font-medium'
                                }`}
                            >
                                <Icon className={`w-5 h-5 mr-3 transition-colors ${isActive ? 'text-[#E29820]' : 'text-neutral-500 group-hover:text-white'}`} />
                                {link.name}
                                {isActive && (
                                    <div className="ml-auto w-1.5 h-5 rounded-full bg-[#E29820]"></div>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-neutral-800">
                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-colors font-medium group"
                    >
                        <LogOut className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                        Secure Logout
                    </button>
                </div>
            </aside>
        </>
    );
}
