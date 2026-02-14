import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Blue gradient banner */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-[hsl(210,80%,20%)] to-[hsl(203,94%,40%)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
        <div className="container px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display text-white mb-4"
          >
            About Tekvion
          </motion.h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base text-white/80 max-w-3xl mx-auto"
          >
            We partner with organizations to design, build, and scale digital products and platforms that deliver measurable business impact.
          </motion.p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-10 rounded-lg bg-card border border-border shadow-sm"
          >
            <h2 className="text-2xl font-bold font-display text-foreground mb-2">Executive Summary</h2>
            <p className="text-primary font-semibold text-sm mb-6 uppercase tracking-wide">TEKVION TECHNOLOGY L.L.C</p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              is a Dubai-based technology consulting and services company delivering high-impact solutions across IT infrastructure, cloud, cybersecurity, artificial intelligence, and data-driven platforms. Licensed by the Department of Economy & Tourism – Dubai, Tekvion combines strategic consulting, digital transformation solution design and implementation, and managed services to help organizations modernize operations, secure digital assets, and turn technology into a measurable business advantage in line with the UAE government's mission for the IT sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-card border border-border shadow-sm"
            >
              <h3 className="text-xl font-bold font-display text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To be the most trusted technology partner for growth—helping businesses use data, cloud, and automation to innovate faster, operate smarter, and deliver exceptional customer experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-card border border-border shadow-sm"
            >
              <h3 className="text-xl font-bold font-display text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
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
