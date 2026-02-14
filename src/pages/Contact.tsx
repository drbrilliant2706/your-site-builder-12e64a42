import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 section-dark">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-5 py-4 rounded-sm bg-card-dark border border-card-dark-border/30 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-sm bg-card-dark border border-card-dark-border/30 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-5 py-4 rounded-sm bg-card-dark border border-card-dark-border/30 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-5 py-4 rounded-sm bg-card-dark border border-card-dark-border/30 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary-dark transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Now
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="p-8 rounded-lg bg-card-dark border border-card-dark-border/30 tech-glow">
                <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-primary-foreground/60">Sapphire Tower, Dubai, UAE</span>
                  </li>
                  <li>
                    <a href="tel:+971522900966" className="flex items-center gap-4 text-primary-foreground/60 hover:text-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      +971 522 900 966
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Info@tekvion.ae" className="flex items-center gap-4 text-primary-foreground/60 hover:text-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      Info@tekvion.ae
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
