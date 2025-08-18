import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-xl font-bold text-navy cursor-pointer"
            onClick={() => scrollToSection('home')}
            data-testid="nav-logo"
          >
            Hassan Wilson
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-warm-gray hover:text-blue-accent transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-warm-gray hover:text-blue-accent transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-warm-gray hover:text-blue-accent transition-colors"
              data-testid="nav-experience"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-warm-gray hover:text-blue-accent transition-colors"
              data-testid="nav-portfolio"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('email-templates')} 
              className="text-warm-gray hover:text-blue-accent transition-colors"
              data-testid="nav-templates"
            >
              Email Templates
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-warm-gray hover:text-blue-accent transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-warm-gray hover:text-blue-accent transition-colors text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-warm-gray hover:text-blue-accent transition-colors text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="text-warm-gray hover:text-blue-accent transition-colors text-left"
                data-testid="mobile-nav-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-warm-gray hover:text-blue-accent transition-colors text-left"
                data-testid="mobile-nav-portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('email-templates')} 
                className="text-warm-gray hover:text-blue-accent transition-colors text-left"
                data-testid="mobile-nav-templates"
              >
                Email Templates
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-warm-gray hover:text-blue-accent transition-colors text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
