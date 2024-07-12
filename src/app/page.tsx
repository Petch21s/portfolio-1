import Image from "next/image";
import Herosection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";



export default function Home(){
  return <main className="flex min-h-screen flex-col bg-gradient-to-r
   from-[#231246] to-[#290329]">
    <Navbar/>
    
    <Herosection/>
    <AboutSection/>
    <AboutSection/>
    <AboutSection/>
    
    
  </main>
}