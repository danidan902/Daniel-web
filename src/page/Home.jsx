import ThemeToggle from "@/components/ThemeToggle";
import {} from '@/components/StarBackground'
import { StarBackground } from "@/components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AbouteSection from "../components/AbouteSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
const Home = () => {
  return (
    <div className="min-h-screen">
         <ThemeToggle />
         <StarBackground /> 
         <Navbar/>  

         <main>
          <HeroSection />
          <AbouteSection/>
          <SkillSection/>
          <ProjectSection/>
          <ContactSection/>
          <FooterSection/>
          </main>     

    </div>
  )
}

export default Home;