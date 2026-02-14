import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer pt-16 pb-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & newsletter */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold font-display tracking-wide text-primary-foreground">
                TEK<span className="text-primary">VION</span>
              </span>
            </Link>
            <p className="text-primary-foreground/50 text-sm mb-6 max-w-sm">
              Dubai-based technology consulting delivering high-impact AI, cloud, and digital transformation solutions.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card-dark border border-card-dark-border/30 text-primary-foreground placeholder:text-primary-foreground/30 rounded-l-sm text-sm focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground font-semibold text-sm rounded-r-sm hover:brightness-110 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold font-display text-primary-foreground mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "What We Do", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href={link === "Home" ? "/" : `/#${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-primary-foreground/50 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/50 hover:text-primary transition-colors">
                  About Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-display text-primary-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/50">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                Sapphire Tower, Dubai, UAE
              </li>
              <li>
                <a href="tel:+971522900966" className="flex items-center gap-3 text-sm text-primary-foreground/50 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  +971 522 900 966
                </a>
              </li>
              <li>
                <a href="mailto:Info@tekvion.ae" className="flex items-center gap-3 text-sm text-primary-foreground/50 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  Info@tekvion.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © 2026 All Rights Reserved. TekVion Technologies
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/40 hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
