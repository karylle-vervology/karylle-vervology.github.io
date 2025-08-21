import { useEffect, useState } from "react";
import { Target, Users, Lightbulb, TrendingUp, MessageSquare, Award } from "lucide-react";

const Features = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Target,
      title: "Cutting Through the Noise",
      description: "Pinpoint exactly where your business stands and where you need to go next with experienced advisors by your side.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Community of Growth",
      description: "Join entrepreneurs committed to challenging the status quo and building valuable relationships through weekly sessions.",
      color: "text-accent"
    },
    {
      icon: Lightbulb,
      title: "Proven Frameworks",
      description: "Access battle-tested strategies and frameworks that help you avoid common pitfalls and accelerate growth.",
      color: "text-primary-glow"
    },
    {
      icon: TrendingUp,
      title: "Measurable Progress",
      description: "Track your business optimization with clear metrics and sustainable progress indicators.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Real Talk, Real Results",
      description: "Get straight-shooting advice without the fluff. Focus on what actually moves the needle in your business.",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Expert Mentorship",
      description: "Learn from seasoned business leaders who have scaled their own companies successfully.",
      color: "text-primary-glow"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up px-4">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">What is Vertical Boss?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter mb-6">
            <span className="text-foreground">Community of</span>{" "}
            <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vertical Boss is a targeted solution for business owners who are serious about success. 
            Focused on pragmatic execution, optimizing core components for growth and lasting success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="glass-card group hover:shadow-glass-lg transition-all duration-500 hover:-translate-y-2"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: `translateY(${scrollY * 0.05}px)`
                }}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold font-inter mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <div className="glass-card max-w-2xl mx-auto p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold font-inter mb-4">
              <span className="gradient-text">Ready to Transform Your Business?</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Join thousands of entrepreneurs who have optimized their business chaos into structured success.
            </p>
            <button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white text-sm sm:text-base w-full sm:w-auto">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;