"use client"

import React from 'react'
import { Separator } from '@/components/ui/separator'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const intake = [
    { branch: 'Civil Engineering', intake: 60 },
    { branch: 'Mechanical Engineering', intake: 60 },
    { branch: 'Electrical & Electronics Engineering', intake: 60 },
    { branch: 'Electronics & Communication Engineering', intake: 240 },
    { branch: 'Artificial Intelligence & Data Science', intake: 240 },
    { branch: 'Computer Science & Engineering', intake: 720 },
]
const m_intake = [
    {branch:"VLSI System Design(ECE)", intake:18},
    {branch:"Robotics and AI(Mechanical)",intake:18}
]

const page = () => {
    return (
        <div className='min-h-screen pb-10 bg-gray-100'>

            <div className='md:px-20 px-5 pt-8 flex flex-col items-center gap-4 md:text-center text-justify'>
                <h1 className='text-orange-500 font-semibold text-2xl uppercase'>Academic Programs</h1>
                <Separator className='w-16 bg-gray-300' />
                <p className='text-gray-700 max-w-4xl'>
                    NBKR Institute of Science & Technology offers 4 year Undergraduate Programme in Engineering (B.Tech) and 2 year Postgraduate Programme in Engineering (M.Tech). The admission into the B.Tech courses except Category-B Seats is through a State-Level Entrance Test called Engineering, Agriculture and Medical Common Entrance Test (EAPCET).
                </p>
                <p className='text-gray-700 max-w-4xl'>
                    70% seats are allotted by the Convenor (EAPCET) and the remaining 30% are filled based on ranks obtained in JEE Mains, EAPCET or Intermediate marks.
                </p>
                <p className='text-gray-700 font-medium'>
                    Sanctioned Intake for Academic Year 2025 - 2026 : 1380
                </p>
            </div>

            <div className='flex flex-col md:flex-row gap-10 mx-5 md:mx-20 mt-10'>

                <div className='flex-1 flex flex-col gap-6'>

                    <div className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm'>
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow className="bg-gray-100">
                                    <TableHead className="text-gray-700 font-semibold py-3">
                                        Programs Offered
                                    </TableHead>
                                    <TableHead className="text-gray-700 font-semibold py-3 text-right">
                                        Fee
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                <TableRow className="border-t hover:bg-gray-50 transition">
                                    <TableCell className="text-gray-800 font-medium">
                                        B.Tech
                                    </TableCell>
                                    <TableCell className="text-right text-orange-500 font-semibold">
                                        ₹46,400
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <p className='text-gray-700 font-medium'>For More Details Please Contact:</p>

                    <div className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm'>
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow className='bg-gray-100'>
                                    <TableHead className='text-center font-semibold'>Name</TableHead>
                                    <TableHead className='text-center font-semibold'>Responsibility</TableHead>
                                    <TableHead className='text-center font-semibold'>Mobile No</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                <TableRow className="border-t">
                                    <TableCell className='text-gray-800'>
                                        Dr. C. Raveendra Reddy
                                        <div className='text-sm text-gray-500'>Professor & HOD</div>
                                    </TableCell>
                                    <TableCell className='text-gray-700'>
                                        Admissions Incharge
                                    </TableCell>
                                    <TableCell className='text-gray-700'>
                                        94415 72755, 9440765118, 9440243010
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                </div>

                <div className='flex-1 flex flex-col gap-6'>

                    <div className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm'>
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow className="bg-gray-100">
                                    <TableHead colSpan={2} className="text-gray-800 font-semibold py-3">
                                        Union Bank of India, Vidyanagar Education Complex (1160)
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                <TableRow className="border-t">
                                    <TableCell className="text-gray-600 font-medium w-1/2">
                                        Account No:
                                    </TableCell>
                                    <TableCell className="text-gray-800 font-semibold">
                                        116010011000353
                                    </TableCell>
                                </TableRow>

                                <TableRow className="border-t bg-gray-50">
                                    <TableCell className="text-gray-600 font-medium">
                                        Name:
                                    </TableCell>
                                    <TableCell className="text-gray-800 font-semibold">
                                        DIRECTOR NBKRIST
                                    </TableCell>
                                </TableRow>

                                <TableRow className="border-t">
                                    <TableCell className="text-gray-600 font-medium">
                                        IFSC:
                                    </TableCell>
                                    <TableCell className="text-orange-500 font-semibold">
                                        UBIN0811602
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm'>
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow className="bg-gray-100">
                                    <TableHead colSpan={2} className="text-gray-800 font-semibold py-3">
                                        State Bank of India
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                <TableRow className="border-t">
                                    <TableCell className="text-gray-600 font-medium w-1/2">
                                        Account No:
                                    </TableCell>
                                    <TableCell className="text-gray-800 font-semibold">
                                        33362532008
                                    </TableCell>
                                </TableRow>

                                <TableRow className="border-t bg-gray-50">
                                    <TableCell className="text-gray-600 font-medium">
                                        Name:
                                    </TableCell>
                                    <TableCell className="text-gray-800 font-semibold">
                                        DIRECTOR NBKRIST
                                    </TableCell>
                                </TableRow>

                                <TableRow className="border-t">
                                    <TableCell className="text-gray-600 font-medium">
                                        IFSC:
                                    </TableCell>
                                    <TableCell className="text-orange-500 font-semibold">
                                        SBIN0002811
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                </div>

            </div>

            <div className='w-[90%] flex items-center justify-center mx-auto mt-10'>
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[500px] bg-white border border-gray-200 rounded-xl shadow-sm">

                        <Table className="w-full">

                            <TableHeader>
                                <TableRow className="bg-gray-100">
                                    <TableHead colSpan={2} className="text-center text-gray-800 font-semibold py-3">
                                        B.Tech Intake
                                    </TableHead>
                                </TableRow>

                                <TableRow className="bg-gray-50">
                                    <TableHead className="text-gray-700 font-medium text-left px-4 py-2">
                                        Department
                                    </TableHead>
                                    <TableHead className="text-gray-700 font-medium text-right px-4 py-2">
                                        Intake
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {intake.map((item, index) => (
                                    <TableRow key={index} className="border-t hover:bg-gray-50 transition">
                                        <TableCell className="px-4 py-3 text-gray-800">
                                            {item.branch}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-right text-orange-500 font-semibold">
                                            {item.intake}
                                        </TableCell>
                                    </TableRow>
                                ))}


                                

                            </TableBody>

                        </Table>

                    </div>
                </div>
                
            </div>

            <div className='w-[90%] flex items-center justify-center mx-auto mt-10'>
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[500px] bg-white border border-gray-200 rounded-xl shadow-sm">

                        <Table className="w-full">

                            <TableHeader>
                                <TableRow className="bg-gray-100">
                                    <TableHead colSpan={2} className="text-center text-gray-800 font-semibold py-3">
                                        M.Tech Intake
                                    </TableHead>
                                </TableRow>

                                <TableRow className="bg-gray-50">
                                    <TableHead className="text-gray-700 font-medium text-left px-4 py-2">
                                        Department
                                    </TableHead>
                                    <TableHead className="text-gray-700 font-medium text-right px-4 py-2">
                                        Intake
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {m_intake.map((item, index) => (
                                    <TableRow key={index} className="border-t hover:bg-gray-50 transition">
                                        <TableCell className="px-4 py-3 text-gray-800">
                                            {item.branch}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-right text-orange-500 font-semibold">
                                            {item.intake}
                                        </TableCell>
                                    </TableRow>
                                ))}


                                

                            </TableBody>

                        </Table>

                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default page