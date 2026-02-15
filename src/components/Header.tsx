import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import tekvionLogo from "@/assets/tekvion-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about-us", scrollTo: "about-us" },
  { label: "What we do", href: "/#what-we-do", scrollTo: "what-we-do" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Compliance", href: "/compliance" },
  { label: "Value Proposition", href: "/value-proposition" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (item: typeof navItems[0]) => {
    setMobileOpen(false);
    if (item.scrollTo && location.pathname === "/") {
      const el = document.getElementById(item.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(220,20%,12%)]/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={tekvionLogo} alt="TekVion Technology" className="h-10" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => handleNavClick(item)}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="text-sm font-semibold text-white hover:text-primary transition-colors ml-4"
          >
            Login
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-2 w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-primary/10 text-white/70 hover:text-primary transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-primary/10 text-white/70 hover:text-primary transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[hsl(220,20%,12%)]/95 backdrop-blur-md border-t border-white/5 px-4 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => handleNavClick(item)}
              className="block py-3 text-sm text-white/70 hover:text-primary transition-colors border-b border-white/5"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-semibold text-white hover:text-primary transition-colors"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
