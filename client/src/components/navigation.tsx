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
    <nav className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="glass-nav container mx-auto max-w-6xl rounded-[1.75rem] px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
            data-testid="nav-logo"
          >
            <div className="text-lg font-bold uppercase tracking-[0.18em] text-navy md:text-xl">
              Hassan Wilson
            </div>
            <div className="text-xs uppercase tracking-[0.28em] text-warm-gray">
              Strategist + Builder
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 rounded-full bg-white/60 p-2 md:flex">
            <button 
              onClick={() => scrollToSection('home')} 
              className="rounded-full px-4 py-2 text-sm font-medium text-warm-gray transition-colors hover:bg-white hover:text-navy"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="rounded-full px-4 py-2 text-sm font-medium text-warm-gray transition-colors hover:bg-white hover:text-navy"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="rounded-full px-4 py-2 text-sm font-medium text-warm-gray transition-colors hover:bg-white hover:text-navy"
              data-testid="nav-experience"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="rounded-full px-4 py-2 text-sm font-medium text-warm-gray transition-colors hover:bg-white hover:text-navy"
              data-testid="nav-portfolio"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('email-templates')} 
              className="rounded-full px-4 py-2 text-sm font-medium text-warm-gray transition-colors hover:bg-white hover:text-navy"
              data-testid="nav-templates"
            >
              Email Templates
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-accent"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="rounded-full bg-white/80 p-3 text-navy shadow-sm md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-slate-200/80 pt-4 md:hidden">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="rounded-2xl px-4 py-3 text-left font-medium text-warm-gray transition-colors hover:bg-white/80 hover:text-navy"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="rounded-2xl px-4 py-3 text-left font-medium text-warm-gray transition-colors hover:bg-white/80 hover:text-navy"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="rounded-2xl px-4 py-3 text-left font-medium text-warm-gray transition-colors hover:bg-white/80 hover:text-navy"
                data-testid="mobile-nav-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="rounded-2xl px-4 py-3 text-left font-medium text-warm-gray transition-colors hover:bg-white/80 hover:text-navy"
                data-testid="mobile-nav-portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('email-templates')} 
                className="rounded-2xl px-4 py-3 text-left font-medium text-warm-gray transition-colors hover:bg-white/80 hover:text-navy"
                data-testid="mobile-nav-templates"
              >
                Email Templates
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="rounded-2xl bg-navy px-4 py-3 text-left font-semibold text-white transition-colors hover:bg-blue-accent"
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
