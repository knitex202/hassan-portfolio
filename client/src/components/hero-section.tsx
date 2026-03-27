import { ArrowRight, Download, Eye, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadResume = async () => {
    try {
      const response = await fetch("/api/download-resume");
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Hassan_Wilson_Resume_2025.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert("Resume download is currently unavailable");
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("Resume download is currently unavailable");
    }
  };

  return (
    <section id="home" className="hero-gradient px-6 pb-24 pt-36 text-white md:pt-40">
      <div className="hero-orb left-[8%] top-28 h-28 w-28 bg-amber-300/50" />
      <div className="hero-orb right-[12%] top-44 h-36 w-36 bg-sky-300/35 [animation-delay:1.3s]" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 shadow-lg backdrop-blur">
              <Sparkles className="mr-2 text-amber-300" size={16} />
              Owner of Trendr Social, a social media website and mobile app
            </div>
            <h1 className="font-serif text-5xl font-semibold leading-tight md:text-7xl" data-testid="hero-title">
              Hassan Wilson
            </h1>
            <p className="mb-4 mt-6 text-xl text-blue-100 md:text-2xl" data-testid="hero-subtitle">
              Content & Digital Strategist
            </p>
            <p className="mb-8 max-w-3xl text-lg text-slate-200 md:text-xl" data-testid="hero-role">
              Full Stack Software Engineer, Frontend Developer, and product-minded founder building strategy,
              storytelling, and digital experiences that move people to action.
            </p>
            <p className="mb-10 max-w-3xl text-base leading-8 text-slate-300 md:text-lg" data-testid="hero-description">
              I bring 10+ years of hands-on experience across software engineering, mobile development,
              political communications, and digital growth. From national campaigns to Trendr Social,
              I build systems, content, and products that connect with real audiences.
            </p>
            <div className="mb-10 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-100 backdrop-blur">
                10+ years building products and campaigns
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-100 backdrop-blur">
                AI, web, mobile, and growth strategy
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-100 backdrop-blur">
                Founder of Trendr Social
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-4 font-semibold text-navy transition-transform hover:-translate-y-0.5 hover:bg-amber-300"
                data-testid="button-view-work"
              >
                <Eye className="mr-2" size={20} />
                View My Work
              </button>
              <button
                onClick={downloadResume}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-navy"
                data-testid="button-download-resume"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </button>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-blue-100">Current Focus</p>
                  <h2 className="mt-2 font-serif text-3xl">Strategy with shipping power</h2>
                </div>
                <div className="rounded-full bg-amber-300/20 p-3 text-amber-300">
                  <ArrowRight size={22} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-white/12 bg-slate-950/20 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Product</p>
                  <p className="mt-2 text-lg font-medium text-white">
                    Trendr Social owner building a social media website and mobile app experience.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/12 bg-slate-950/20 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Campaigns</p>
                  <p className="mt-2 text-lg font-medium text-white">
                    High-velocity digital strategy, messaging, photography, and content operations.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/12 bg-slate-950/20 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Engineering</p>
                  <p className="mt-2 text-lg font-medium text-white">
                    Full stack systems, frontend polish, automation, and mobile-first problem solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
