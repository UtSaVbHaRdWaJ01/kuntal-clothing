import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Kuntal Outfit premium men's fashion store" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-body text-sm md:text-base tracking-[0.5em] text-primary uppercase mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Premium Men's Fashion
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <span className="gradient-gold-text">Kuntal</span>
          <br />
          <span className="text-foreground">Outfit</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          Premium Fashion. Affordable Luxury.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.9s" }}>
          <a
            href="https://maps.google.com/?q=Kuntal+Outfit+Agra"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body px-8 py-4 gradient-gold-bg text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity duration-300"
          >
            Visit Store
          </a>
          <button
            onClick={() => document.querySelector("#collection")?.scrollIntoView({ behavior: "smooth" })}
            className="font-body px-8 py-4 border border-primary text-primary font-semibold tracking-wider uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Shop Collection
          </button>
        </div>

        {/* Rating badge */}
        <div className="mt-12 inline-flex items-center gap-2 glass-card px-6 py-3 animate-fade-up" style={{ animationDelay: "1.1s" }}>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map((i) => (
              <svg key={i} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-body text-sm text-primary font-semibold">4.8</span>
          <span className="font-body text-xs text-muted-foreground">(61 Reviews)</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
