import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nafidh",
    text: "Tekvion transformed our digital infrastructure with their exceptional cloud and AI solutions. Their end-to-end approach to digital transformation delivered measurable business outcomes within months. Highly recommended.",
  },
  {
    name: "Ahmed",
    text: "The team at Tekvion provided outstanding cybersecurity and cloud migration services. Their expertise and dedication to client success is unmatched in the region.",
  },
  {
    name: "Sarah",
    text: "Working with Tekvion on our data analytics platform was a game-changer. They delivered a scalable, future-proof solution that exceeded our expectations.",
  },
];

const ContactSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section id="contact" className="py-24 section-dark">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display mb-8">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary-dark transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Now
              </button>
            </form>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display mb-8">
              What Clients <span className="gradient-text">Say</span>
            </h2>
            <div className="relative p-8 rounded-lg bg-card border border-border min-h-[280px]">
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="opacity-70 leading-relaxed mb-6 text-lg">
                {testimonials[currentTestimonial].text}
              </p>
              <p className="font-bold font-display text-xl text-primary">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentTestimonial
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
