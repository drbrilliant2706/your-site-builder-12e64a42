import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 section-dark">
        <div className="container px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-display mb-6"
          >
            About <span className="gradient-text">Tekvion</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/60 max-w-3xl mx-auto"
          >
            We partner with organizations to design, build, and scale digital products and platforms that deliver measurable business impact.
          </motion.p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 section-dark">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-10 rounded-lg bg-card-dark border border-card-dark-border/30 tech-glow"
          >
            <h2 className="text-3xl font-bold font-display mb-2">Executive Summary</h2>
            <p className="text-primary font-semibold text-lg mb-6">TEKVION TECHNOLOGY L.L.C</p>
            <p className="text-primary-foreground/60 leading-relaxed">
              is a Dubai-based technology consulting and services company delivering high-impact solutions across IT infrastructure, cloud, cybersecurity, artificial intelligence, and data-driven platforms. Licensed by the Department of Economy & Tourism – Dubai, Tekvion combines strategic consulting, digital transformation solution design and implementation, and managed services to help organizations modernize operations, secure digital assets, and turn technology into a measurable business advantage in line with the UAE government's mission for the IT sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 section-dark">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-card-dark border border-card-dark-border/30 tech-glow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Our Vision</h3>
              <p className="text-primary-foreground/60 leading-relaxed">
                To be the most trusted technology partner for growth—helping businesses use data, cloud, and automation to innovate faster, operate smarter, and deliver exceptional customer experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-card-dark border border-card-dark-border/30 tech-glow"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Our Mission</h3>
              <p className="text-primary-foreground/60 leading-relaxed">
                We deliver end-to-end digital transformation by combining strategy, engineering, and design. From discovery to deployment, we build secure, scalable solutions that accelerate outcomes and create lasting value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
