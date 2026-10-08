import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis application that analyzes uploaded resumes, detects skills and provides ATS-oriented feedback.",
    tech: ["Spring Boot", "Java", "MySQL", "PDFBox"],
    github: "https://github.com/DhanshriBhosale/AI-Resume-Analyzer",
  },
  {
    title: "Student Management System",
    description:
      "A full-stack student management application for managing student records through a responsive web interface.",
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/DhanshriBhosale/Student-Management-System",
  },
  {
    title: "Food Ordering System",
    description:
      "A web-based food ordering application with customer and admin functionality and database integration.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/DhanshriBhosale/Foodies-website",
  },
  {
    title: "DevFolio",
    description:
      "A modern developer portfolio showcasing projects, skills, education, certificates and professional information.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/DhanshriBhosale/DevFolio",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-container">
        <SectionTitle small="What I've Built" title="Projects" />

        {/* 2 Projects Per Row */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass glow flex flex-col rounded-2xl p-6"
            >
              {/* Top Section */}
              <div className="mb-5 flex items-center justify-between">
                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                  <FiArrowUpRight className="text-xl" />
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-slate-400 transition hover:text-cyan-400"
                  aria-label={`${project.title} GitHub`}
                >
                  <FiGithub />
                </a>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* View Project */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
              >
                View Project
                <FiExternalLink />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ small, title }) {
  return (
    <div className="mb-14 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
        {small}
      </p>

      <h2 className="text-4xl font-extrabold sm:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
    </div>
  );
}