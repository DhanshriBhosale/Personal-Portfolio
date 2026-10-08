import { motion } from "framer-motion";
import { FaJava, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiTailwindcss, SiGithub } from "react-icons/si";
import { FiCode, FiLayers } from "react-icons/fi";

const skills = [
  ["Java", FaJava],
  ["DSA", FiCode],
  ["OOP", FiLayers],
  ["JavaScript", FaJs],
  ["React.js", FaReact],
  ["Spring Boot", SiSpringboot],
  ["HTML", FaHtml5],
  ["CSS", FaCss3Alt],
  ["Tailwind CSS", SiTailwindcss],
  ["MySQL", SiMysql],
  ["Git", FaGitAlt],
  ["GitHub", SiGithub],
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <SectionTitle small="My Technical Stack" title="Skills" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map(([name, Icon], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -5 }}
              className="glass glow flex flex-col items-center justify-center rounded-2xl p-6"
            >
              <Icon className="text-4xl text-cyan-400" />
              <p className="mt-4 text-center text-sm font-semibold text-slate-200">
                {name}
              </p>
            </motion.div>
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
      <h2 className="text-4xl font-extrabold sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
    </div>
  );
}