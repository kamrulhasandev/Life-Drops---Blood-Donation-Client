import AboutSection from "@/components/UI/HomePage/AboutSection";
import BlogSection from "@/components/UI/HomePage/BlogSection";
import DonorSection from "@/components/UI/HomePage/DonorSection";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import NetworkSection from "@/components/UI/HomePage/NetworkSection";
import Testimonials from "@/components/UI/HomePage/Testimonials";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Testimonials />
      <AboutSection />
      <DonorSection />
      <NetworkSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;
