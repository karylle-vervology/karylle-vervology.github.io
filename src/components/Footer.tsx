import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA Section */}
        <div className="glass-card p-6 sm:p-8 lg:p-12 text-center mb-12 sm:mb-16 mx-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-inter mb-4">
            <span className="text-foreground">Ready to Optimize Your</span>{" "}
            <span className="gradient-text">Business Chaos?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Vertical Boss today and transform your business with proven frameworks, 
            expert mentorship, and a community of serious entrepreneurs.
          </p>
          <button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white text-base sm:text-lg group w-full sm:w-auto">
            Join Vertical Boss Now
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VB</span>
              </div>
              <span className="font-inter font-bold text-lg sm:text-xl text-foreground">Vertical Boss</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Empowering entrepreneurs to optimize business chaos through proven frameworks and community support.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Events</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Mentoring</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Tools</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Insights</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border pt-6 sm:pt-8 px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © 2024 Vertical Boss. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;