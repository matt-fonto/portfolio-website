// import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FixedMenus from "./components/FixedMenus";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import { RingLoader } from "react-spinners";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const sendEmail = () => {
    const emailLink =
      "mailto:mateus.fonto@gmail.com?subject=Interview Request&body=Dear Matthew,%0D%0AI was impressed by your resume, portfolio, and projects, and I would like to schedule an interview with you to discuss the [Position] at our company in more detail.%0D%0A%0D%0AWould you be available for an interview at [time] on [date]? Please let me know if this time works for you or if you have any other availability.%0D%0A%0D%0AI look forward to speaking with you and learning more about your qualifications and experience.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]";
    window.location.href = emailLink;
  };

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
        <main>
          <Navbar />
          <FixedMenus sendEmail={sendEmail} />
          {/* content */}
          <div className="mx-10 md:mx-[300px] text-gray-400 text-openSans">
            <Hero sendEmail={sendEmail} />
            <Portfolio />
            <Skills />
            <Experience />
            <About />
            <Contact sendEmail={sendEmail} />
          </div>
        </main>
      )}
    </div>
  );
}
