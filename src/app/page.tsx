"use client";

import { useState } from "react";

// TODO: Replace with your deployed Google Apps Script URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzg3xkuM6uYIqMOmeZlTeyP85Ar9V8z3PbCuEEKJmI-NxjyDMSQlM7WV9OcITvW2feJDQ/exec";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      if (!GOOGLE_SCRIPT_URL) {
        console.warn("GOOGLE_SCRIPT_URL not configured. Form submitted for demo.");
        setTimeout(() => setStatus("success"), 1000); // Demo simulation
        return;
      }

      const formData = new FormData();
      formData.append("email", email);

      // Using no-cors avoids Google Apps Script preflight errors
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground">
      {/* Navigation */}
      <nav className="flex items-center justify-between w-full max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3">
          {/* Logo Metaphor: Stylized 0 with crosshair/calibration needle */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-accent-primary">
            <div className="absolute w-[2px] h-10 bg-accent-primary transform rotate-0" />
            <div className="absolute w-10 h-[2px] bg-accent-primary transform rotate-0 opacity-40" />
          </div>
          <span className="text-xl font-semibold tracking-wide">KiloZero<span className="text-accent-primary uppercase text-xs align-top font-mono ml-1">Tm</span></span>
        </div>
        <div>
          <a
            href="mailto:support@kilozero.io"
            className="text-sm font-medium text-accent-secondary hover:text-white transition-colors"
          >
            Support
          </a>
        </div>
      </nav>

      <main className="flex-1 flex flex-col w-full max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-accent-secondary mb-8">
            <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            SYSTEM CALIBRATED
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-blue-400">baseline.</span>
          </h1>
          <p className="text-lg md:text-xl text-accent-secondary max-w-2xl mb-10 leading-relaxed">
            KiloZero doesn&apos;t just show you the number on the scale; it tells you the truth behind it.
            Stop tracking weight and start monitoring mass.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="#waitlist"
              className="px-8 py-4 rounded-md bg-accent-primary text-background font-semibold hover:bg-white transition-colors text-center"
            >
              Join the Waitlist
            </a>
            <a
              href="#features"
              className="px-8 py-4 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center font-medium"
            >
              Explore the Lab
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-16 text-center">Engineered for Precision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent-primary/50 transition-colors group">
              <div className="w-12 h-12 mb-6 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary font-mono text-xl group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-xl font-semibold mb-3">No-Entry Integration</h3>
              <p className="text-accent-secondary leading-relaxed">
                Frictionless data. KiloZero syncs seamlessly with Health Connect. Step on the scale and let the engine capture your metrics automatically.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="w-12 h-12 mb-6 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary font-mono text-xl group-hover:scale-110 transition-transform relative z-10">
                02
              </div>
              <h3 className="text-xl font-semibold mb-3 relative z-10">TrueTrend Engine</h3>
              <p className="text-accent-secondary leading-relaxed relative z-10">
                Eliminate scale anxiety. Advanced moving averages and physiological correction profiles filter out daily noise to reveal your true Net Weight.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent-primary/50 transition-colors group">
              <div className="w-12 h-12 mb-6 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary font-mono text-xl group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Metrics</h3>
              <p className="text-accent-secondary leading-relaxed">
                Stop guessing. Track real-time Weight Velocity (Kg/Week) and let linear regression project your precise goal-reach dates based on honest data.
              </p>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section id="waitlist" className="py-24 text-center mt-12 mb-20 relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.01]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-primary/5 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to recalibrate?</h2>
            <p className="text-accent-secondary mb-10 text-lg">
              KiloZero is currently in closed beta. Join the waitlist for early access to the physiological dashboard.
            </p>
            {status === "success" ? (
              <div className="max-w-md mx-auto p-6 rounded-md bg-white/5 border border-accent-primary/20 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">You're on the list.</h3>
                <p className="text-accent-secondary">We'll notify you when early access opens.</p>
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-md bg-black border border-white/20 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary text-white font-mono placeholder:text-zinc-600 transition-all disabled:opacity-50"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-zinc-200 transition-colors whitespace-nowrap disabled:opacity-50 flex items-center justify-center"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : "Request Access"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 opacity-50">
            <span className="font-mono text-sm">&copy; {new Date().getFullYear()} KiloZero. All rights reserved.</span>
          </div>
          <div className="flex gap-6 text-sm font-mono text-accent-secondary">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
