import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

interface Qualification {
  title: string;
  institution: string;
  date: string;
  percentage: string;
}

const qualifications: Qualification[] = [
  { title: "Class 10th (ICSE)", institution: "Sherwood Public School", date: "2009 - 2020", percentage: "88%" },
  { title: "Class 12th (ISC)", institution: "Sherwood Public School", date: "2020 - 2022", percentage: "80%" },
  { title: "B.Tech (CSE - DS)", institution: "Woxsen University", date: "2022 - 2026", percentage: "3.35 / 4 CGPA" },
];

const QualificationTimeline: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-16 px-6 sm:px-12 lg:px-32 bg-white" id="Qualification">
      <h2 className="text-4xl lg:text-6xl font-bold text-center text-black mb-12">
        My Qualifications
      </h2>

      <div className="relative w-full max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-black h-full"></div>

        {/* Qualification Items */}
        {qualifications.map((qual, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className="relative flex items-center w-full mb-12"
          >
            {/* Dot Indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-black rounded-full"></div>

            {/* Content Box - Adjusted for Alignment */}
            <div className={`w-[45%] ${index % 2 === 0 ? "mr-auto text-left" : "ml-auto text-left"}`}>
              <div className="bg-white p-5 rounded-lg shadow-lg border border-black">
                <h3 className="text-xl font-bold text-black">{qual.title}</h3>
                <p className="text-black/80 text-sm">{qual.institution}</p>
                <div className="flex items-center text-black/70 text-sm mt-2">
                  <FaCalendarAlt className="mr-2" /> {qual.date}
                </div>
                <div className="flex items-center">
                    <p className="text-black/80 text-sm mt-2">Score : {qual.percentage}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QualificationTimeline;
