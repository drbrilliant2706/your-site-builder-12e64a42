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

      {/* Hero */}
      <section className="pt-32 pb-16 section-dark">
        <div className="container px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-display mb-6"
          >
            Regulatory, Risks & <span className="gradient-text">Compliance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/60 max-w-3xl mx-auto"
          >
            We align our delivery and operations with leading regulatory frameworks, security guidelines, and risk management best practices—so your solutions stay secure, compliant, and fit for the UAE and global markets.
          </motion.p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 section-dark">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="space-y-6">
            {complianceItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-8 rounded-lg bg-card-dark border border-card-dark-border/30 tech-glow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/60 leading-relaxed text-sm">{item.description}</p>
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
            Need help with regulatory alignment or risk management?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary-dark transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Compliance;
