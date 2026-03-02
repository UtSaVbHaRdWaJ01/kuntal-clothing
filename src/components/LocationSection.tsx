import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-reveal">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">Find Us</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Visit Our <span className="gradient-gold-text">Store</span>
          </h2>
          <div className="gold-line-center" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="animate-reveal overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.5!2d77.98!3d27.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEwJzQ4LjAiTiA3N8KwNTgnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kuntal Outfit Location"
            />
          </div>

          {/* Info */}
          <div className="animate-reveal space-y-8" style={{ transitionDelay: "0.2s" }}>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Address</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  UG-1, Anna Ikon Complex, Bodla Sikandra Road,<br />
                  Kargil Chauraha, Opp. Deviram Food Circle,<br />
                  Agra, Uttar Pradesh 282007
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:+918279984946"
                  className="font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 82799 84946
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Opening Hours</h3>
                <p className="font-body text-muted-foreground">
                  Open Daily: 10:30 AM onwards
                </p>
              </div>
            </div>

            <a
              href="tel:+918279984946"
              className="inline-flex items-center gap-2 font-body px-8 py-4 gradient-gold-bg text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
