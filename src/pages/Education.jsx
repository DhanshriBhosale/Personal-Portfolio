import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

const education = [
  {
    degree: "B.E. Information Technology",
    institute: "Dr. D. Y. Patil College of Engineering, Akurdi, Pune",
    period: "2023 – 2027",
    result: "CGPA: 9.05 / 10",
  },
  {
    degree: "Diploma in Computer Engineering",
    institute:
      "Sahakar Maharshi Shankarrao Mohite Patil Institute of Technology and Research, Akluj",
    period: "2021 – 2024",
    result: "Percentage: 89.14%",
  },
  {
    degree: "SSC",
    institute: "Maharashtra State Board of Technical Education",
    period: "2021",
    result: "Percentage: 97.80%",
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="section-container">
        <SectionTitle small="My Academic Journey" title="Education" />

        <div className="mx-auto max-w-4xl">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-8 flex gap-5"
            >
              {/* Timeline Icon */}
              <div className="relative flex flex-col items-center">
                <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-400">
                  <FiBookOpen />
                </div>

                {index !== education.length - 1 && (
                  <div className="h-full w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />
                )}
              </div>

              {/* Education Card */}
              <div className="glass glow mb-2 flex-1 rounded-2xl p-6">
                <span className="text-sm font-semibold text-cyan-400">
                  {item.period}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.degree}
                </h3>

                <p className="mt-2 text-slate-400">
                  {item.institute}
                </p>

                <p className="mt-4 text-sm font-semibold text-slate-300">
                  {item.result}
                </p>
              </div>
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

      <h2 className="text-4xl font-extrabold sm:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
    </div>
  );
}