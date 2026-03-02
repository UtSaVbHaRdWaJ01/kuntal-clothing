import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="animate-reveal relative">
            <div className="relative overflow-hidden">
              <img
                src={aboutImage}
                alt="Kuntal Outfit - Premium men's fashion"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-primary/20" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10" />
          </div>

          {/* Content */}
          <div className="animate-reveal" style={{ transitionDelay: "0.2s" }}>
            <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Redefining Men's Fashion in{" "}
              <span className="gradient-gold-text">Agra</span>
            </h2>
            <div className="gold-line mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              At Kuntal Outfit, we believe every man deserves to look and feel premium without breaking the bank. 
              Located at the heart of Agra near Kargil Chauraha, we bring you handpicked collections of shirts, 
              denim, lining shirts, and round neck t-shirts — all crafted with premium fabrics and modern designs.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our commitment to quality and affordability has earned us a stellar 4.8-star rating from 61+ 
              satisfied customers who keep coming back for the best collection at the best prices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "4.8★", label: "Rating" },
                { value: "61+", label: "Reviews" },
                { value: "100%", label: "Premium" },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass-card py-4 px-2">
                  <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="font-body text-xs text-muted-foreground tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
