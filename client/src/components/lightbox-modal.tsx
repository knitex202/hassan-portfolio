import { X } from "lucide-react";

export default function LightboxModal() {
  const closeLightbox = () => {
    const lightbox = document.getElementById('lightbox') as HTMLElement;
    if (lightbox) {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <div 
      id="lightbox" 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 hidden items-center justify-center modal"
      onClick={handleBackdropClick}
      data-testid="lightbox-modal"
    >
      <div className="relative max-w-xl max-h-full p-4">
        <button 
          onClick={closeLightbox} 
          className="absolute top-4 right-4 text-white text-2xl z-10 hover:bg-black/20 rounded-full p-2"
          data-testid="lightbox-close"
        >
          <X size={24} />
        </button>
        <img 
          id="lightbox-image" 
          src="" 
          alt="" 
          className="max-w-full max-h-full object-contain "
          data-testid="lightbox-image"
        />
      </div>
    </div>
  );
}
