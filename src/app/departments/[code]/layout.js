import DepartmentSidebar from "@/components/DepartmentSidebar"
import MobileSidebar from "@/components/MobileSideBar"

export default function DepartmentCodeLayout({ children, params }) {
  const code = params?.code

  return (
    <div className="flex flex-col md:flex-row">
      {/* MOBILE SIDEBAR */}
      <MobileSidebar dept code={code} />

      {/* DESKTOP SIDEBAR */}
      {code && (
        <div className="w-64 hidden md:block bg-white border-r">
          <DepartmentSidebar code={code} />
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  )
}
