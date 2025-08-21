import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <Hero />
      <Features />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
