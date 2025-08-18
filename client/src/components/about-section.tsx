import { Code, Smartphone, TrendingUp, Camera, Palette } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center" data-testid="about-title">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6" data-testid="about-heading">
                Full Stack Engineer & Content Strategist
              </h3>
              <p className="text-warm-gray mb-6 leading-relaxed" data-testid="about-description">
                With over 10 years of professional experience, I combine technical expertise in software development 
                with strategic content creation and digital marketing. My unique background spans high-profile political 
                campaigns, innovative fintech solutions, and comprehensive digital strategies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-accent" data-testid="stat-years">10+</div>
                  <div className="text-sm text-warm-gray">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-accent" data-testid="stat-languages">5+</div>
                  <div className="text-sm text-warm-gray">Programming Languages</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-navy mb-4" data-testid="expertise-title">
                Core Expertise
              </h4>
              <div className="space-y-3">
                <div className="flex items-center" data-testid="expertise-fullstack">
                  <Code className="text-blue-accent mr-3" size={20} />
                  <span>Full Stack Development (Java, JavaScript, Python, C++)</span>
                </div>
                <div className="flex items-center" data-testid="expertise-mobile">
                  <Smartphone className="text-blue-accent mr-3" size={20} />
                  <span>Mobile Development (Kotlin, Android)</span>
                </div>
                <div className="flex items-center" data-testid="expertise-strategy">
                  <TrendingUp className="text-blue-accent mr-3" size={20} />
                  <span>Digital Strategy & Campaign Management</span>
                </div>
                <div className="flex items-center" data-testid="expertise-photography">
                  <Camera className="text-blue-accent mr-3" size={20} />
                  <span>Photography & Videography</span>
                </div>
                <div className="flex items-center" data-testid="expertise-design">
                  <Palette className="text-blue-accent mr-3" size={20} />
                  <span>Graphic Design & Content Creation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
