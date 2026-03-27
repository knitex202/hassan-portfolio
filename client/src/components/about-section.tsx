import { Code, Smartphone, TrendingUp, Camera, Palette } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <div className="mb-5 text-center">
            <span className="section-kicker">About</span>
          </div>
          <h2 className="section-title mb-5 text-center" data-testid="about-title">
            About Me
          </h2>
          <p className="section-copy mx-auto mb-14 max-w-3xl text-center">
            I blend engineering, creative execution, and digital strategy so ideas do not stop at mockups.
            They launch, ship, and reach the right people.
          </p>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-6 font-serif text-3xl font-semibold text-navy" data-testid="about-heading">
                Full Stack Engineer & Content Strategist
              </h3>
              <p className="section-copy mb-6" data-testid="about-description">
                With over 10 years of professional experience, I combine technical depth in software development with
                strategic storytelling, campaign execution, and digital marketing. My background spans high-profile
                political work, fintech product delivery, and founder-led product building.
              </p>
              <p className="section-copy mb-8">
                I am also the owner of <span className="font-semibold text-navy">Trendr Social</span>, a social media
                website and mobile app focused on building engaging digital community experiences.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="stat-card text-center">
                  <div className="text-3xl font-bold text-blue-accent" data-testid="stat-years">10+</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.2em] text-warm-gray">Years Experience</div>
                </div>
                <div className="stat-card text-center">
                  <div className="text-3xl font-bold text-blue-accent" data-testid="stat-languages">5+</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.2em] text-warm-gray">Languages</div>
                </div>
                <div className="stat-card text-center">
                  <div className="text-3xl font-bold text-blue-accent">1</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.2em] text-warm-gray">Owned Platform</div>
                </div>
              </div>
            </div>

            <div className="soft-panel rounded-[2rem] p-8">
              <div className="mb-6 rounded-[1.5rem] bg-amber-50/80 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Founder Spotlight</p>
                <p className="mt-3 text-lg leading-8 text-navy">
                  Trendr Social reflects my approach to product work: build the technology, shape the brand,
                  and understand the audience deeply enough to make the experience stick.
                </p>
              </div>
              <h4 className="mb-5 text-xl font-semibold text-navy" data-testid="expertise-title">
                Core Expertise
              </h4>
              <div className="space-y-3">
                <div className="flex items-center rounded-2xl bg-white/70 px-4 py-3" data-testid="expertise-fullstack">
                  <Code className="text-blue-accent mr-3" size={20} />
                  <span>Full Stack Development (Java, JavaScript, Python, C++)</span>
                </div>
                <div className="flex items-center rounded-2xl bg-white/70 px-4 py-3" data-testid="expertise-mobile">
                  <Smartphone className="text-blue-accent mr-3" size={20} />
                  <span>Mobile Development (Kotlin, Android)</span>
                </div>
                <div className="flex items-center rounded-2xl bg-white/70 px-4 py-3" data-testid="expertise-strategy">
                  <TrendingUp className="text-blue-accent mr-3" size={20} />
                  <span>Digital Strategy & Campaign Management</span>
                </div>
                <div className="flex items-center rounded-2xl bg-white/70 px-4 py-3" data-testid="expertise-photography">
                  <Camera className="text-blue-accent mr-3" size={20} />
                  <span>Photography & Videography</span>
                </div>
                <div className="flex items-center rounded-2xl bg-white/70 px-4 py-3" data-testid="expertise-design">
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
