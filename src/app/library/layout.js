import MobileSidebar from "@/components/MobileSideBar"
import SideBar from "@/components/SideBar"
export default function LibraryLayout({ children }) {
    return (
        <div>
            <MobileSidebar/>
            <div className="flex">

                <div className="w-64 hidden md:block">
                    <SideBar />
                </div>

                <main className="flex-1  bg-gray-100 min-h-screen">
                    {children}
                </main>

            </div>
        </div>
    )
}