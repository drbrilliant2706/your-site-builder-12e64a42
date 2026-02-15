import { motion } from "framer-motion";
import { Users, Cpu, Trophy } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    stat: "100%",
    description: "Certified professionals with deep expertise in AI, cloud, data engineering, and digital transformation.",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    stat: "Latest",
    description: "We leverage cutting-edge technologies and best practices to deliver scalable, future-proof solutions.",
  },
  {
    icon: Trophy,
    title: "Client Success",
    stat: "Guaranteed",
    description: "Dedicated partnership approach ensuring measurable business outcomes and ROI for every project.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 sm:py-24 section-light relative overflow-hidden">
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Why Choose <span className="gradient-text">Tekvion</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We bring fresh perspectives, cutting-edge expertise, and unwavering commitment to transform your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 rounded-lg bg-card border border-border tech-glow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-display text-foreground mb-2">{reason.title}</h3>
              <p className="text-3xl font-bold gradient-text mb-4">{reason.stat}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
