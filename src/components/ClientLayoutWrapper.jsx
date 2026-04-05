"use client";

import { usePathname } from 'next/navigation';
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import Footer from "../app/components/Footer";

export default function ClientLayoutWrapper({ children }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith('/admin');

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <>
            <TopBar />
            <NavBar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </>
    );
}
