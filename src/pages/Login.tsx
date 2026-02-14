import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"signin" | "admin">("signin");

  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 bg-[hsl(210,40%,96%)] dark:bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-[480px] bg-card rounded-2xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-border overflow-hidden"
        >
          {/* Top gradient border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-primary-dark" />

          {/* Tabs */}
          <div className="flex border-b border-border mb-8">
            <button
              onClick={() => setActiveTab("signin")}
              className={`pb-3 px-1 mr-6 text-sm font-semibold transition-colors relative ${
                activeTab === "signin"
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`pb-3 px-1 text-sm font-semibold transition-colors relative ${
                activeTab === "admin"
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Admin / CMS
            </button>
          </div>

          <h1 className="text-2xl font-bold font-display text-foreground mb-1">Welcome back</h1>
          <p className="text-muted-foreground text-sm mb-8">Sign in to your Tekvion account</p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full h-12 pl-11 pr-4 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-12 pl-11 pr-4 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary cursor-pointer" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full h-12 flex items-center justify-center gap-2 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary-dark transition-colors"
            >
              Sign in
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold text-primary hover:text-accent transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Login;
