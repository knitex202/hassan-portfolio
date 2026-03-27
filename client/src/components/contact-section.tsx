import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="hero-gradient overflow-hidden rounded-[2.25rem] px-8 py-14 text-center text-white shadow-2xl md:px-12">
          <h2 className="font-serif text-4xl font-semibold md:text-5xl" data-testid="contact-title">
            Let's Work Together
          </h2>
          <p className="mx-auto mb-12 mt-5 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl" data-testid="contact-description">
            Ready to bring your digital strategy to life? I help teams ship campaigns, websites,
            mobile products, and audience-first experiences like Trendr Social with both strong execution and strong taste.
          </p>
          
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 text-center backdrop-blur" data-testid="contact-email">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-300 text-navy">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-slate-300">knitex303@gmail.com</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 text-center backdrop-blur" data-testid="contact-phone">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-300 text-navy">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-slate-300">(737) 314-7528</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 text-center backdrop-blur" data-testid="contact-location">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-300 text-navy">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-slate-300">Round Rock, TX</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a 
              href="mailto:knitex303@gmail.com" 
              className="rounded-full bg-amber-300 px-8 py-4 font-semibold text-navy transition-colors hover:bg-amber-200"
              data-testid="button-send-email"
            >
              <Mail className="inline mr-2" size={20} />
              Send Email
            </a>
            <a 
              href="tel:7373147528" 
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-navy"
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
