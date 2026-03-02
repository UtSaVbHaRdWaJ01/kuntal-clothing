const reviews = [
  { name: "Rahul S.", text: "Best collection and best quality at very affordable rates. Must visit!", rating: 5 },
  { name: "Amit K.", text: "Nice collection with great prices. The staff is very helpful and friendly.", rating: 5 },
  { name: "Vikram P.", text: "Premium fabric and stylish designs. My go-to store for all occasions.", rating: 5 },
  { name: "Deepak M.", text: "Amazing quality shirts and denim. The best men's store in Agra!", rating: 4 },
  { name: "Saurabh J.", text: "Visited for the first time and was blown away by the collection. Will come again!", rating: 5 },
  { name: "Prashant R.", text: "Great variety of lining shirts. Perfect for office wear at great prices.", rating: 5 },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i <= rating ? "text-primary fill-primary" : "text-muted fill-muted"}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-reveal">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="gradient-gold-text">Customers</span> Say
          </h2>
          <div className="gold-line-center mb-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="animate-reveal glass-card p-6 hover-lift"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <StarRating rating={review.rating} />
              <p className="font-body text-foreground/80 mt-4 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-gold-bg flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                  {review.name[0]}
                </div>
                <span className="font-body text-sm font-medium text-foreground">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
