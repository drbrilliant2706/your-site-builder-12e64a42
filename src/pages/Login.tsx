import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn } from "lucide-react";
import Header from "@/components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5 animate-[authBg_12s_ease_infinite] bg-[length:400%_400%]" />

        {/* Floating orbs */}
        <div className="absolute top-[10%] left-[5%] w-80 h-80 rounded-full bg-primary/10 blur-[60px] animate-float opacity-40" />
        <div className="absolute bottom-[15%] right-[8%] w-72 h-72 rounded-full bg-accent/10 blur-[60px] animate-float opacity-30" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-primary-dark/10 blur-[60px] animate-float opacity-25" style={{ animationDelay: "4s" }} />

        {/* Auth card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative z-10 w-full max-w-[440px] bg-card/97 backdrop-blur-xl rounded-3xl p-12 border border-primary/10 shadow-[0_25px_60px_hsl(var(--primary-dark)/0.15),0_0_40px_hsl(var(--accent)/0.06)] hover:shadow-[0_30px_70px_hsl(var(--primary)/0.25)] hover:-translate-y-1.5 transition-all duration-400"
        >
          {/* Gradient border overlay */}
          <div className="absolute inset-[-2px] rounded-[26px] p-0.5 bg-gradient-to-br from-primary via-accent to-primary-dark opacity-20 pointer-events-none" style={{ mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "exclude", WebkitMaskComposite: "xor" }} />

          <h1 className="text-3xl font-bold font-display text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground text-sm mb-8">Sign in to your TekVion account</p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-foreground/80 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-muted-foreground transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full h-[52px] pl-12 pr-4 text-sm bg-card border-2 border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.2)] hover:border-muted-foreground/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground/80 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-muted-foreground transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-[52px] pl-12 pr-4 text-sm bg-card border-2 border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.2)] hover:border-muted-foreground/30 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <label className="inline-flex items-center gap-2.5 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                <input type="checkbox" className="w-[18px] h-[18px] accent-primary cursor-pointer" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full h-[54px] flex items-center justify-center gap-2.5 text-base font-semibold text-primary-foreground bg-gradient-to-br from-primary to-primary-dark rounded-xl hover:-translate-y-1 hover:shadow-[0_16px_40px_hsl(var(--primary)/0.45)] transition-all overflow-hidden"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold text-primary hover:text-accent transition-colors">
                Sign Up
              </Link>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Login;
