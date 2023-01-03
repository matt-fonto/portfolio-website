// import About from "./components/About";
// import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FixedMenus from "./components/FixedMenus";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-[#222] text-zinc-100">
        {/* whole screen container */}
        <Navbar />
        <FixedMenus />
        {/* content */}
        <div className="mx-[20vh]">
          <Header />
          <Portfolio />
          <Skills />
          <Experience />
          {/* 
          
          
          <About />
          <Contact /> */}
        </div>
      </main>
    </div>
  );
}
