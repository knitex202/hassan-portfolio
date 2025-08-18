import { useState } from "react";
import { Camera, Video, Play, Palette } from "lucide-react";
import kamalaRally from "../assets/kamala-rally.jpg";
import kCommunity from "../assets/kamala-community.jpg"
import theScenes from "../assets/behind-the-scenes.jpg";
import eventDocumentation from "../assets/event-documentation.jpg";
import rapidResponse from "../assets/rapid-response.jpg";
import campaignTrail from "../assets/campaign-trail.jpg";

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
      title: "Digital Campaign Advertisement",
      description: "Strategic messaging and visual storytelling for political campaign",
      duration: "2:30"
    },
    {
      title: "Campaign Event Highlights",
      description: "Comprehensive coverage of major political events and rallies",
      duration: "4:15"
    },
    {
      title: "Candidate Interview Series",
      description: "Professional interviews and documentary-style content",
      duration: "15:45"
    },
    {
      title: "Social Media Video Content",
      description: "Short-form content optimized for digital platforms",
      duration: "Multiple clips"
    }
  ];

  const graphicsItems = [
    {
      src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      fullSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      title: "Campaign Logo Design",
      description: "Professional branding for political campaigns"
    },
    {
      src: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      fullSrc: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      title: "Social Media Graphics",
      description: "Engaging digital content for social platforms"
    },
    {
      src: "https://images.unsplash.com/photo-1558655146-364adaf25c27?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      fullSrc: "https://images.unsplash.com/photo-1558655146-364adaf25c27?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      title: "Event Posters",
      description: "Eye-catching promotional materials"
    },
    {
      src: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      fullSrc: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
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
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      fullSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
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
                  <div className="p-6">
                    <h3 className="font-semibold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-warm-gray text-sm" data-testid={`video-description-${index}`}>
                      {item.description}
                    </p>
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
