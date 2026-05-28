"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 2000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface-alt" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
      {/* Back to home */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-1 text-sm font-semibold text-text-muted hover:text-[#2563EB] transition-colors"
      >
        <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_back</span>
        Back to Home
      </Link>

      <main className="w-full max-w-[440px] flex flex-col items-center">
        {/* Logo */}
        <div className="mb-xl text-center">
          <h1 className="font-black text-text-main tracking-tighter" style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 900 }}>
            DukanDigit
          </h1>
        </div>

        {/* Auth Card */}
        <div className="w-full bg-surface-container-lowest border border-border-subtle p-lg md:p-xl">
          <div className="mb-lg">
            <h2 className="font-headline-sm text-headline-sm text-text-main mb-xs">Welcome Back</h2>
            <p className="font-body-sm text-body-sm text-text-muted">Enter your credentials to access your dashboard.</p>
          </div>

          <form className="space-y-md" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="space-y-xs">
              <label className="font-label-sm text-label-sm text-text-main block" htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                required
                className="w-full h-12 px-md border border-border-subtle bg-white font-body-sm text-body-sm focus:outline-none focus:border-primary-container transition-colors duration-200"
                style={{ fontSize: "14px" }}
              />
            </div>

            {/* Password */}
            <div className="space-y-xs">
              <label className="font-label-sm text-label-sm text-text-main block" htmlFor="password">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="w-full h-12 px-md border border-border-subtle bg-white font-body-sm text-body-sm focus:outline-none focus:border-primary-container transition-colors duration-200"
                  style={{ fontSize: "14px" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-md top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main transition-colors"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-md">
              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full h-12 font-label-md text-label-md transition-all duration-150 flex items-center justify-center ${
                  status === "success"
                    ? "bg-green-600 text-white"
                    : "bg-primary-container text-on-primary active:scale-[0.98]"
                } ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
                style={{ fontSize: "14px", fontWeight: 600 }}
              >
                {status === "idle" && "Log In"}
                {status === "loading" && (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {status === "success" && "Success ✓"}
              </button>
            </div>
          </form>

          {/* Forgot Password */}
          <div className="mt-md text-center">
            <Link href="#" className="font-body-sm text-body-sm text-primary hover:underline transition-all" style={{ fontSize: "14px" }}>
              Forgot password?
            </Link>
          </div>

          {/* Divider */}
          <div className="relative my-lg">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border-subtle"></div>
            </div>
            <div className="relative flex justify-center uppercase" style={{ fontSize: "12px", letterSpacing: "0.05em" }}>
              <span className="bg-surface-container-lowest px-md text-text-muted">or</span>
            </div>
          </div>

          {/* Sign Up */}
          <div className="text-center">
            <p className="font-body-sm text-body-sm text-text-muted" style={{ fontSize: "14px" }}>
              Don&apos;t have an account?{" "}
              <Link href="#" className="text-primary font-semibold hover:underline">Get Started Free</Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-xl text-center">
          <p className="font-label-sm text-label-sm text-text-muted" style={{ fontSize: "12px" }}>
            © 2024 DukanDigit. All rights reserved.
          </p>
          <div className="mt-sm space-x-md">
            <Link href="#" className="font-label-sm text-label-sm text-text-muted hover:text-text-main transition-colors" style={{ fontSize: "12px" }}>Privacy Policy</Link>
            <Link href="#" className="font-label-sm text-label-sm text-text-muted hover:text-text-main transition-colors" style={{ fontSize: "12px" }}>Terms of Service</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
