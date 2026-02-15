import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bannerContact from "@/assets/banner-contact.jpg";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { contactSchema, checkRateLimit } from "@/lib/validation";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse({ name, email, phone, message });
    if (!result.success) {
      toast.error(result.error.errors[0]?.message || "Invalid input");
      return;
    }

    if (!checkRateLimit("contact-form")) {
      toast.error("Too many submissions. Please wait a moment.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: result.data.name,
      phone: result.data.phone || "",
      email: result.data.email,
      message: result.data.message,
    });
    setLoading(false);

    if (error) {
      toast.error("Failed to send message");
    } else {
      toast.success("Message sent successfully!");
      setName(""); setPhone(""); setEmail(""); setMessage("");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerContact} alt="Contact TekVion" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,80%,15%)]/90 to-[hsl(203,94%,30%)]/80" />
        </div>
        <div className="container px-4 relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4 text-center">Contact Us</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-base text-white/80 max-w-2xl mx-auto text-center">Get in touch with our team to discuss your project needs.</motion.p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-2">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary mb-10" />
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={handleSubmit} className="space-y-5">
            <input type="text" placeholder="Name" required maxLength={100} value={name} onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            <input type="tel" placeholder="Phone Number" maxLength={20} value={phone} onChange={(e) => setPhone(e.target.value)}
              className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            <input type="email" placeholder="Email" required maxLength={255} value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            <textarea placeholder="Message" rows={5} required maxLength={2000} value={message} onChange={(e) => setMessage(e.target.value)}
              className="w-full px-5 py-4 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
            <button type="submit" disabled={loading}
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary-dark transition-colors uppercase tracking-wide text-sm disabled:opacity-60">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
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
