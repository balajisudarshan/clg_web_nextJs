import { Table, TableHead, TableHeader ,TableBody,TableCell,TableRow} from '@/components/ui/table'
import React from 'react'
// 

// 

// 

// 

// 

// 

// 
const syllabus = [
    {
        sno:1,
        regulation:"R23",
        Links:[
            {name:"I B.Tech", link:"https://nbkrist.org/Syllabus/R23_First_B.Tech_Syllabi.pdf"},
            {name:"CSE,CSE(DS,AI&ML),IT, AI&DS II B.Tech I SEM",link:"https://drive.google.com/drive/folders/1-GckcHcGsyo7MnZqYUpeWI_uxKnf9smi"},
            {name:"CSE II B.Tech II SEM",link:"https://drive.google.com/drive/folders/1fPTENU02R96Uxtmzg3MbO7KEGjHZfRq4?usp=sharing"},
            {name:"CSE(DS) II B.Tech II SEM",link:"https://drive.google.com/drive/folders/18GwYTpujjbXr7mKOEkTvo4eDgkQMt78P"},
            {name:"CSE(AI&ML) II B.Tech II SEM",link:"https://drive.google.com/drive/folders/1Kun0PiWt5fU_TjsMPRqk9epZwMPQb1w3"},
            {name:"IT II B.Tech II SEM",link:"https://drive.google.com/drive/folders/1OIUEDhsATqStpztRwJvv5qZfVCjrIo22"},
            {name:"AI&DS II B.Tech II SEM",link:"https://drive.google.com/drive/folders/1kyX0rRokDuv_iwTCfcSDRhfDoO9lJ2jA?usp=sharing"},
            {name:"R-23 Scheme(CSE,IT and Al&DS)",link:"https://drive.google.com/drive/folders/1s1kwIGN66iEY0EnyMdQ-DNZgQBOhb4w6?usp=sharing"},
            {name:"ECE-II-I SEM and II-SEM",link:"https://nbkrist.org/Syllabus/II%20B.Tech(R-23)ECESyllabus26-09.pdf"},
            {name:"Mechanical-Il-I SEM and II-SEM",link:"https://nbkrist.org/Syllabus/R23IIYearMechancial.pdf"}
        ]
    },
    {
        sno:2,
        regulation:"R20",
        Links:[
            {name:"CSE", link:"https://nbkrist.org/Syllabus/R20(a)_CSE-16-05-24.pdf"},
            {name:"IT",link:"https://nbkrist.org/Syllabus/R20(a)_IT-16-05-24.pdf"},
            {name:"AI&DS",link:"https://nbkrist.org/Syllabus/R20(a)_AI&DS-16-05-24.pdf"},
            {name:"CE",link:"https://nbkrist.org/Syllabus/CE_SYLLABUS_R20(09-02-23).pdf"},
            {name:"EEE",link:"https://nbkrist.org/Syllabus/R20EEESYLLABUS(26-12-22).pdf"},
            {name:"ECE",link:"https://nbkrist.org/Syllabus/R20ECE(17-11-22).pdf"},
            {name:"ME",link:"https://nbkrist.org/Syllabus/R-20-Mec.pdf"},
        ]
    },
    {
        sno:3,
        regulation:"R19",
        Links:[
            {name:"CSE", link:"https://nbkrist.org/Syllabus/R19_CSE%20(Full%20&%20Final%20Document).pdf"},
            {name:"IT",link:"https://nbkrist.org/Syllabus/R19_IT%20(Full%20&%20Final%20Document).pdf"},
            {name:"CE",link:"https://nbkrist.org/Syllabus/R19CE(20).pdf"},
            {name:"EEE",link:"https://nbkrist.org/Syllabus/R19EEESYLLABUS(26-12-22).pdf"},
            {name:"ECE",link:"http://nbkrist.org/Syllabus/R19ECE(27-01-21).pdf"},
            {name:"ME",link:"https://nbkrist.org/Syllabus/R-19-Mec.pdf"},
        ]
    }
]

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20">

      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-10">
        Syllabus
      </h1>

      <div className="max-w-6xl mx-auto space-y-6">

        {syllabus.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5"
          >

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Regulation <span className="text-orange-500">{item.regulation}</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[600px]">

                <Table className="w-full border border-gray-200 rounded-lg overflow-hidden">

                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead className="px-4 py-2">SNO</TableHead>
                      <TableHead className="px-4 py-2">Course / Branch</TableHead>
                      <TableHead className="px-4 py-2 text-right">Download</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {item.Links.map((link, index) => (
                      <TableRow
                        key={index}
                        className="border-t hover:bg-gray-50 transition"
                      >

                        <TableCell className="px-4 py-3">
                          {index + 1}
                        </TableCell>

                        <TableCell className="px-4 py-3 text-gray-800">
                          {link.name}
                        </TableCell>

                        <TableCell className="px-4 py-3 text-right">
                          <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
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

    </div>
  )
}

export default page