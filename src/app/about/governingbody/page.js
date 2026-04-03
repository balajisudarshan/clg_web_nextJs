import { Card, CardContent } from "@/components/ui/card"

const members = [
  {
    id: 1,
    name: "Dr. Y. Venkatarami Reddy",
    desc: "Former Member - UPSC",
    position: "Chairman",
  },
  {
    id: 2,
    name: "Dr. P. Jaya Rami Reddy",
    desc: "Former Vice Chancellor, S.V.U., Tirupati",
    position: "Member",
  },
  {
    id: 3,
    name: "Dr. K. Narayana",
    desc: "Former Director, SHAR Centre",
    position: "Member",
  },
  {
    id: 4,
    name: "Sri K. Damodara Reddy",
    desc: "Secretary, HVUS",
    position: "Member",
  },
  {
    id: 5,
    name: "Sri N. Ram Kumar",
    desc: "Correspondent, N.B.K.R.I.S.T",
    position: "Member",
  },
  {
    id:6,
    name:"Sri K. Sanjeevaiah",
    desc:"MLA, Sullurpet",
    position:"Member"
  },
  {
    id:7,
    name:"Dr. M. Vijaya Kumar Reddy",
    desc:"Director, JNTUA",
    position:"Govt.Nominee"
  },
  {
    id:8,
    name:"Dr. P. Sujatha",
    desc:"Principal, JNTUACE",
    position:"University Nominee"
  },
  {
    id:9,
    name:"Dr. Amiya Kumar Rath",
    desc:"Professor, VSSUT, Odisha",
    position:"UGC Nominee"
  },
  {
    id:10,
    name:"Dr. D. Srinivas",
    desc:"Professor,N.B.K.R.I.S.T.",
    position:"Member"
  }
]

export default function GoverningBody() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Governing <span className="text-orange-500">Body</span>
          </h1>
          <p className="text-gray-500 mt-2">
            Leadership guiding institutional excellence
          </p>
        </div>

        {/* Table */}
        <Card className="bg-white shadow-sm border border-gray-200">
          <CardContent className="p-0 overflow-x-auto">

            <table className="w-full text-sm text-left text-gray-700">

              {/* Header */}
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">S.No</th>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Position</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {members.map((m, index) => (
                  <tr
                    key={m.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3">{index + 1}</td>

                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-900">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.desc}</p>
                    </td>

                    <td className="px-4 py-3 text-orange-500 font-medium">
                      {m.position}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </CardContent>
        </Card>

      </div>
    </div>
  )
}