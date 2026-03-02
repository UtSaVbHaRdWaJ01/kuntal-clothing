import productShirt from "@/assets/product-shirt.jpg";
import productDenim from "@/assets/product-denim.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";
import productLining from "@/assets/product-lining.jpg";

const products = [
  { image: productShirt, title: "Premium Shirts", desc: "Handpicked fabrics, tailored fits", tag: "Bestseller" },
  { image: productDenim, title: "Designer Denim", desc: "Premium stretch, perfect wash", tag: "New" },
  { image: productTshirt, title: "Round Neck T-Shirts", desc: "Comfort meets contemporary style", tag: "Popular" },
  { image: productLining, title: "Lining Shirts", desc: "Elegant patterns, formal excellence", tag: "Classic" },
];

const ProductSection = () => {
  return (
    <section id="collection" className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-reveal">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">Our Collection</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Curated for the <span className="gradient-gold-text">Modern Man</span>
          </h2>
          <div className="gold-line-center mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked collection of premium men's wear — designed for style, crafted for comfort.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={product.title}
              className="animate-reveal group relative overflow-hidden bg-card hover-lift"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tag */}
                <span className="absolute top-4 left-4 font-body text-xs tracking-wider uppercase px-3 py-1 gradient-gold-bg text-primary-foreground font-semibold">
                  {product.tag}
                </span>

                {/* Hover overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <a
                    href="https://wa.me/918279984946"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center font-body text-sm py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all tracking-wider uppercase"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{product.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
