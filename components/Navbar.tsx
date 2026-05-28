"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle" style={{ backgroundColor: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)" }}>
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://lh3.googleusercontent.com/aida/ADBb0uiK9krLLcTYSVoF7oJaJ8_tyA1fwJ43FfvOMHVoPmyf3VpGLQUEYZLLtL2am_uY0SX_KdgtTt_7H9V9i7ntl0whYtdTi5g9VIGeRp5L-jwFeLIPNzxLc-hp3EPsf0xWuy_Mt_JoO7s_8VOfP0gwSerxh1kNHSv34Es9Mw5-UGK3L70dFF5j6UeISNRgr-NunB-Pf0osLhtLTS3W4Xn55cnK0bqyaPIndvL-zmO7gLF6eyXlkOsn6IHWDkJD"
            alt="DukanDigit Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
            unoptimized
          />
          <span className="text-xl heavy-heading tracking-tight text-text-main">DukanDigit</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === link.href
                  ? "text-[#2563EB] border-b-2 border-[#2563EB] pb-0.5"
                  : "text-text-main hover:text-[#2563EB]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-semibold text-text-muted hover:text-text-main transition-colors">
            Log in
          </Link>
          <Link
            href="/contact"
            className="bg-[#2563EB] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all"
          >
            Book a Demo →
          </Link>
        </div>
      </nav>
    </header>
  );
}
