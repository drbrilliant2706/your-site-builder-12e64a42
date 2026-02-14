import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceAi from "@/assets/service-ai.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceData from "@/assets/service-data.jpg";
import serviceSecurity from "@/assets/service-security.jpg";

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    category: "Artificial Intelligence",
    description: "End-to-end ML pipeline delivering real-time business intelligence for a leading UAE enterprise.",
    image: serviceAi,
  },
  {
    title: "Cloud Migration & Modernization",
    category: "Cloud Computing",
    description: "Migrated legacy infrastructure to a cloud-native architecture, reducing costs by 40%.",
    image: serviceCloud,
  },
  {
    title: "Enterprise Data Lake",
    category: "Big Data & Analytics",
    description: "Built a scalable data lake processing petabytes of data for actionable insights across departments.",
    image: serviceData,
  },
  {
    title: "Zero-Trust Security Framework",
    category: "Cybersecurity",
    description: "Implemented comprehensive zero-trust security across multi-cloud environments for a financial institution.",
    image: serviceSecurity,
  },
];

const Portfolio = () => {
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
            Our <span className="gradient-text">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/60 max-w-2xl mx-auto"
          >
            Showcasing our work across AI, cloud, data, and cybersecurity solutions.
          </motion.p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 section-dark">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-lg overflow-hidden bg-card-dark border border-card-dark-border/30 tech-glow"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold font-display mt-2 mb-3">{project.title}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-dark">
        <div className="container px-4 text-center">
          <p className="text-xl text-primary-foreground/70 mb-8">
            Interested in working with us?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary-dark transition-colors"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
