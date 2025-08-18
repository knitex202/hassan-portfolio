import { X, ExternalLink } from "lucide-react";

export default function EmailModal() {
  const closeEmailModal = () => {
    const modal = document.getElementById('email-modal') as HTMLElement;
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeEmailModal();
    }
  };

  return (
    <div 
      id="email-modal" 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center modal"
      onClick={handleBackdropClick}
      data-testid="email-modal"
    >
      <div className="bg-white rounded-2xl max-w-2xl max-h-[90vh] overflow-y-auto m-4 w-full">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold text-navy" id="modal-title" data-testid="modal-title">
            Email Preview
          </h3>
          <button 
            onClick={closeEmailModal} 
            className="text-warm-gray hover:text-navy"
            data-testid="modal-close"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6" id="modal-content" data-testid="modal-content">
          {/* Email content will be inserted here */}
        </div>
        <div className="p-6 border-t bg-slate-50 flex justify-end space-x-3">
          <button 
            onClick={closeEmailModal} 
            className="px-6 py-2 text-warm-gray hover:text-navy"
            data-testid="modal-cancel"
          >
            Cancel
          </button>
          <a 
            id="donate-link" 
            href="#" 
            target="_blank" 
            className="bg-blue-accent hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center"
            data-testid="modal-donate-link"
          >
            <ExternalLink className="mr-2" size={16} />
            View Donation Page
          </a>
        </div>
      </div>
    </div>
  );
}
