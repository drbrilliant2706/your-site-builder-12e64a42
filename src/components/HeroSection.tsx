import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";
import TypedText from "./TypedText";

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
        className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-40"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-hero/80 via-hero/60 to-hero" />

      {/* Slide number indicator on left */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-2">
        {slides.map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className={`text-xs font-mono transition-all ${i === current ? "text-white" : "text-white/30"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < slides.length - 1 && (
              <div className={`w-px h-16 my-1 transition-all ${i === current ? "bg-white" : "bg-white/20"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 pt-24 md:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight mb-2 sm:mb-4">
              {slides[current].title}
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl text-primary font-display font-semibold mb-4 sm:mb-6 h-8">
              <TypedText
                strings={["Creative Work Idea", "Cutting-edge Technology", "Beautiful Design"]}
                typeSpeed={60}
                backSpeed={30}
                backDelay={2000}
              />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              {slides[current].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#about-us"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-[hsl(220,30%,10%)] font-semibold rounded-sm hover:bg-white/90 transition-colors text-sm sm:text-base"
              >
                About Company
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm sm:text-base"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex gap-3 mt-10 sm:mt-16">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current
                  ? "bg-white w-8"
                  : "bg-white/30 hover:bg-white/50"
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
