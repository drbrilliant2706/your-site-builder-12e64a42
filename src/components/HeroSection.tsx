import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";
import TypedText from "./TypedText";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";

const fallbackSlides = [
  { title: "Innovating with AI & Cloud", description: "We deliver AI, cloud and automation solutions to accelerate business outcomes and drive measurable value." },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState(fallbackSlides);
  const { t } = useTranslation();

  useEffect(() => {
    supabase.from("hero_slides").select("title, description").eq("is_active", true).order("sort_order").then(({ data }) => {
      if (data && data.length > 0) setSlides(data);
    });
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const typedStrings = t("hero.typed", { returnObjects: true }) as string[];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${heroBanner})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,40%,7%)]/80 via-[hsl(222,40%,7%)]/40 to-transparent rtl:bg-gradient-to-l" />

      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-2 rtl:left-auto rtl:right-4 md:rtl:right-6">
        {slides.map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className={`text-xs font-mono transition-all ${i === current ? "text-white" : "text-white/30"}`}>{String(i + 1).padStart(2, "0")}</span>
            {i < slides.length - 1 && <div className={`w-px h-16 my-1 transition-all ${i === current ? "bg-white" : "bg-white/20"}`} />}
          </div>
        ))}
      </div>

      <div className="container relative z-10 px-4 sm:px-6 pt-24 md:pt-20">
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight mb-2 sm:mb-4">{slides[current].title}</h1>
            <div className="text-lg sm:text-xl md:text-2xl text-primary font-display font-semibold mb-4 sm:mb-6 h-8">
              <TypedText strings={typedStrings} typeSpeed={60} backSpeed={30} backDelay={2000} />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 max-w-2xl leading-relaxed">{slides[current].description}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#about-us" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-[hsl(220,30%,10%)] font-semibold rounded-sm hover:bg-white/90 transition-colors text-sm sm:text-base">{t("hero.aboutCompany")}</a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm sm:text-base">{t("hero.contact")}</a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 mt-10 sm:mt-16">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-white w-8" : "bg-white/30 hover:bg-white/50"}`} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
