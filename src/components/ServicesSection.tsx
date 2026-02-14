import { motion } from "framer-motion";
import serviceAi from "@/assets/service-ai.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceData from "@/assets/service-data.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import {
  Database,
  Globe,
  Cog,
  Monitor,
} from "lucide-react";

const services = [
  {
    title: "AI & Machine Learning",
    description: "Applied AI and ML solutions to automate decisions, personalize experiences and unlock new revenue streams.",
    image: serviceAi,
  },
  {
    title: "Cloud Computing",
    description: "Cloud strategy, migration and managed services to build resilient, scalable platforms for modern apps.",
    image: serviceCloud,
  },
  {
    title: "Big Data & Analytics",
    description: "Scalable data platforms and analytics pipelines that turn raw data into actionable business insight.",
    image: serviceData,
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security services to protect data, secure applications and manage risk across your estate.",
    image: serviceSecurity,
  },
  {
    title: "API & Integration",
    description: "Connect platforms and workflows with secure APIs, integrations, and scalable orchestration.",
    icon: Database,
  },
  {
    title: "Mobile & Web Development",
    description: "Modern web and mobile products with exceptional UX, scalable architecture and rapid delivery.",
    icon: Globe,
  },
  {
    title: "Intelligent Automation",
    description: "Streamline operations with workflow automation, RPA, and AI-driven process optimization.",
    icon: Cog,
  },
  {
    title: "IT & Infrastructure",
    description: "Resilient infrastructure, observability, and managed services to keep systems secure and fast.",
    icon: Monitor,
  },
];

const ServicesSection = () => {
  return (
    <section id="what-we-do" className="py-24 section-light relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-primary/5 animate-float" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-primary/3 animate-float" style={{ animationDelay: "3s" }} />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We design and deliver end-to-end digital transformation solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-lg overflow-hidden tech-glow border border-border hover:border-primary/30 transition-all"
            >
              {service.image ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  {service.icon && <service.icon className="w-16 h-16 text-primary" />}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold font-display text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
