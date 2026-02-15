import { motion } from "framer-motion";
import { Shield, TrendingUp, Lock, Diamond } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bannerValue from "@/assets/banner-value.jpg";

const items = [
  {
    icon: Shield,
    title: "UAE-compliant, governance-driven IT solutions",
    description: "Our solutions are designed to meet UAE regulatory and governance requirements. We embed compliance and governance into delivery so your IT stays aligned with local standards and best practices.",
  },
  {
    icon: TrendingUp,
    title: "Scalable services aligned with business outcomes",
    description: "We scale technology and services with your growth and objectives. From design to operations, our offerings are aligned with measurable business outcomes so you get results that matter.",
  },
  {
    icon: Lock,
    title: "Reduced operational, regulatory, and cybersecurity risk",
    description: "We help lower operational, regulatory, and cybersecurity risk through structured processes, security-by-design, and ongoing monitoring—so you can focus on growth with greater confidence.",
  },
  {
    icon: Diamond,
    title: "Sustainable, long-term technology value",
    description: "We build for the long term: architectures, practices, and partnerships that deliver sustained value, reduce waste, and keep your technology fit for the future.",
  },
];

const ValueProposition = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Blue gradient banner */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerValue} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,80%,15%)]/90 to-[hsl(203,94%,30%)]/80" />
        </div>
        <div className="container px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4"
          >
            Value Proposition
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base text-white/80 max-w-3xl mx-auto"
          >
            We deliver IT solutions that are UAE-compliant, scalable, and risk-aware—so your business gains sustainable, long-term technology value.
          </motion.p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-6 p-5 sm:p-8 rounded-lg bg-card border border-border shadow-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-foreground mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ValueProposition;
