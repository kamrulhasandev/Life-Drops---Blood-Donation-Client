import AboutSection from "@/components/UI/HomePage/AboutSection";
import DonorSection from "@/components/UI/HomePage/DonorSection";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import Testimonials from "@/components/UI/HomePage/Testimonials";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Testimonials/>
      <AboutSection/>
      <DonorSection/>
    </div>
  );
};

export default HomePage;
