import { Menu } from "lucide-react";
import { CTASection } from "../components/Landing/CTASection";
import { Features } from "../components/Landing/Features";
import Footer from "../components/Landing/Footer";
import { Hero } from "../components/Landing/Hero";
import { HowItWorks } from "../components/Landing/HowItWorks";
import Layout from "../components/Landing/layout";
import { WavyBackground } from "../components/ui/wavy-background";


const Index = () => {
    return (
        <div className=" relative overflow-hidden">
            <WavyBackground className=" flex max-w-3xl items-center justify-center ">
                <Hero />
            </WavyBackground>

            <Layout>
                <Features />
                <HowItWorks />
                <CTASection />
            </Layout>

            <Footer />
        </div>
    );
};

export default Index;
