import { useState } from "react";
import { Camera, ExternalLink, Globe, Palette, Play, Video } from "lucide-react";
import kamalaRally from "../assets/kamala-rally.jpg";
import kCommunity from "../assets/kamala-community.jpg";
import theScenes from "../assets/behind-the-scenes.jpg";
import eventDocumentation from "../assets/event-documentation.jpg";
import rapidResponse from "../assets/rapid-response.jpg";
import campaignTrail from "../assets/campaign-trail.jpg";
import polAd from "../assets/political-ad.png";
import eventPoster from "../assets/event-poster.png";
import socialGraphics from "../assets/social-graphics.jpg";
import orangeLogo from "../assets/orange-logo.png";
import posterDesign from "../assets/poster-design.jpg";
import trendrScreenshot from "../assets/websites/trendr-me.png";
import mxjshopScreenshot from "../assets/websites/mxjshop.png";
import thrivingScreenshot from "../assets/websites/thriving-last-mile.png";
import lumoScreenshot from "../assets/websites/lumo-stream.png";

type PortfolioTab = "photography" | "videography" | "graphics" | "websites";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("photography");

  const photographyItems = [
    {
      src: kamalaRally,
      fullSrc: kamalaRally,
      title: "Campaign Rally Coverage",
      description: "High-energy political event photography",
    },
    {
      src: rapidResponse,
      fullSrc: rapidResponse,
      title: "Rapid Response",
      description: "5-minute turnaround for urgent coverage",
    },
    {
      src: eventDocumentation,
      fullSrc: eventDocumentation,
      title: "Event Documentation",
      description: "Comprehensive event coverage",
    },
    {
      src: kCommunity,
      fullSrc: kCommunity,
      title: "Community Documentation",
      description: "Grassroots movement photography",
    },
    {
      src: campaignTrail,
      fullSrc: campaignTrail,
      title: "Motorcade Coverage",
      description: "Presidential campaign trail documentation",
    },
    {
      src: theScenes,
      fullSrc: theScenes,
      title: "Behind the Scenes",
      description: "Campaign headquarters documentation",
    },
  ];

  const videographyItems = [
    {
      title: "Campaign Video Content",
      description: "Professional political campaign video showcasing event coverage and strategic messaging.",
      duration: "Video",
      instagramUrl: "https://www.instagram.com/p/DACU9Brs2r4/",
      thumbnail: kamalaRally,
      eyebrow: "Event coverage",
    },
    {
      title: "Digital Campaign Advertisement",
      description: "Strategic messaging and visual storytelling built for paid and organic political content.",
      duration: "2:30",
      instagramUrl: "https://www.instagram.com/p/DAq9gQSNOPA/",
      thumbnail: rapidResponse,
      eyebrow: "Ad creative",
    },
    {
      title: "Social Media Video Content",
      description: "Short-form clips optimized for digital platforms, audience retention, and shareability.",
      duration: "Multiple clips",
      instagramUrl: "https://www.instagram.com/p/DAccta4osKb/",
      thumbnail: socialGraphics,
      eyebrow: "Short-form video",
    },
  ];

  const graphicsItems = [
    {
      src: orangeLogo,
      fullSrc: orangeLogo,
      title: "Campaign Logo Design",
      description: "Professional branding for political campaigns",
    },
    {
      src: socialGraphics,
      fullSrc: socialGraphics,
      title: "Social Media Graphics",
      description: "Engaging digital content for social platforms",
    },
    {
      src: eventPoster,
      fullSrc: eventPoster,
      title: "Event Posters",
      description: "Eye-catching promotional materials",
    },
    {
      src: polAd,
      fullSrc: polAd,
      title: "Digital Infographics",
      description: "Data visualization and policy explanations",
    },
    {
      src: posterDesign,
      fullSrc: posterDesign,
      title: "Print Campaign Materials",
      description: "Brochures, flyers, and direct mail design",
    },
  ];

  const websiteItems = [
    {
      title: "Trendr Social",
      url: "https://trendr.me",
      screenshot: trendrScreenshot,
      description: "Owner-led social media website and mobile app product focused on engagement, community, and product direction.",
      highlights: ["trendr.me", "Website + mobile app", "Audience-centered UX"],
      accent: "from-sky-500/20 to-cyan-400/10",
    },
    {
      title: "MXJ Shop",
      url: "https://mxjshop.com",
      screenshot: mxjshopScreenshot,
      description: "E-commerce website experience built to present products clearly and support a stronger shopper journey.",
      highlights: ["mxjshop.com", "E-commerce", "Product-focused UX"],
      accent: "from-amber-400/20 to-orange-400/10",
    },
    {
      title: "Thriving in the Last Mile",
      url: "https://thrivinginthelastmile.com",
      screenshot: thrivingScreenshot,
      description: "Website built around message clarity, audience connection, and a polished responsive presentation.",
      highlights: ["thrivinginthelastmile.com", "Responsive design", "Brand clarity"],
      accent: "from-emerald-400/20 to-teal-400/10",
    },
    {
      title: "Lumo Stream",
      url: "https://lumo-stream.onrender.com",
      screenshot: lumoScreenshot,
      description: "Streaming-focused web product with a modern interface and frontend-led user experience.",
      highlights: ["lumo-stream.onrender.com", "Streaming platform", "Frontend development"],
      accent: "from-fuchsia-400/20 to-pink-400/10",
    },
  ];

  const openLightbox = (src: string) => {
    const lightbox = document.getElementById("lightbox") as HTMLElement;
    const lightboxImage = document.getElementById("lightbox-image") as HTMLImageElement;
    if (lightbox && lightboxImage) {
      lightboxImage.src = src;
      lightbox.classList.remove("hidden");
      lightbox.classList.add("flex");
    }
  };

  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-6xl mx-auto">
          <div className="mb-5 text-center">
            <span className="section-kicker">Selected Work</span>
          </div>
          <h2 className="section-title mb-5 text-center" data-testid="portfolio-title">
            Portfolio
          </h2>
          <p className="section-copy mx-auto mb-12 max-w-3xl text-center">
            A mix of campaign storytelling, visual communication, media production, and website-focused product work.
          </p>

          <div className="mb-12 flex justify-center">
            <div className="soft-panel flex flex-wrap justify-center gap-2 rounded-full p-2">
              <button
                className={`rounded-full px-6 py-3 font-medium transition-colors ${
                  activeTab === "photography" ? "bg-navy text-white shadow-lg" : "text-warm-gray hover:bg-white hover:text-navy"
                }`}
                onClick={() => setActiveTab("photography")}
                data-testid="tab-photography"
              >
                <Camera className="mr-2 inline" size={20} />
                Photography
              </button>
              <button
                className={`rounded-full px-6 py-3 font-medium transition-colors ${
                  activeTab === "videography" ? "bg-navy text-white shadow-lg" : "text-warm-gray hover:bg-white hover:text-navy"
                }`}
                onClick={() => setActiveTab("videography")}
                data-testid="tab-videography"
              >
                <Video className="mr-2 inline" size={20} />
                Videography
              </button>
              <button
                className={`rounded-full px-6 py-3 font-medium transition-colors ${
                  activeTab === "graphics" ? "bg-navy text-white shadow-lg" : "text-warm-gray hover:bg-white hover:text-navy"
                }`}
                onClick={() => setActiveTab("graphics")}
                data-testid="tab-graphics"
              >
                <Palette className="mr-2 inline" size={20} />
                Graphics
              </button>
              <button
                className={`rounded-full px-6 py-3 font-medium transition-colors ${
                  activeTab === "websites" ? "bg-navy text-white shadow-lg" : "text-warm-gray hover:bg-white hover:text-navy"
                }`}
                onClick={() => setActiveTab("websites")}
                data-testid="tab-websites"
              >
                <Globe className="mr-2 inline" size={20} />
                Websites
              </button>
            </div>
          </div>

          {activeTab === "photography" && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" data-testid="photography-gallery">
              {photographyItems.map((item, index) => (
                <div
                  key={index}
                  className="portfolio-item cursor-pointer overflow-hidden rounded-[1.5rem] bg-white/90"
                  onClick={() => openLightbox(item.fullSrc)}
                  data-testid={`photo-item-${index}`}
                >
                  <img src={item.src} alt={item.title} className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="mb-2 font-semibold text-navy" data-testid={`photo-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-warm-gray" data-testid={`photo-description-${index}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "videography" && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3" data-testid="videography-gallery">
              {videographyItems.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 shadow-lg"
                  data-testid={`video-item-${index}`}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                      {item.eyebrow}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-white/15 p-4 text-white backdrop-blur">
                        <Play size={34} fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-5 left-5 rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur">
                      {item.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 font-semibold text-navy" data-testid={`video-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="mb-4 text-sm text-warm-gray" data-testid={`video-description-${index}`}>
                      {item.description}
                    </p>
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-navy px-5 py-3 text-white transition-colors hover:bg-blue-accent"
                      data-testid={`instagram-link-${index}`}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      View on Instagram
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "graphics" && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" data-testid="graphics-gallery">
              {graphicsItems.map((item, index) => (
                <div
                  key={index}
                  className="portfolio-item cursor-pointer overflow-hidden rounded-[1.5rem] bg-white/90"
                  onClick={() => openLightbox(item.fullSrc)}
                  data-testid={`graphics-item-${index}`}
                >
                  <img src={item.src} alt={item.title} className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="mb-2 font-semibold text-navy" data-testid={`graphics-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-warm-gray" data-testid={`graphics-description-${index}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "websites" && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4" data-testid="websites-gallery">
              {websiteItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-panel overflow-hidden rounded-[1.75rem]"
                  data-testid={`website-item-${index}`}
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img
                      src={item.screenshot}
                      alt={`${item.title} website screenshot`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                      data-testid={`website-screenshot-${index}`}
                    />
                    <div className={`absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t ${item.accent}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/80 p-3 text-navy shadow-sm">
                        <Globe size={22} />
                    </div>
                    <div className="absolute right-5 top-5 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-warm-gray">
                      Live Site
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="font-serif text-3xl font-semibold text-white" data-testid={`website-title-${index}`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="mb-5 text-sm leading-7 text-warm-gray" data-testid={`website-description-${index}`}>
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-warm-gray shadow-sm"
                          data-testid={`website-highlight-${index}-${highlightIndex}`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-blue-accent">
                      Visit site
                      <ExternalLink className="ml-2" size={16} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
