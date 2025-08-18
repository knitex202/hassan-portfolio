import { useState } from "react";
import { Camera, Video, Play, Palette, ExternalLink } from "lucide-react";
import kamalaRally from "../assets/kamala-rally.jpg";
import kCommunity from "../assets/kamala-community.jpg"
import theScenes from "../assets/behind-the-scenes.jpg";
import eventDocumentation from "../assets/event-documentation.jpg";
import rapidResponse from "../assets/rapid-response.jpg";
import campaignTrail from "../assets/campaign-trail.jpg";
import polAd from "../assets/political-ad.png";
import eventPoster from "../assets/event-poster.png";
import socialGraphics from "../assets/social-graphics.jpg";
import orangeLogo from "../assets/orange-logo.png";
import posterDesign from "../assets/poster-design.jpg";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<'photography' | 'videography' | 'graphics'>('photography');

  const photographyItems = [
    {
      src: kamalaRally,
      fullSrc: kamalaRally,
      title: "Campaign Rally Coverage",
      description: "High-energy political event photography"
    },
    {
      src: rapidResponse,
      fullSrc: rapidResponse,
      title: "Rapid Response",
      description: "5-minute turnaround for urgent coverage"
    },
    {
      src: eventDocumentation,
      fullSrc: eventDocumentation,
      title: "Event Documentation",
      description: "Comprehensive event coverage"
    },
    {
      src: kCommunity,
      fullSrc: kCommunity,
      title: "Community Documentation",
      description: "Grassroots movement photography"
    },
    {
      src: campaignTrail,
      fullSrc: campaignTrail,
      title: "Motorcade Coverage",
      description: "Presidential campaign trail documentation"
    },
    {
      src: theScenes,
      fullSrc: theScenes,
      title: "Behind the Scenes",
      description: "Campaign headquarters documentation"
    }
  ];

  const videographyItems = [
    {
      title: "Campaign Video Content",
      description: "Professional political campaign video showcasing event coverage and strategic messaging",
      duration: "Video",
      instagramUrl: "https://www.instagram.com/p/DACU9Brs2r4/",
      thumbnail: "https://scontent-dfw5-1.cdninstagram.com/v/t51.71878-15/503599430_29993995906880689_2362332151578866036_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzQ1OTQxOTYxODM5OTE4NTY1NjI5OTkzOTk1ODMzNTQ3MzYz.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=nF0azkZpB-IQ7kNvwHANS5Q&_nc_oc=AdkQVLLu92nkdmxBbQLqjxiqf98Y-waV6SywDGQTJoclodieIpNgj2dlW6TEDKpvGhw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_gid=DDfRuW9zFWnPQIrWny2hvw&oh=00_AfWRTWQ_PhVTGJuB9r98fKo7UB7TEvzcxy8Yy7GXJwpl-Q&oe=68A8F015"
    },
    {
      title: "Digital Campaign Advertisement",
      description: "Strategic messaging and visual storytelling for political campaign",
      duration: "2:30",
      instagramUrl: "https://www.instagram.com/p/DAq9gQSNOPA/",
      thumbnail: "https://scontent-dfw5-2.cdninstagram.com/v/t51.71878-15/500062344_1243327980819106_3045141162450554754_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzQ3MDg1Njk2MDE4ODE0NjYyNDEyNDMzMjc5NDA4MTkxMTA%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=UEtC08XMyPoQ7kNvwEFh25j&_nc_oc=AdkfVxPX8L5Vh-VzmyW16CE-WrEVzKZ76IZwb_qahMgD1U_IOQjkdD_EmDk5TiIwYtU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_gid=drN_nlFn0u1JKYqTl_kaAA&oh=00_AfUbNb388Ay8L-oAdoUwLQDncj1dKR-OEads9u2L2IDQSQ&oe=68A90BEF"
    },
    {
      title: "Social Media Video Content",
      description: "Short-form content optimized for digital platforms",
      duration: "Multiple clips",
      instagramUrl: "https://www.instagram.com/p/DAccta4osKb/",
      thumbnail: "https://scontent-dfw5-2.cdninstagram.com/v/t51.71878-15/503154039_701621156142136_8807042988477289139_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzQ2Njc3MjA3OTcxNDY4MTQ5OTcwMTYyMTE0NjE0MjEzNw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=AlUyx_He144Q7kNvwHrdhnL&_nc_oc=AdlwDNMArSfiFnE0bf404oJMdJexRTw2I_rqvIFpORFXB2o9kxa5ew1tll4bLvLm6_8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_gid=VWYuuUU-OAFHGwvkpyrbow&oh=00_AfWZU2kmNMB7LBDmM8ezuI-UxZNULF7UyedoNisQpZIsgw&oe=68A90C1F"
    }
  ];

  const graphicsItems = [
    {
      src: orangeLogo,
      fullSrc: orangeLogo,
      title: "Campaign Logo Design",
      description: "Professional branding for political campaigns"
    },
    {
      src: socialGraphics,
      fullSrc: socialGraphics,
      title: "Social Media Graphics",
      description: "Engaging digital content for social platforms"
    },
    {
      src: eventPoster,
      fullSrc: eventPoster,
      title: "Event Posters",
      description: "Eye-catching promotional materials"
    },
    {
      src: polAd,
      fullSrc: polAd,
      title: "Digital Infographics",
      description: "Data visualization and policy explanations"
    },
    {
      src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      fullSrc: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      title: "Website Design Mockups",
      description: "User interface design for campaign websites"
    },
    {
      src: posterDesign,
      fullSrc: posterDesign,
      title: "Print Campaign Materials",
      description: "Brochures, flyers, and direct mail design"
    }
  ];

  const openLightbox = (src: string) => {
    const lightbox = document.getElementById('lightbox') as HTMLElement;
    const lightboxImage = document.getElementById('lightbox-image') as HTMLImageElement;
    if (lightbox && lightboxImage) {
      lightboxImage.src = src;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center" data-testid="portfolio-title">
            Portfolio
          </h2>
          
          {/* Portfolio Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 p-1 rounded-lg">
              <button 
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'photography' 
                    ? 'bg-blue-accent text-white' 
                    : 'text-warm-gray hover:text-navy'
                }`}
                onClick={() => setActiveTab('photography')}
                data-testid="tab-photography"
              >
                <Camera className="inline mr-2" size={20} />
                Photography
              </button>
              <button 
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'videography' 
                    ? 'bg-blue-accent text-white' 
                    : 'text-warm-gray hover:text-navy'
                }`}
                onClick={() => setActiveTab('videography')}
                data-testid="tab-videography"
              >
                <Video className="inline mr-2" size={20} />
                Videography
              </button>
              <button 
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'graphics' 
                    ? 'bg-blue-accent text-white' 
                    : 'text-warm-gray hover:text-navy'
                }`}
                onClick={() => setActiveTab('graphics')}
                data-testid="tab-graphics"
              >
                <Palette className="inline mr-2" size={20} />
                Graphics
              </button>
            </div>
          </div>

          {/* Photography Portfolio */}
          {activeTab === 'photography' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="photography-gallery">
              {photographyItems.map((item, index) => (
                <div 
                  key={index}
                  className="portfolio-item bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(item.fullSrc)}
                  data-testid={`photo-item-${index}`}
                >
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-navy mb-2" data-testid={`photo-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-warm-gray text-sm" data-testid={`photo-description-${index}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videography Portfolio */}
          {activeTab === 'videography' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-testid="videography-gallery">
              {videographyItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  data-testid={`video-item-${index}`}
                >
                  {item.instagramUrl && item.thumbnail ? (
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <Play className="text-white" size={48} />
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video bg-slate-200 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="text-4xl text-blue-accent mb-2 mx-auto" size={48} />
                        <p className="text-warm-gray" data-testid={`video-title-${index}`}>
                          {item.title}
                        </p>
                        <p className="text-sm text-warm-gray" data-testid={`video-duration-${index}`}>
                          {item.duration}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-semibold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-warm-gray text-sm mb-4" data-testid={`video-description-${index}`}>
                      {item.description}
                    </p>
                    {item.instagramUrl && (
                      <a 
                        href={item.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
                        data-testid={`instagram-link-${index}`}
                      >
                        <ExternalLink className="mr-2" size={16} />
                        View on Instagram
                      </a>
                    )}
                    {!item.instagramUrl && (
                      <p className="text-sm text-warm-gray" data-testid={`video-duration-${index}`}>
                        Duration: {item.duration}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Graphics Portfolio */}
          {activeTab === 'graphics' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="graphics-gallery">
              {graphicsItems.map((item, index) => (
                <div 
                  key={index}
                  className="portfolio-item bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(item.fullSrc)}
                  data-testid={`graphics-item-${index}`}
                >
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-navy mb-2" data-testid={`graphics-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-warm-gray text-sm" data-testid={`graphics-description-${index}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
