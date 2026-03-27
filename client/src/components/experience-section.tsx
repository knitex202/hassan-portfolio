import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Owner & Trendr Social",
      company: "Trendr Social",
      period: "Present",
      description: "Own and shape Trendr Social, a social media website and mobile app. Lead product direction, frontend experience, technical decisions, and brand positioning to create an engaging digital platform.",
      tags: ["Product Strategy", "Social Platform", "Mobile App", "Frontend Development"],
      color: "border-amber-400"
    },
    {
      title: "Content and Digital Strategist",
      company: "Kamala Harris For President (Deputy Digital Director)",
      period: "2024 - Nov. 2024",
      description: "Planned, developed, and managed the organization's online presence and content strategy. Aligned digital content with campaign goals to engage target audiences and drive conversions. Served as lead photographer/videographer and motorcade photographer when needed.",
      tags: ["Digital Strategy", "Photography", "Automation Systems", "NGP VAN"],
      color: "border-blue-accent"
    },
    {
      title: "Full Stack Developer",
      company: "Viva Renter and Investor Dashboard",
      period: "2021 - 2023",
      description: "Designed projections graphs for the renter and landlord dashboard using Bubble.io. Developed backend API using JavaScript to connect banking systems to the platform. Focused on debugging and ensuring smooth releases.",
      tags: ["JavaScript", "Bubble.io", "API Development", "FinTech"],
      color: "border-green-500"
    },
    {
      title: "Campaign Technology Director",
      company: "Multiple Political Campaigns",
      period: "2018 - 2021",
      description: "Created and managed campaign websites and technology infrastructure. Designed signage, created strategic placement maps via NGP VAN, and trained volunteers on voter database systems. Served as field organizer, graphics designer, and operations team member.",
      tags: ["Web Development", "Graphics Design", "NGP VAN", "Team Training"],
      color: "border-purple-500"
    }
  ];

  return (
    <section id="experience" className="px-6 py-24">
      <div className="container mx-auto max-w-5xl">
        <div className="max-w-4xl mx-auto">
          <div className="mb-5 text-center">
            <span className="section-kicker">Experience</span>
          </div>
          <h2 className="section-title mb-5 text-center" data-testid="experience-title">
            Professional Experience
          </h2>
          <p className="section-copy mx-auto mb-14 max-w-3xl text-center">
            My experience spans founder-led product work, national campaign operations, and hands-on software delivery.
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`timeline-card border-l-4 ${exp.color}`}
                data-testid={`experience-item-${index}`}
              >
                <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-navy" data-testid={`experience-title-${index}`}>
                      {exp.title}
                    </h3>
                    <p className="mt-2 text-base font-semibold uppercase tracking-[0.16em] text-blue-accent" data-testid={`experience-company-${index}`}>
                      {exp.company}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-warm-gray md:mt-1" data-testid={`experience-period-${index}`}>
                    {exp.period}
                  </span>
                </div>
                <p className="mb-5 text-base leading-8 text-warm-gray" data-testid={`experience-description-${index}`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="rounded-full bg-blue-50 px-4 py-2 text-blue-800"
                      data-testid={`experience-tag-${index}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
