import { Download, Eye } from "lucide-react";

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = async () => {
    try {
      const response = await fetch('/api/download-resume');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Hassan_Wilson_Resume_2025.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert('Resume download is currently unavailable');
      }
    } catch (error) {
      console.error('Download error:', error);
      alert('Resume download is currently unavailable');
    }
  };

  return (
    <section id="home" className="hero-gradient text-white py-32 pt-40">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="hero-title">
            Hassan Wilson
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-200" data-testid="hero-subtitle">
            Content & Digital Strategist
          </p>
          <p className="text-lg md:text-xl mb-8 text-slate-300" data-testid="hero-role">
            Full Stack Software Engineer & Frontend Developer
          </p>
          <p className="text-lg mb-12 text-slate-300 max-w-3xl mx-auto" data-testid="hero-description">
            Over 10 years of professional coding experience specializing in AI, mobile development, and digital strategy. 
            Proven track record in high-profile political campaigns and innovative tech solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToPortfolio}
              className="bg-blue-accent hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              data-testid="button-view-work"
            >
              <Eye className="inline mr-2" size={20} />
              View My Work
            </button>
            <button 
              onClick={downloadResume}
              className="border border-white hover:bg-white hover:text-navy px-8 py-3 rounded-lg font-semibold transition-colors"
              data-testid="button-download-resume"
            >
              <Download className="inline mr-2" size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
