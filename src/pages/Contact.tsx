import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-2">
              Get In Touch
            </h1>
            <div className="w-16 h-1 bg-primary mb-10" />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary-dark transition-colors uppercase tracking-wide text-sm"
            >
              Send Now
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
