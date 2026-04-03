import { Card, CardContent } from "@/components/ui/card"

const rtiLinks = [
  {
    title: "Regulations",
    links: ["Regulations"]
  },
  {
    title: "Anti-Ragging Measures",
    links: [
      "Office Order on Ragging",
      "Ragging Duties",
      "At First Year Hostels",
      "Outside the Campus",
      "Anti-Ragging Posters"
    ]
  },
  {
    title: "Student Support",
    links: ["Student Counselling"]
  },
  {
    title: "RTI Information",
    links: ["Information Under Section 4(1)(b)"]
  }
]

export default function RTIPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Information under <span className="text-orange-500">RTI Act</span>
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Click on any link below to download relevant information
          </p>
        </div>

        {/* Sections */}
        {rtiLinks.map((section, i) => (
          <Card key={i} className="bg-white border border-gray-200 shadow-sm">
            <CardContent className="p-6 space-y-4">

              <h2 className="text-lg font-semibold text-gray-700">
                {section.title}
              </h2>

              <div className="flex flex-col gap-2">
                {section.links.map((link, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-700 hover:text-orange-500 hover:underline transition text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>

            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  )
}