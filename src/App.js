// import About from "./components/About";
// import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FixedMenus from "./components/FixedMenus";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import { RingLoader } from "react-spinners";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  return (
    <div className="min-h-screen bg-[#222]">
      {loading ? (
        <RingLoader
          size={100}
          color={"#36d7b7"}
          loading={loading}
          className="mx-auto my-auto top-[40vh] bg-[#222]"
        />
      ) : (
        // * whole screen container
        <main className="text-zinc-100">
          <Navbar />
          {/* <FixedMenus /> */}
          {/* content */}
          <div className="mx-[200px]">
            <Header />
            <Portfolio />
            <Skills />
            <Experience />
            {/* 
          
          
          <About />
          <Contact /> */}
          </div>
        </main>
      )}
    </div>
  );
}
