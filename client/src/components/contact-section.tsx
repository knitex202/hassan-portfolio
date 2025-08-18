import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12" data-testid="contact-title">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 mb-12" data-testid="contact-description">
            Ready to bring your digital strategy to life? Let's discuss how my expertise in 
            content creation, development, and campaign management can help achieve your goals.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center" data-testid="contact-email">
              <div className="bg-blue-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-slate-300">knitex303@gmail.com</p>
            </div>
            <div className="text-center" data-testid="contact-phone">
              <div className="bg-blue-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-slate-300">(737) 314-7528</p>
            </div>
            <div className="text-center" data-testid="contact-location">
              <div className="bg-blue-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-slate-300">Round Rock, TX</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:knitex303@gmail.com" 
              className="bg-blue-accent hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
              data-testid="button-send-email"
            >
              <Mail className="inline mr-2" size={20} />
              Send Email
            </a>
            <a 
              href="tel:7373147528" 
              className="border border-white hover:bg-white hover:text-navy px-8 py-3 rounded-lg font-semibold transition-colors"
              data-testid="button-call-now"
            >
              <Phone className="inline mr-2" size={20} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
