import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute bottom-[-20%] left-[35%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      {/* Main Hero */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 pt-10 text-center">

        {/* Hi, I'm */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          <span className="gradient-text">
            Dhanshri Bhosale
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-lg font-medium text-slate-300 sm:text-xl lg:text-2xl"
        >
          Java Full Stack Developer
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-5"
        >
          {/* View Projects */}
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 rounded-full border border-cyan-400 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] sm:text-base"
          >
            View Projects

            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Download Resume */}
          <a
            href="/DhanshriResume.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] sm:text-base"
          >
            Download Resume

            <FiDownload />
          </a>
        </motion.div>

        {/* Bottom Arrow */}
        <motion.button
          onClick={scrollToProjects}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 8, 0],
          }}
          transition={{
            opacity: {
              duration: 0.7,
              delay: 0.8,
            },
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute bottom-1 text-3xl text-cyan-400 hover:text-cyan-300"
          aria-label="Scroll to projects"
        >
          <FiArrowDown />
        </motion.button>
      </div>
    </section>
  );
}