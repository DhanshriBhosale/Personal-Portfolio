import { motion } from "framer-motion";
import {
  FiUser,
  FiCode,
  FiDatabase,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Frontend Development",
    text: "Creating responsive and modern interfaces using React, JavaScript and Tailwind CSS.",
  },
  {
    icon: FiDatabase,
    title: "Backend Development",
    text: "Developing REST APIs and backend applications using Java, Spring Boot and MySQL.",
  },
  {
  icon: FiCpu,
  title: "Intelligent Applications",
  text: "Developing smart applications that use AI to improve automation, decision-making, and user experiences.",
},
  
];

const qualities = [
  "Problem Solving",
  "Quick Learner",
  "Team Collaboration",
  "Continuous Learning",
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        </motion.div>

        {/* Main About */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">










          {/* Left Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-2xl" />

            <div className="glass relative overflow-hidden rounded-3xl border border-slate-800/80 p-8">

              {/* Top */}
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-3xl text-cyan-400">
                  <FiUser />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Dhanshri Bhosale
                  </h3>

                  <p className="mt-1 text-sm text-cyan-400">
                    Java Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-slate-800" />

              {/* Info */}
              <div className="space-y-5">

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Education
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    B.E. Information Technology
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Focus
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Full Stack Development & AI
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Pune, Maharashtra, India
                  </p>
                </div>

              </div>

              {/* Qualities */}
              <div className="mt-8 flex flex-wrap gap-2">
                {qualities.map((quality) => (
                  <span
                    key={quality}
                    className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {quality}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>



          

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            

            <p className="mt-6 leading-8 text-slate-400">

              I’m Dhanshri Bhosale, an Information Technology student at Dr. D. Y. Patil College of Engineering, Akurdi, Pune, and an aspiring Full Stack Developer. I enjoy building modern web applications using Java, React.js, Spring Boot, JavaScript, and MySQL, while continuously improving my problem-solving and development skills.

            </p>

           

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400">
                      <Icon />
                    </div>

                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}