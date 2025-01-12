
import HeroSection from "../component/hero";
import Blog from "./[Blog]/page";
import About from "./About/page";
import ContactUs from "./ContactUs/page";

export default function Home() {
  return (
   <div>
    <HeroSection/>
   <Blog/>
   <About/>
   <ContactUs/> 
    
    
   </div>
  );
}
