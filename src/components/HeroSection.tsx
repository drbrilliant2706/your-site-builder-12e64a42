import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const slides = [
  {
    title: "Innovating with AI & Cloud",
    description: "We deliver AI, cloud and automation solutions to accelerate business outcomes and drive measurable value.",
  },
  {
    title: "Cloud-Native Platforms",
    description: "Build and operate resilient cloud platforms that scale with your business and reduce time-to-market.",
  },
  {
    title: "Data & Analytics at Scale",
    description: "Turn data into actionable insights with analytics, machine learning and trustworthy data platforms.",
  },
  {
    title: "Digital Transformation Solutions",
    description: "We design and deliver end-to-end digital transformation — strategy, cloud, data and automation to drive measurable business outcomes.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-hero/60 via-hero/40 to-hero" />

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-primary-foreground leading-tight mb-6">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed">
              {slides[current].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about-us"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary-dark transition-colors"
              >
                About Company
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex gap-3 mt-16">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current
                  ? "bg-primary w-8"
                  : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
