"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  BrainCircuit,
  Code2,
  PieChart,
  NotebookPen,
} from "lucide-react";

export default function Home() {

  const skills = [
  {
    name: "Python",
    icon: <Code2 size={34} />,
    color: "from-yellow-400 to-orange-500",
  },

  {
    name: "MySQL",
    icon: <Database size={34} />,
    color: "from-cyan-400 to-blue-600",
  },

  {
    name: "Power BI",
    icon: <PieChart size={34} />,
    color: "from-yellow-300 to-yellow-500",
  },

  {
    name: "Jupyter Notebooks",
    icon: <NotebookPen size={34} />,
    color: "from-orange-400 to-red-500",
  },

  {
    name: "EDA",
    icon: <BarChart3 size={34} />,
    color: "from-pink-500 to-purple-600",
  },

  {
    name: "Data Visualization",
    icon: <BrainCircuit size={34} />,
    color: "from-green-400 to-emerald-600",
  },
];

  const certifications = [
    {
      title: "Python101 for Data Science",
      issuer: "IBM",
      year: "2025",
      image: "/ibm-python.png",
    },
    {
      title: "Databases and SQL",
      issuer: "IBM",
      year: "2025",
      image: "/ibm-sql.png",
    },
    {
      title: "Smart India Hackathon Participant",
      issuer: "SIH",
      year: "2025",
      image: "/sih-certificate.png",
    },
    {
      title: "IDE Bootcamp Participation",
      issuer: "Bootcamp",
      year: "2025",
      image: "/ide-certificate.png",
    },
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}

      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-gray-800">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <h1 className="text-2xl font-bold text-cyan-400">
            Sujitha
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">

            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#certificates" className="hover:text-cyan-400 transition">
              Certificates
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-black to-purple-500/10"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="text-cyan-400 text-lg mb-5">
              HELLO THERE 👋
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

              I'm{" "}
              <span className="text-cyan-400">
                Sujitha
              </span>

            </h1>

            <p className="text-2xl text-gray-300 mt-6 leading-10">

              • Data Analytics Enthusiast 

            </p>

            <p className="text-gray-400 mt-8 leading-9 text-lg max-w-2xl">

              Passionate about building meaningful digital experiences using
              analytics, visualization, and intelligent systems. I enjoy
              transforming ideas and raw information into impactful solutions
              that combine creativity with technology.

            </p>

            <div className="flex gap-5 mt-10 flex-wrap">

              <a
                href="#projects"
                className="bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition"
              >
                Contact Me
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-400 blur-[120px] opacity-30 rounded-full"></div>

              <Image
                src="/profile.png"
                alt="Profile"
                width={400}
                height={400}
                className="relative rounded-[40px] object-cover border border-cyan-400/40 shadow-2xl"
              />

            </div>

          </motion.div>

        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="py-28 px-6 bg-gray-950">

        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <h2 className="text-5xl font-bold text-cyan-400 mb-10">
              About Me
            </h2>

            <p className="text-gray-300 leading-10 text-xl">

              I enjoy transforming ideas and raw information into meaningful
              digital experiences through analytics, intelligent systems,
              and creative design. My interests lie in data visualization,
              problem-solving, and building impactful solutions that combine
              technology with innovation.

            </p>

          </motion.div>

        </div>
      </section>

      {/* EDUCATION */}

      <section id="education" className="py-28 px-6">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-20">
          Education
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">

          {/* MCA */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-950 p-10 rounded-3xl border border-gray-800 shadow-xl"
          >

            <div className="flex justify-between flex-wrap gap-4">

              <div>
                <h3 className="text-3xl font-bold">
                  Master of Computer Applications (MCA)
                </h3>

                <p className="text-cyan-400 mt-3 text-lg">
                  SNS College of Technology, Coimbatore
                </p>
              </div>

              <div className="text-right">
                <p className="text-gray-300 text-lg">
                  Pursuing
                </p>
              </div>

            </div>

          </motion.div>

          {/* UG */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-950 p-10 rounded-3xl border border-gray-800 shadow-xl"
          >

            <div className="flex justify-between flex-wrap gap-4">

              <div>
                <h3 className="text-3xl font-bold">
                  Bachelor of Computer Application (BCA)
                </h3>

                <p className="text-cyan-400 mt-3 text-lg">
                  GTN Arts College
                </p>
              </div>

              <div className="text-right">
                <p className="text-gray-300 text-lg">
                  90%
                </p>
              </div>

            </div>

          </motion.div>

          {/* 12TH */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-950 p-10 rounded-3xl border border-gray-800 shadow-xl"
          >

            <div className="flex justify-between flex-wrap gap-4">

              <div>
                <h3 className="text-3xl font-bold">
                  Higher Secondary Education
                </h3>

                <p className="text-cyan-400 mt-3 text-lg">
                  St.Joseph's Matric Higher Secondary School
                </p>
              </div>

              <div className="text-right">
                <p className="text-gray-300 text-lg">
                  95%
                </p>
              </div>

            </div>

          </motion.div>

          {/* 10TH */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-950 p-10 rounded-3xl border border-gray-800 shadow-xl"
          >

            <div className="flex justify-between flex-wrap gap-4">

              <div>
                <h3 className="text-3xl font-bold">
                  Secondary Education
                </h3>

                <p className="text-cyan-400 mt-3 text-lg">
                  St.Joseph's Girls Higher Secondary School
                </p>
              </div>

              <div className="text-right">
                <p className="text-gray-300 text-lg">
                  81%
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* SKILLS */}

     <section
  id="skills"
  className="py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black"
>
  <h2 className="text-5xl font-bold text-center text-white mb-6">
    My Skill Universe
  </h2>

  <p className="text-center text-gray-400 max-w-2xl mx-auto mb-20 text-lg">
    A blend of analytics, visualization, and problem-solving tools that
    help me transform raw data into meaningful insights.
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">

    {skills.map((skill, index) => (
      <motion.div
        key={index}
        whileHover={{
          y: -10,
          scale: 1.05,
        }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-3xl border border-gray-800 bg-[#0f0f0f] p-8 shadow-2xl group"
      >
        {/* Glow Effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br ${skill.color}`}
        />

        {/* Icon */}
        <div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg mb-6`}
        >
          {skill.icon}
        </div>

        {/* Skill Name */}
        <h3 className="text-2xl font-bold text-white mb-3">
          {skill.name}
        </h3>

        {/* Decorative Line */}
        <div
          className={`h-1 w-16 rounded-full bg-gradient-to-r ${skill.color}`}
        />

      </motion.div>
    ))}

  </div>
</section>

      {/* PROJECTS */}

      <section id="projects" className="py-28 px-6">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-20">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto">

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gray-950 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl"
          >

            <Image
              src="/vehicle-project.png"
              alt="Vehicle Tracking"
              width={1200}
              height={700}
              className="w-full h-[450px] object-cover"
            />

            <div className="p-10">

              <h3 className="text-4xl font-bold mb-6">
                AI Vehicle Tracking System
              </h3>

              <p className="text-gray-300 leading-9 text-lg">

                An intelligent vehicle tracking system using traffic signals
                developed during Smart India Hackathon. The system focused on
                improving traffic monitoring and smart mobility management.

              </p>

            </div>

          </motion.div>

        </div>
      </section>

      {/* CERTIFICATES + ACHIEVEMENTS */}

      <section id="certificates" className="py-28 px-6 bg-gray-950">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-20">
          Certifications & Achievements
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {certifications.map((cert, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={index}
              className="bg-black border border-gray-800 rounded-3xl overflow-hidden shadow-2xl"
            >

              <Image
                src={cert.image}
                alt={cert.title}
                width={700}
                height={500}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {cert.title}
                </h3>

                <p className="text-cyan-400 mt-3">
                  {cert.issuer}
                </p>

                <p className="text-gray-400 mt-2">
                  {cert.year}
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-28 px-6 text-center"
      >

        <h2 className="text-5xl font-bold text-cyan-400 mb-10">
          Contact Me
        </h2>

        <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-9">

          Open to internships, collaborations, freelance opportunities,
          and innovative projects in analytics and AI.

        </p>

        <div className="mt-12 space-y-5 text-lg">

          <p className="text-gray-300">
            📧 sujisuji2040@gmail.com
          </p>

          <p className="text-gray-300">
            📍 Coimbatore, Tamil Nadu
          </p>

          <p className="text-gray-300">
            🔗 LinkedIn: linkedin.com/in/sujitha-ramamoorthy
          </p>

          <p className="text-gray-300">
            💻 GitHub: github.com/sujitharamamoorthy
          </p>

        </div>

      </section>
    </main>
  );
}