import { Menu } from "lucide-react";
import { Hero } from "../components/Landing/Hero";
import { Features } from "../components/Landing/Features";
import { HowItWorks } from "../components/Landing/HowItWorks";
import { CTASection } from "../components/Landing/CTASection";
import { WavyBackground } from "../components/ui/wavy-background";
import Layout from "../components/Landing/layout";
import Footer from "../components/Landing/Footer";

const Index = () => {
  return (
  
    <div className=" relative overflow-hidden">
      <WavyBackground className=" flex items-center justify-center max-w-3xl ">
      
        <Hero />
      </WavyBackground>




      <Layout>
      <Features />
      <HowItWorks />
      <CTASection />
      </Layout>

      <Footer/>
     
    </div>
   
  );
};

export default Index;
