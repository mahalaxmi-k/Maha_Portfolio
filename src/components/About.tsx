import React from "react";
import { motion } from "framer-motion";
import { IoCloudDownloadOutline } from "react-icons/io5";

const About = () => {
  const handleDownload = () => {
    const pdfUrl = "assets/K.MahalaxmiResume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row justify-center items-center bg-white min-h-screen px-6 sm:px-12 lg:px-32 py-16 text-black"
      id="About"
    >
      {/* About Me Text */}
      <motion.div
        initial={{ transform: "rotate(-90deg)", opacity: 0, x: -100 }}
        whileInView={{ transform: "rotate(-90deg)", opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        style={{ whiteSpace: "nowrap" }}
        className="hidden lg:block text-6xl md:text-8xl font-bold text-gray-900"
      >
        About Me
      </motion.div>

      {/* About Me Text for Small Screens */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="lg:hidden text-6xl md:text-7xl font-bold text-gray-900 mb-6"
      >
        About Me
      </motion.div>

      {/* About Content Section */}
      <div className="w-full lg:w-2/3 h-full flex flex-col gap-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap justify-evenly mt-4 lg:justify-start lg:gap-9"
        >
          {[
            {
              icon: "🚀",
              value: "2+",
              label: "Projects",
              color: "bg-yellow-500 text-yellow-600",
            },
            {
              icon: "💻",
              value: "50+",
              label: "LeetCode",
              color: "bg-blue-500 text-blue-700",
              link: "https://leetcode.com/u/Maha_2025/",
            },
            {
              icon: "📜",
              value: "6+",
              label: "Certificates",
              color: "bg-purple-500 text-purple-700",
              link: "https://bit.ly/4kDxr7P",
            },
            {
              icon: "🏆",
              value: "3+",
              label: "Hackathons",
              color: "bg-green-500 text-green-700",
              link: "https://bit.ly/4kDxr7P",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6 + index * 0.2,
                ease: "easeOut",
              }}
              className="text-center flex flex-col items-center"
            >
              <a
                href={item.link || "#"}
                target={item.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                <div
                  className={`w-16 h-16 ${item.color} text-white text-4xl font-bold flex items-center justify-center rounded-full shadow-lg`}
                >
                  {item.icon}
                </div>
              </a>
              <h2 className={`text-3xl font-bold ${item.color.split(" ")[1]} mt-2`}>
                {item.value}
              </h2>
              <p className="text-base text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left md:text-left"
        >
          I'm <span className="font-bold">Mahalaxmi</span>, skilled in Python,
          Java, and ML tools like YOLOv8 and TensorFlow. Currently pursuing my
          B.Tech in Computer Science & Engineering at
          <span className="font-semibold"> Woxsen University</span>. I have built
          real-world solutions through projects and hackathons. Eager to innovate
          with emerging tech.
        </motion.p>

        {/* Skills & Details */}
        <motion.ul
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left"
        >
          <li>💻 Web Development: Next.js, TypeScript, Tailwind CSS, JavaScript, HTML/CSS</li>
          <li>📌 Problem Solving (Data Structures & Algorithms) <span className="font-bold">Python</span></li>
          <li>📊 Data Science & Analytics: Python, R, Pandas, NumPy, Scikit-learn, Matplotlib</li>
          <li>🤖 AI & Machine Learning: TensorFlow, PyTorch, OpenCV, NLP (Transformers, BERT, IndicBERT)</li>
          <li>🗄️ Databases: MySQL, MongoDB</li>
          <li>⚙️ Tools & Platforms: Git, GitHub, Streamlit, VS Code</li>
          <li>🎓 CGPA: <span className="font-semibold">3.35/4</span></li>
        </motion.ul>

        {/* Peer Learning Mentorship Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="p-6 border-2 border-gray-300 rounded-lg shadow-md bg-gray-50"
>
          <h3 className="text-xl font-bold text-gray-900 mb-2">🎯 Peer Learning Mentor</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            • <span className="font-semibold">3rd Year (2nd Sem):</span> Mentored 1st-year peers in{" "}
            <span className="font-bold">DSA (Python)</span>.<br />
            • <span className="font-semibold">4th Year (1st Sem):</span> Mentoring 3rd-year peers in{" "}
            <span className="font-bold">Data Analytics & Visualization</span>.
          </p>

          {/* Certificate Link */}
          <a
            href="https://drive.google.com/drive/u/2/folders/18UfQReuprteOzi6UyNV1Os1BdWWYe0ek" // 🔗 replace with your actual certificate link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white transition duration-300"
  >
            View Certificate
          </a>
        </motion.div>

        {/* Download CV Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="w-48 mx-auto md:mx-0 text-center px-6 py-3 border-2 border-black text-black flex items-center gap-2 rounded-lg hover:bg-black hover:text-white duration-300"
          onClick={handleDownload}
        >
          Download CV <IoCloudDownloadOutline size={24} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default About;
