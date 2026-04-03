import React from "react";
import { BookOpen, Briefcase, Trophy } from "lucide-react";

const Explore = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-6">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-10 flex flex-col items-center gap-3">
        <p className="tracking-[0.25em] font-extrabold text-orange-400 uppercase text-sm">
          Explore
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Explore NBKRIST
        </h2>

        <p className="text-sm md:text-xl text-gray-700">
          A campus built for growth — inside the classroom and far beyond it.
        </p>

        <div className="w-16 h-1 bg-orange-400"></div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">

        {/* LEFT BIG CARD */}
        <div className="group relative md:row-span-2 h-64 md:h-auto rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
          
          <div className="absolute inset-0 bg-[url('/images/gallery/libr.png')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
          
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>

          <div className="relative z-10 p-4 md:p-6 flex flex-col justify-end h-full text-white">
            <div className="bg-orange-400 p-2 md:p-3 w-fit rounded-md mb-3">
              <BookOpen size={18} />
            </div>

            <h2 className="text-base md:text-xl font-bold">
              Central Library
            </h2>

            <p className="text-xs md:text-sm text-gray-200">
              Over 44,197 books and a rich digital collection.
            </p>

            <p className="text-orange-400 mt-2 text-sm md:text-base font-semibold">
              Visit Library →
            </p>
          </div>
        </div>

        {/* TOP MIDDLE */}
        <div className="group relative h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
          
          <div className="absolute inset-0 bg-[url('/images/gallery/2cse-min.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
          
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>

          <div className="relative z-10 p-4 md:p-6 flex flex-col justify-end h-full text-white">
            <div className="bg-orange-400 p-2 md:p-3 w-fit rounded-md mb-3">
              <Briefcase size={18} />
            </div>

            <h2 className="text-base md:text-lg font-bold">
              Placements & Internships
            </h2>

            <p className="text-xs md:text-sm text-gray-200">
              Connects students with 100+ companies.
            </p>

            <p className="text-orange-400 mt-2 text-sm">
              Placement Cell →
            </p>
          </div>
        </div>

        {/* TOP RIGHT */}
        <div className="transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl bg-orange-400 h-64 md:h-72 lg:h-80 rounded-xl flex flex-col justify-center items-center text-center p-4 md:p-6">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            100+
          </h1>

          <p className="tracking-widest text-xs md:text-sm text-black mt-2">
            PLACEMENT PARTNERS
          </p>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="group relative md:col-span-2 h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
          
          <div className="absolute inset-0 bg-[url('/images/gallery/SLVS_959.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
          
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>

          <div className="relative z-10 p-4 md:p-6 flex flex-col justify-end h-full text-white">
            <div className="bg-orange-400 p-2 md:p-3 w-fit rounded-md mb-3">
              <Trophy size={18} />
            </div>

            <h2 className="text-base md:text-lg font-bold">
              Sports & Club Activities
            </h2>

            <p className="text-xs md:text-sm text-gray-200">
              NCC, NSS, coding clubs, cultural societies and more.
            </p>

            <p className="text-orange-400 mt-2 text-sm">
              Sports & Clubs →
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Explore;