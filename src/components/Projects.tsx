import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [

  {
    image: "./assets/projects/portfolio pic.png",
    name: "Personal Portfolio Website",
    description: "A responsive portfolio website showcasing myself.",
    features: [
      "Implemented smooth navigation and project carousels using Framer Motion and Swiper.",
      "Deployed via Vercel with CI/CD integration for fast, reliable hosting.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveLink: "https://<your-portfolio-website-link>.vercel.app/", // 🔗 Add your live portfolio link here
    repoLink: "https://github.com/mahalaxmi-k/<your-portfolio-repo>", // 🔗 Add GitHub repo link here
    owner: "Mahalaxmi",
  },

  {
    image: "./assets/projects/face_detection.jpg",
    name: "Face Detection & Segregation (Supervised Learning)",
    description: "Classification and organization system using labeled reference images.",
    features: [
      "Trained a neural network with MTCNN and FaceNet embeddings for accurate face recognition.",
      "Automatically sorted new images into organized folders by person and group type.",
      "Visualized results with bar charts summarizing solo, group, and blurry image counts."
    ],
    techStack: ["Python", "PyTorch", "facenet-pytorch", "scikit-learn", "OpenCV", "Pandas", "NumPy"],
    repoLink: "https://github.com/mahalaxmi-k/face-segregation-supervised-learning", // 🔗 Replace with your actual repo link
    owner: "Mahalaxmi",
  },

  {
    image: "./assets/projects/movierecommendation.png",
    name: "Movie Recommendation Web Application",
    description: "A content-based recommender system for 5K+ movies.",
    features: [
      "Applied NLP + cosine similarity for movie similarity scoring.",
      "Designed real-time recommendation UI with Streamlit.",
      "Integrated TMDB API to fetch posters and overviews.",
    ],
    techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "TMDB API"],
    liveLink: "https://movie-recommender-mahalaxmi.streamlit.app/",
    repoLink: "https://github.com/mahalaxmi-k/MyMovieRecommender",
    owner: "Mahalaxmi",
  },
  {
    image: "./assets/projects/20.png", // speed sign image
    name: "Smart Road Sign Detection",
    description: "Developed AI system to detect & announce speed limit signs.",
    features: [
      "Implemented YOLOv8 + OpenCV for real-time detection.",
      "Optimized for outdoor lighting and diverse road conditions.",
      "Added voice alerts for enhanced driver safety.",
    ],
    techStack: ["YOLOv8", "PyTorch", "OpenCV"],
  },
  {
    image: "./assets/projects/ml.png", // 
    name: "Music Genre Classification",
    description: "Built ML model to classify songs into 10 genres.",
    features: [
      "Used GTZAN dataset with 1,000 tracks.",
      "Applied KNN & SVM, achieving up to 61.25% accuracy.",
      "Visualized audio features using Librosa & Matplotlib.",
    ],
    techStack: ["Python", "Librosa", "Scikit-learn", "Matplotlib"],
  },

  {
    image: "./assets/projects/face_detection.jpg",
    name: "Face Detection & Segregation (Unsupervised Learning)",
    description: "An unsupervised AI system that automatically groups faces based on similarity without labeled data.",
    features: [
      "Used MTCNN and FaceNet embeddings to extract 512-D facial features from images.",
      "Applied clustering algorithms (K-Means, DBSCAN) to group similar faces automatically.",
      "Organized faces into cluster-based folders and generated visual summaries.",
      "Processed large photo collections efficiently using GPU runtime in Google Colab."
    ],
    techStack: ["Python", "PyTorch", "facenet-pytorch", "scikit-learn", "OpenCV", "Pandas", "NumPy", "Matplotlib"],
    repoLink: "https://github.com/mahalaxmi-k/face-segregation-unsupervised-learning", // 🔗 Replace with your actual repo link
    owner: "Mahalaxmi",
  },

];

const Projects = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-32 py-16 text-black bg-white"
      id="Projects"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6"
      >
        Projects
      </motion.h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        className="w-full max-w-6xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="border-2 border-black rounded-xl flex flex-col items-center text-center shadow-lg w-full h-[500px] bg-white"
            >
              {/* Show image only if it exists */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full object-cover rounded-lg"
                />
              )}

              <h2 className="text-2xl font-bold mt-4">{project.name}</h2>
              <p className="text-gray-800 my-2 text-sm">{project.description}</p>

              <div className="text-sm text-gray-900">
                <strong>Features:</strong>
                <ul className="list-disc text-left ml-6 text-gray-700">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-gray-900 mt-2">
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </div>

              <div className="flex gap-4 mt-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition duration-200 rounded-lg"
                  >
                    Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition duration-200 rounded-lg"
                  >
                    Repo
                  </a>
                )}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Projects;
