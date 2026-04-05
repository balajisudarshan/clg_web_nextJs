import Link from 'next/link'

const departments = [
  { code: "1", name: "Science And Humanities Department" },
  { code: "2", name: "Civil Engineering" },
  { code: "3", name: "Electrical And Electronics Engineering Department" },
  { code: "4", name: "Electronics And Communication Department" },
  { code: "5", name: "Mechanical Engineering Department" },
  { code: "6", name: "Computer Science And Engineering" },
  { code: "99", name: "IT - AI&DS" },
]

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-10">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our <span className="text-blue-600">Departments</span>
        </h1>
        <p className="text-lg text-gray-600">
          Explore the various academic departments and programs offered at our institution.
        </p>
      </div>

      {/* DEPARTMENTS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <Link href={`/departments/${dept.code}/faculty`} key={dept.code}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer group">
              {/* DEPARTMENT CODE/NUMBER */}
              <div className="text-sm font-semibold text-blue-600 mb-2">
                Department Code: {dept.code}
              </div>

              {/* DEPARTMENT NAME */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {dept.name}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm mb-6">
                View faculty members, programs, and departmental information.
              </p>

              {/* BUTTON */}
              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                View Department →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* STATS SECTION */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">{departments.length}</h3>
          <p className="text-gray-600">Departments</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">100+</h3>
          <p className="text-gray-600">Faculty Members</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">2000+</h3>
          <p className="text-gray-600">Students</p>
        </div>
      </div>
    </div>
  )
}