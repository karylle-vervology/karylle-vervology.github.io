import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Users } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-15"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-8 animate-float">
          <div className="glass p-3 rounded-xl">
            <Zap className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="absolute top-1/3 right-12 animate-float" style={{ animationDelay: '2s' }}>
          <div className="glass p-3 rounded-xl">
            <Target className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-16 animate-float" style={{ animationDelay: '4s' }}>
          <div className="glass p-3 rounded-xl">
            <Users className="w-6 h-6 text-primary-glow" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center z-10">
        <div 
          className="space-y-8 animate-slide-up"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
            <span className="text-sm font-medium text-foreground">The Go-To Community for Serious Business Owners</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-inter leading-tight">
            <span className="gradient-text">Empowering</span>{" "}
            <span className="text-foreground">Entrepreneurs</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-foreground">To Optimize</span>{" "}
            <span className="gradient-text">Business Chaos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Vertical Boss offers straight-shooting advice and proven frameworks designed to advance your business with real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold px-8 py-4 text-lg group"
            >
              Join Vertical Boss
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card hover:shadow-glow-accent transition-all duration-300 font-semibold px-8 py-4 text-lg border-glass-border"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 px-4">
            <div className="glass-card text-center group hover:shadow-glass-lg transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">1000+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Business Owners</div>
            </div>
            <div className="glass-card text-center group hover:shadow-glass-lg transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Expert Mentors</div>
            </div>
            <div className="glass-card text-center group hover:shadow-glass-lg transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">95%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;