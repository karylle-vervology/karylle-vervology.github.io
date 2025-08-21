import { useEffect, useState } from "react";
import { Quote, Star, ArrowRight } from "lucide-react";

const Community = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tech Startup Founder",
      content: "Vertical Boss transformed how I approach business challenges. The community support and frameworks are game-changing.",
      rating: 5
    },
    {
      name: "Marcus Rivera",
      role: "E-commerce CEO",
      content: "The weekly sessions and peer connections have accelerated my business growth beyond what I thought possible.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Consulting Agency Owner",
      content: "Finally, a community that cuts through the noise and focuses on what actually works. Real results, real fast.",
      rating: 5
    }
  ];

  return (
    <section id="community" className="py-24 px-6 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-25"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-accent">Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter mb-6">
            <span className="text-foreground">Join</span>{" "}
            <span className="gradient-text">Serious</span>{" "}
            <span className="text-foreground">Entrepreneurs</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with like-minded business owners who are committed to growth, 
            accountability, and achieving exceptional results.
          </p>
        </div>

        {/* Community Stats */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="glass-card text-center group hover:shadow-glass-lg transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold gradient-text mb-2">1,000+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="glass-card text-center group hover:shadow-glass-lg transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold gradient-text mb-2">50+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Weekly Sessions</div>
          </div>
          <div className="glass-card text-center group hover:shadow-glass-lg transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold gradient-text mb-2">$100M+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Revenue Generated</div>
          </div>
          <div className="glass-card text-center group hover:shadow-glass-lg transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold gradient-text mb-2">95%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card group hover:shadow-glass-lg transition-all duration-500 hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: `translateY(${scrollY * 0.05}px)`
              }}
            >
              <div className="flex items-center mb-4">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-sm sm:text-base text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="text-sm sm:text-base font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Features */}
        <div className="glass-card p-6 sm:p-8 lg:p-12 text-center mx-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-inter mb-6">
            <span className="gradient-text">What You Get as a Member</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div className="text-left">
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-2">Weekly Mastermind Sessions</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Collaborative problem-solving with fellow entrepreneurs</p>
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-2">Expert Mentorship</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Direct access to seasoned business advisors</p>
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-2">Proven Frameworks</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Battle-tested strategies for sustainable growth</p>
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-2">Exclusive Resources</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Tools, templates, and guides for business optimization</p>
            </div>
          </div>
          <button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white group text-sm sm:text-base w-full sm:w-auto">
            Join the Community
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;