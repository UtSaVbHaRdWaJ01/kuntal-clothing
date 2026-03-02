import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) { toast.error("Please enter your name"); return; }
    if (!form.phone.trim() || form.phone.length < 10) { toast.error("Please enter a valid phone number"); return; }
    if (!form.message.trim()) { toast.error("Please enter a message"); return; }

    // Open WhatsApp with the message
    const text = `Hi, I'm ${form.name}. ${form.message} (Phone: ${form.phone})`;
    window.open(`https://wa.me/918279984946?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 animate-reveal">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact <span className="gradient-gold-text">Us</span>
          </h2>
          <div className="gold-line-center" />
        </div>

        <form onSubmit={handleSubmit} className="animate-reveal space-y-6 glass-card p-8 md:p-10">
          <div>
            <label className="font-body text-sm text-muted-foreground tracking-wider uppercase block mb-2">
              Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background border border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground tracking-wider uppercase block mb-2">
              Phone
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-background border border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground tracking-wider uppercase block mb-2">
              Message
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full bg-background border border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="w-full font-body py-4 gradient-gold-bg text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity duration-300"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
