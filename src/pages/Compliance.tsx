import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Globe, BookOpen, Handshake, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const complianceItems = [
  {
    icon: Shield,
    title: "Alignment with UAE Cyber Security Council Guidelines",
    description: "Our solutions and practices align with the UAE Cyber Security Council's guidelines and national cybersecurity strategy, helping you meet local regulatory expectations and protect critical assets.",
  },
  {
    icon: Globe,
    title: "Data Residency and Sovereignty Compliance",
    description: "We design and implement architectures that respect data residency and sovereignty requirements, including UAE and regional mandates, so your data stays where it is required and remains compliant.",
  },
  {
    icon: BookOpen,
    title: "Information Service Management Standards and Frameworks",
    description: "We apply established standards and frameworks—such as ITIL, ISO 20000, and related ISM practices—to deliver consistent, measurable service quality and continuous improvement.",
  },
  {
    icon: Handshake,
    title: "Vendor Governance",
    description: "Structured vendor governance ensures third-party products and services are selected, monitored, and managed in line with your risk appetite and compliance obligations.",
  },
  {
    icon: CheckCircle,
    title: "IT Risk Management Best Practices",
    description: "We embed IT risk management best practices across the lifecycle—from assessment and treatment to monitoring and reporting—so risks are identified, owned, and managed effectively.",
  },
];

const Compliance = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Blue gradient banner */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 bg-gradient-to-r from-[hsl(210,80%,20%)] to-[hsl(203,94%,40%)] relative">
        <div className="container px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4"
          >
            Regulatory, Risks & Compliance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base text-white/80 max-w-3xl mx-auto"
          >
            We align our delivery and operations with leading regulatory frameworks, security guidelines, and risk management best practices—so your solutions stay secure, compliant, and fit for the UAE and global markets.
          </motion.p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {complianceItems.map((item, i) => (
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

export default Compliance;
