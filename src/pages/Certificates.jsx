
import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

const certificates = [
  {
    title: "Frontend Development Internship",
    issuer: "Anvistar ITS",
    year: "2025",
    certificateUrl:"/certificates/internship certificate.jpeg",
  },
  {
    title: "Fundamentals of Java Programming",
    issuer: "Coursera",
    year: "2025",
    certificateUrl:"/certificates/Coursera certificate.pdf",
  },
  {
    title: "AI-ML Virtual Internship",
    issuer: "AICTE",
    year: "2025",
    certificateUrl: "/certificates/eduskills.pdf",
  },
  {
    title: "Python Essentials",
    issuer: "Cicso",
    year: "2025",
    certificateUrl: "/certificates/cisco.pdf",
  },
];

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="section-container">
        <SectionTitle
          small="Achievements & Learning"
          title="Certificates"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]"
            >
              {/* Background Glow */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

              <div className="relative">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-400 transition duration-300 group-hover:scale-105 group-hover:bg-cyan-400/15">
                      <FiAward />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                        Certificate
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        {certificate.year}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="rounded-full border border-white/10 p-2 text-slate-500 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-400">
                    <FiArrowUpRight />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-xl font-bold leading-snug text-white">
                    {certificate.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400">
                    Issued by{" "}
                    <span className="font-medium text-slate-300">
                      {certificate.issuer}
                    </span>
                  </p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                {/* Bottom */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Certificate Earned
                  </span>

                  <a
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/20 hover:text-cyan-200"
                  >
                    View Certificate
                    <FiExternalLink className="text-sm" />
                  </a>
                </div>
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

