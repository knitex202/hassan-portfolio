import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
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
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center" data-testid="experience-title">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 ${exp.color}`}
                data-testid={`experience-item-${index}`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-navy" data-testid={`experience-title-${index}`}>
                      {exp.title}
                    </h3>
                    <p className="text-blue-accent font-medium" data-testid={`experience-company-${index}`}>
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-warm-gray font-medium mt-2 md:mt-0" data-testid={`experience-period-${index}`}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-warm-gray leading-relaxed mb-4" data-testid={`experience-description-${index}`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="bg-blue-100 text-blue-800"
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
