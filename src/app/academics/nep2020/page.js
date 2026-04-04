"use client"

import React from "react"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

const faculty = [
  {
    name: "Dr. D. Subba Reddy",
    role: "Professor & Controller of Examinations",
    position: "Nodal Officer",
    contact: "drdsreddy.01@gmail.com",
  },
  {
    name: "Dr. Durbha Srinivas",
    role: "Professor & HOD-CIVIL",
    position: "Member",
    contact: "drdurbha@nbkrist.org",
  },
  {
    name: "Dr. A Raja Sekhar Reddy",
    role: "Professor & HOD-CSE",
    position: "Member",
    contact: "drarsreddy@nbkrist.org",
  },
  {
    name:"Dr. Narayana Rao Appini",
    role:"Professor & HOD-IT | AI&DS",
    position:"Member",
    contact:"narayanaraoappini@nbkrist.org"
  },
  {
    name:"Dr.G.HARINATHA REDDY",
    role:"Professor & HOD-ECE",
    position:"Member",
    contact:"reddyghr@nbkrist.org"
  },
  {
    name:"Dr. S. Suresh Reddy",
    role:"Professor & HOD-EEE",
    position:"Member",
    contact:"sanna_suresh@nbkrist.org"
  },
  {
    name:"Dr.Ch.R.Vikram Kumar",
    role:"Professor & HOD-MECHANICAL",
    position:"Member",
    contact:"mehod@nbkrist.org"
  }
]

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20">

      <div className="max-w-5xl mx-auto space-y-8">

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
          NEP 2020 <span className="text-orange-500">Initiatives</span>
        </h1>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            The Academic Bank of Credits (ABC) is a digital platform developed under DigiLocker
            that stores academic credits earned by students. It enables flexible learning pathways
            and credit transfer across institutions.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Objectives of ABC
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Promote interdisciplinarity and student-centric education.</li>
            <li>Help students choose courses based on interests and aptitude.</li>
            <li>Allow flexible learning pace and cost management.</li>
            <li>Enable customization of degrees and specializations.</li>
            <li>Support multiple entry and exit options.</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Benefits of ABC
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Freedom to select courses and academic paths.</li>
            <li>Option to exit and re-enter education with credits.</li>
            <li>Mobility between institutions.</li>
            <li>Track credits digitally via DigiLocker.</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            ABC Implementation Team
          </h2>

          <div className="overflow-x-auto">
            <div className="min-w-[600px]">

              <Table className="w-full border border-gray-200 rounded-lg overflow-hidden">

                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead>Name</TableHead>
                    <TableHead>Designation</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Contact</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {faculty.map((f, i) => (
                    <TableRow key={i} className="border-t hover:bg-gray-50 transition">

                      <TableCell className="font-medium text-gray-800">
                        {f.name}
                      </TableCell>

                      <TableCell className="text-gray-700">
                        {f.role}
                      </TableCell>

                      <TableCell className="text-orange-500 font-medium">
                        {f.position}
                      </TableCell>

                      <TableCell className="text-gray-600 text-sm">
                        {f.contact}
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>

              </Table>

            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            For More Information
          </h2>

          <div className="flex flex-col gap-2 text-gray-700">
            <a href="#" className="hover:text-orange-500 transition">
              1. User Manual for ABC
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              2. How to Create ABC ID
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              3. Video Tutorial
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              4. FAQ's
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}