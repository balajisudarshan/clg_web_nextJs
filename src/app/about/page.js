"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/image.png')" }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-4">
          <p className="text-sm tracking-widest text-orange-400 uppercase">
            NAAC 'A' Grade • NBA Accredited • Autonomous
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4">
            About <span className="text-orange-400">NBKRIST</span>
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Engineering excellence since 1979 — shaping innovators for a rapidly evolving world.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">

          <Card className="shadow-lg border-0">
            <CardContent className="p-6 space-y-6 text-gray-700 leading-relaxed">

              <h2 className="text-2xl font-bold text-orange-500">About Us</h2>

              <p>
                NBKR Institute of Science & Technology, established in 1979, is an autonomous institute affiliated to JNTUA Anantapuramu.
                The institute is reaccredited by NAAC with ‘A’ grade and all B.Tech programs are accredited by NBA under Tier-1.
              </p>

              <p>
                The institution is recognized as a “College with Potential for Excellence (CPE)” by UGC and offers a strong academic
                environment supported by experienced faculty and modern infrastructure.
              </p>

              {/* PROGRAMS */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Programs Offered
                </h3>

                <ul className="list-disc pl-6 space-y-1 text-orange-500 font-medium">
                  <li>Computer Science & Engineering</li>
                  <li>Artificial Intelligence & Data Science</li>
                  <li>Electronics & Communication Engineering</li>
                  <li>Electrical & Electronics Engineering</li>
                  <li>Mechanical Engineering</li>
                  <li>Civil Engineering</li>
                </ul>
              </div>

              <p>
                The institute has recognized research centers offering Ph.D programs and an active R&D cell supporting innovation.
              </p>

              <p>
                Training programs are conducted through industry interaction, involving experts, entrepreneurs, and alumni,
                ensuring students stay aligned with modern technology trends.
              </p>

              <p>
                The campus spans a green environment with academic blocks, hostels, sports facilities, and open-air spaces.
                Student development is encouraged through clubs, technical associations, and professional chapters like IEEE, ISTE, and CSI.
              </p>

              <p>
                Laboratories and computing facilities are well-equipped, and the central library provides extensive digital and physical resources.
              </p>

              <p>
                Co-curricular and extracurricular activities, along with industrial visits, provide hands-on experience and skill development.
              </p>

              <p>
                The Industry Institute Partnership Cell supports internships and collaboration with industries.
                The institute also has NCC Army and Navy wings actively participating at state and national levels.
              </p>

            </CardContent>
          </Card>

          {/* ADMIN TABLE */}
          <Card className="shadow-lg border-0">
            <CardContent className="p-6">

              <h2 className="text-xl font-bold text-orange-500 mb-4">
                Administration
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-orange-500 text-white">
                    <tr>
                      <th className="text-left p-3">Position</th>
                      <th className="text-left p-3">Name</th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    <tr className="border-b">
                      <td className="p-3">Chairman</td>
                      <td className="p-3">Dr. Y. Venkatarami Reddy</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-3">Correspondent</td>
                      <td className="p-3">Sri Nedurumalli Ram Kumar</td>
                    </tr>

                    <tr>
                      <td className="p-3">Director</td>
                      <td className="p-3">Dr. V. Vijaya Kumar Reddy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  )
}