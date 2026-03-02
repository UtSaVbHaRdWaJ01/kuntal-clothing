import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold gradient-gold-text mb-2">KUNTAL</h3>
            <p className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">Outfit</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Premium Fashion. Affordable Luxury. Your trusted men's fashion destination in Agra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="gold-line mb-4" />
            <div className="space-y-2">
              {["#home", "#about", "#collection", "#reviews", "#contact"].map((href) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors capitalize"
                >
                  {href.replace("#", "")}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="gold-line mb-4" />
            <div className="space-y-3">
              <a href="tel:+918279984946" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +91 82799 84946
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Kargil Chauraha, Agra, UP 282007</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="gold-line mb-4" />
            <a
              href="https://www.instagram.com/kuntal_outfits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" /> @kuntal_outfits
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kuntal Outfit. All rights reserved. | Premium Men's Fashion, Agra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
