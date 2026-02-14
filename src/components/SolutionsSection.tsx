import { motion } from "framer-motion";
import {
  Database,
  Building2,
  Cog,
  Lightbulb,
  Shield,
  Cloud,
  Leaf,
  Scale,
  Monitor,
  ListChecks,
} from "lucide-react";

const solutions = [
  { title: "Data Management", icon: Database },
  { title: "Enterprise Applications", icon: Building2 },
  { title: "Automation and Integration", icon: Cog },
  { title: "Artificial Intelligence and Agentic AI", icon: Lightbulb },
  { title: "Cybersecurity and Digital Trust", icon: Shield },
  { title: "AI Infrastructure & Cloud Sovereignty", icon: Cloud },
  { title: "Sustainable & Green Technology", icon: Leaf },
  { title: "Information Technology Governance", icon: Scale },
  { title: "Managed IT Services", icon: Monitor },
  { title: "IT Service Management", icon: ListChecks },
];

const SolutionsSection = () => {
  return (
    <section className="py-24 section-dark">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Our <span className="gradient-text">Solutions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 tech-glow transition-all cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-sm font-semibold font-display leading-tight">{solution.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
