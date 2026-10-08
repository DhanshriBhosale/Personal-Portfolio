import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;