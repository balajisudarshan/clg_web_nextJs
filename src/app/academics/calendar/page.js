"use client"

import React from "react"
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table"

const data = [
  {
    year: "2025-2026",
    sems: [
      {
        title: "I-SEM",
        rows: [
          { sno: 1, name: "I-B.Tech", link: "/files/2025-26/i-btech.pdf" },
          { sno: 2, name: "II, III & IV B.Tech", link: "/files/2025-26/ii-iv-btech.pdf" },
        ],
      },
    ],
  },
  {
    year: "2024-2025",
    sems: [
      {
        title: "I-SEM",
        rows: [
          { sno: 1, name: "II, III & IV B.Tech", link: "/files/2024-25/ii-iv.pdf" },
          { sno: 2, name: "I-B.Tech", link: "/files/2024-25/i-btech.pdf" },
        ],
      },
      {
        title: "II-SEM",
        rows: [
          { sno: 1, name: "I-B.Tech", link: "/files/2024-25/i-sem.pdf" },
          { sno: 2, name: "II & III B.Tech", link: "/files/2024-25/ii-iii.pdf" },
          { sno: 3, name: "IV B.Tech", link: "/files/2024-25/iv.pdf" },
        ],
      },
    ],
  },

  {
    year: "2023-2024",
    sems: [
      {
        title: "I-SEM",
        rows: [
          { sno: 1, name: "I-B.Tech", link: "/files/2024-25/i-btech.pdf" },

          { sno: 2, name: "II, III & IV B.Tech", link: "/files/2024-25/ii-iv.pdf" },
        ],
      },
      {
        title: "II-SEM",
        rows: [
          { sno: 1, name: "II & III B.Tech", link: "/files/2024-25/ii-iii.pdf" },
          { sno: 2, name: "IV B.Tech", link: "/files/2024-25/iv.pdf" },

          { sno: 3, name: "I-B.Tech", link: "/files/2024-25/i-sem.pdf" },
        ],
      },
    ],
  },
]

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20">

      <div className="max-w-6xl mx-auto space-y-10">

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
          Academic <span className="text-orange-500">Calendar</span>
        </h1>

        {data.map((yearBlock, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 space-y-5">

            <h2 className="text-xl font-semibold text-gray-700">
              {yearBlock.year}
            </h2>

            {yearBlock.sems.map((sem, j) => (
              <div key={j} className="space-y-2">

                <h3 className="text-green-600 font-semibold text-lg">
                  {sem.title}
                </h3>

                <div className="overflow-x-auto">
                  <div className="min-w-[500px]">

                    <Table className="w-full border border-gray-200 rounded-lg overflow-hidden">

                      <TableHeader>
                        <TableRow className="bg-gray-100">
                          <TableHead className="px-4 py-2">SNO</TableHead>
                          <TableHead className="px-4 py-2">Year & Sem</TableHead>
                          <TableHead className="px-4 py-2 text-right">Download</TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        {sem.rows.map((row, k) => (
                          <TableRow key={k} className="border-t hover:bg-gray-50 transition">

                            <TableCell className="px-4 py-3">
                              {row.sno}
                            </TableCell>

                            <TableCell className="px-4 py-3 text-gray-800">
                              {row.name}
                            </TableCell>

                            <TableCell className="px-4 py-3 text-right">
                              <a
                                href={row.link}
                                className="text-orange-500 font-medium hover:underline"
                              >
                                Download
                              </a>
                            </TableCell>

                          </TableRow>
                        ))}
                      </TableBody>

                    </Table>

                  </div>
                </div>

              </div>
            ))}

          </div>
        ))}

      </div>

    </div>
  )
}

export default page