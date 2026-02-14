import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about-us", scrollTo: "about-us" },
  { label: "What We Do", href: "/#what-we-do", scrollTo: "what-we-do" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Compliance", href: "/compliance" },
  { label: "About Company", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Login", href: "/login" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-nav/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold font-display tracking-wide text-foreground">
            TEK<span className="text-primary">VION</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => handleNavClick(item)}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 w-9 h-9 rounded-full flex items-center justify-center bg-muted hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-muted hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-nav/95 backdrop-blur-md border-t border-primary/10 px-4 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => handleNavClick(item)}
              className="block py-3 text-sm text-foreground/70 hover:text-primary transition-colors border-b border-primary/5"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
