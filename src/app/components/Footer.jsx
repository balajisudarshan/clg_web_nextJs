import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white px-6 md:px-16 py-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT - LOGO + INFO */}
        <div className="flex flex-col gap-4">
          <img src="/images/Emb.jpg" className="w-16" />

          <h3 className="font-bold text-lg">
            NBKR Institute of Science & Technology
          </h3>

          <p className="text-gray-400 text-sm">
            Vidyanagar, Nellore District, Andhra Pradesh – 524413
          </p>

          <p className="text-gray-400 text-sm">
            Affiliated to JNTUA · NAAC 'A' Grade · NBA Accredited · Autonomous
          </p>

          {/* icons row (optional logos) */}
          <div className="flex gap-3 mt-2">
            <img src="/images/extras/naac.jpg" className="w-8" />
            <img src="/images/extras/nba.jpg" className="w-8" />
            <img src="/images/extras/isoicon.png" className="w-8" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-bold mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              "Admissions 2026",
              "Academic Programs",
              "Placement Cell",
              "Central Library",
              "IQAC",
              "RTI",
              "Innovation & Incubation",
              "Exam Notifications",
              "Careers",
              "Grievance Redressal",
              "eNews-Letter",
              "NIRF"
            ].map((item, i) => (
              <li key={i} className="hover:text-orange-400 cursor-pointer transition">
                › {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CAMPUS LIFE */}
        <div>
          <h4 className="font-bold mb-4">CAMPUS LIFE</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              "Campus View",
              "Aerial View",
              "Sports",
              "Coding Club",
              "Yoga Club",
              "Cultural Club",
              "Literary Club",
              "NCC – Army",
              "NCC – Naval",
              "NSS",
              "Transportation",
              "Hostel & Dining"
            ].map((item, i) => (
              <li key={i} className="hover:text-orange-400 cursor-pointer transition">
                › {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-bold mb-4">CONTACT US</h4>

          <div className="space-y-4 text-gray-400 text-sm">

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-orange-400" />
              <span>+91 8985382247</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-orange-400" />
              <span>+91 8985159547</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-orange-400" />
              <span>ist@nbkrist.org</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-orange-400" />
              <span>verify@nbkrist.org</span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-orange-400 mt-1" />
              <span>
                Vidyanagar, Nellore Dist., Andhra Pradesh – 524413
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © 2026 NBKRIST. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;