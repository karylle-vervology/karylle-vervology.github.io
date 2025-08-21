import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="glass-header max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VB</span>
            </div>
            <span className="font-inter font-bold text-xl text-foreground">
              Vertical Boss
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors font-medium">
              Community
            </a>
            <a href="#mentoring" className="text-foreground hover:text-primary transition-colors font-medium">
              Mentoring
            </a>
            <a href="#tools" className="text-foreground hover:text-primary transition-colors font-medium">
              Tools
            </a>
            <a href="#insights" className="text-foreground hover:text-primary transition-colors font-medium">
              Insights
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold px-6"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 glass rounded-2xl animate-slide-up">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#community" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Community
              </a>
              <a 
                href="#mentoring" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Mentoring
              </a>
              <a 
                href="#tools" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Tools
              </a>
              <a 
                href="#insights" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Insights
              </a>
              <Button 
                variant="default" 
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold w-full mt-4"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;