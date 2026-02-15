import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about-us" className="py-16 sm:py-24 section-dark">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            About <span className="gradient-text">Tekvion</span>
          </h2>
          <p className="text-lg opacity-60 max-w-3xl mx-auto">
            We design and deliver end-to-end digital transformation solutions—strategy, cloud, data, and automation—helping organizations modernize, scale, and achieve measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg bg-card border border-border tech-glow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-4">Our Vision</h3>
            <p className="opacity-60 leading-relaxed">
              To empower businesses with digital capabilities that unlock new value, improve customer experiences, and create sustainable competitive advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg bg-card border border-border tech-glow"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-4">Our Mission</h3>
            <p className="opacity-60 leading-relaxed">
              Deliver end-to-end transformation by combining strategy, engineering, and design—building trusted platforms and intelligent products that scale.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
