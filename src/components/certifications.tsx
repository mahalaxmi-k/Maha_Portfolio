import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

type Side = "left" | "right";

interface SubCertification {
  title: string;
  institution: string;
  date: string;
  note?: string;
  credentialUrl?: string;
  file?: string;
  side?: Side; // allow per-item side override
}

interface Category {
  category: string;
  side?: Side; // default side for whole category
  items: SubCertification[];
}

const certifications: Category[] = [
  {
    category: "Data & Machine Learning",
    items: [
      {
        title: "Exploratory Data Analysis for Machine Learning",
        institution: "IBM - Coursera",
        date: "19 Sep 2023",
        note: "Completed with Honors — EDA techniques for ML-ready datasets",
        credentialUrl: "https://coursera.org/verify/3UVAR2E7TB5T",
        side: "left", // stays on left
      },
      
      {
        title: "Data Science Essentials",
        institution: "Cisco Networking Academy",
        date: "19 July 2025",
        note: "Built skills in data analysis and data-driven decision-making",
        file: "/images/certs/Introduction_to_Data_Science_certificate(CISCO).pdf",
        side: "right", // ✅ only this one moves to right
      },
    ],
  },
  {
    category: "Data Visualization & Analytics",
    items: [
      {
        title: "Data Visualization: Empowering Business with Effective Insights",
        institution: "Forage",
        date: "July 2025",
        note: "Framed business scenarios and created effective visuals",
        file: "/images/certs/Forage_Certificate.pdf",
      },
      {
        title: "Data Analytics Job Simulation",
        institution: "Deloitte - Forage",
        date: "July 2025",
        note: "Worked on data analysis & forensic technology tasks",
        file: "/images/certs/Deloitte_certificate_(FORAGE).pdf",
      },
    ],
  },
  {
    category: "Database",
    side: "left",
    items: [
      {
        title: "Database Management Essentials",
        institution: "University of Colorado (Coursera)",
        date: "1 Sep 2023",
        note: "Completed with Honors — relational design and SQL basics",
        credentialUrl: "https://coursera.org/verify/SXUA8JLEEWAQ",
      },
    ],
  },
  {
    category: "Cloud",
    side: "right",
    items: [
      {
        title: "Solutions Architecture Job Simulation",
        institution: "AWS - Forage",
        date: "July 2025",
        note: "Designed simple, scalable hosting architectures",
        file: "/images/certs/AWS_(Forage).pdf",
      },
    ],
  },
  {
    category: "Software Engineering",
    side: "left",
    items: [
      {
        title: "Software Engineering Job Simulation",
        institution: "Accenture - Forage",
        date: "July 2025",
        note: "Completed practical tasks in Architecture, Security, Programming, Testing & Agile",
        file: "/images/certs/Accenture_FORAGE.pdf",
        side: "left",
      },
    ],
  },
  {
    category: "Web Development",
    side: "right", // right
    items: [
      {
        title: "Introduction to Web Development",
        institution: "University of California, Davis (Coursera)",
        date: "27 Mar 2024",
        note: "Learned HTML, CSS, and JavaScript fundamentals for modern web design",
        credentialUrl: "https://coursera.org/verify/LHSDTR2XGYBN",
      },
    ],
  },
  {
    category: "Java",
    // heading left; alternate left → right → left
    items: [
      {
        title: "Core Java Specialization",
        institution: "Coursera",
        date: "Apr 2023",
        note: "Mastered OOP concepts and Java libraries through hands-on projects",
        credentialUrl: "https://coursera.org/verify/specialization/TYZQXQPY8P3Z",
        side: "left",
      },
      {
        title: "Object Oriented Programming in Java",
        institution: "University of California, San Diego (Coursera)",
        date: "11 Apr 2023",
        note: "Completed with distinction, focusing on object-oriented design and development",
        credentialUrl: "https://coursera.org/verify/M3XTN4FGJHFZ",
        side: "right",
      },
      {
        title: "Java Class Library",
        institution: "LearnQuest - Coursera",
        date: "17 Apr 2023",
        note: "Explored Java packages and built applications using core libraries",
        credentialUrl: "https://coursera.org/verify/568R4CYB26F2",
        side: "left",
      },
    ],
  },
];

const isPdf = (path?: string | null) =>
  path?.toLowerCase().endsWith(".pdf") ?? false;

const CertificationsTimeline: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="flex flex-col items-center py-16 px-6 sm:px-12 lg:px-32 bg-white"
    >
      <h2
        id="certifications-heading"
        className="text-4xl lg:text-6xl font-bold text-left w-full max-w-5xl mb-8"
      >
        My Certifications
      </h2>

      <div className="space-y-20 w-full max-w-5xl">
        {certifications.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
            className="w-full"
          >
            {/* Category Title Alignment */}
            <div className={`w-full mb-8`}>
              {group.side === "right" ? (
                <div className="flex justify-end">
                  <h3 className="text-3xl font-bold text-right text-black border-b-2 border-black inline-block px-4">
                    {group.category}
                  </h3>
                </div>
              ) : (
                <div className="flex justify-start">
                  <h3 className="text-3xl font-bold text-left text-black border-b-2 border-black inline-block px-4">
                    {group.category}
                  </h3>
                </div>
              )}
            </div>

            {/* Timeline items */}
            <div
              className="relative w-full max-w-4xl mx-auto"
              style={{ minHeight: group.items.length * 220 }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-black h-full" />

              {group.items.map((cert, index) => {
                const isLeft = cert.side
                  ? cert.side === "left"
                  : group.side
                  ? group.side === "left"
                  : index % 2 === 0;

                return (
                  <motion.div
                    key={cert.title + index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.06,
                    }}
                    className="relative flex items-center w-full mb-16"
                  >
                    {/* Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-black rounded-full" />

                    {/* Card positioning */}
                    <div
                      className={`w-[48%] ${
                        isLeft ? "mr-auto pr-8" : "ml-auto pl-8"
                      }`}
                    >
                      <div className="bg-white p-6 rounded-lg shadow-lg border border-black">
                        <h4 className="text-xl font-semibold text-black leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-black/80 text-sm mt-1">
                          {cert.institution}
                        </p>

                        <div className="flex items-center text-black/70 text-sm mt-3">
                          <FaCalendarAlt className="mr-2" />{" "}
                          <span>{cert.date}</span>
                        </div>

                        {cert.note && (
                          <p className="text-black/80 text-sm mt-3">
                            {cert.note}
                          </p>
                        )}

                        {cert.credentialUrl ? (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 text-sm underline block"
                          >
                            Verify credential
                          </a>
                        ) : cert.file ? (
                          <div className="mt-4 text-sm">
                            <button
                              onClick={() => setSelectedFile(cert.file!)}
                              className="underline mr-4"
                            >
                              Click here to view certificate
                            </button>
                            {isPdf(cert.file) && (
                              <a
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-gray-600"
                              >
                                Open in new tab
                              </a>
                            )}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedFile && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedFile(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {isPdf(selectedFile) ? (
              <iframe
                src={encodeURI(selectedFile)}
                title="Certificate PDF"
                className="w-full h-[80vh] bg-white rounded-lg shadow-xl"
              />
            ) : (
              <img
                src={selectedFile}
                alt="Certificate Preview"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            )}
            <button
              onClick={() => setSelectedFile(null)}
              className="absolute top-2 right-4 text-white text-3xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsTimeline;
