import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"],
  ["Projects", "projects"], ["Education", "education"],
  ["Certificates", "certificates"], ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
  onClick={() => scrollToSection("home")}
  className="flex items-center gap-3 text-2xl font-bold"
>
  <span className="text-3xl font-bold text-cyan-400">
    {"</>"}
  </span>

  <span className="text-white">
    Dev<span className="text-cyan-400">Folio</span>
  </span>
</button>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollToSection(id)} className="text-sm text-slate-300 transition hover:text-cyan-400">
              {label}
            </button>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="text-2xl text-slate-200 md:hidden">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-800/50 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-left text-slate-300 hover:text-cyan-400">
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}