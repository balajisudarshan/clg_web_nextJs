"use client";

import { Bell, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AdminHeader({ onMenuClick }) {
    const pathname = usePathname();

    // Generate a simple title based on route
    let title = 'Dashboard Stats';
    if (pathname.includes('/users')) title = 'Register Users';
    else if (pathname.includes('/faculty')) title = 'Faculty Management';
    else if (pathname.includes('/notifications')) title = 'Notification Management';

    return (
        <header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-4 md:px-6 shrink-0 z-10 shadow-sm shadow-neutral-100 relative">
            <div className="flex items-center">
                <button 
                    onClick={onMenuClick}
                    className="mr-3 md:hidden p-2 text-neutral-500 hover:text-[#E29820] hover:bg-neutral-100 rounded-lg transition-colors"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <h1 className="text-xl md:text-2xl font-bold text-neutral-800 tracking-tight">{title}</h1>
            </div>
            
            <div className="flex items-center space-x-4">
                <button className="relative p-2 text-neutral-400 hover:text-[#E29820] hover:bg-[#E29820]/10 rounded-full transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#E29820] to-orange-300 border-2 border-white shadow-md flex items-center justify-center text-white font-bold text-sm">
                    A
                </div>
            </div>
        </header>
    );
}
