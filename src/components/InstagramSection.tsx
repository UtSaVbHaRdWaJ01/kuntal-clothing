import { Instagram } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto text-center animate-reveal">
        <Instagram className="w-12 h-12 text-primary mx-auto mb-6" />
        <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">Follow Us</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Stay <span className="gradient-gold-text">Connected</span>
        </h2>
        <div className="gold-line-center mb-6" />
        <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8">
          Follow us on Instagram for the latest arrivals, styling tips, and exclusive behind-the-scenes content.
        </p>
        <a
          href="https://www.instagram.com/kuntal_outfits"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-body px-8 py-4 gradient-gold-bg text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity duration-300"
        >
          <Instagram className="w-5 h-5" />
          @kuntal_outfits
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
