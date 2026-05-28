import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-subtle pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="https://lh3.googleusercontent.com/aida/ADBb0uiK9krLLcTYSVoF7oJaJ8_tyA1fwJ43FfvOMHVoPmyf3VpGLQUEYZLLtL2am_uY0SX_KdgtTt_7H9V9i7ntl0whYtdTi5g9VIGeRp5L-jwFeLIPNzxLc-hp3EPsf0xWuy_Mt_JoO7s_8VOfP0gwSerxh1kNHSv34Es9Mw5-UGK3L70dFF5j6UeISNRgr-NunB-Pf0osLhtLTS3W4Xn55cnK0bqyaPIndvL-zmO7gLF6eyXlkOsn6IHWDkJD"
              alt="DukanDigit Logo"
              width={24}
              height={24}
              className="h-6 w-auto"
              unoptimized
            />
            <span className="text-xl heavy-heading tracking-tight text-text-main">DukanDigit</span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            Digitizing Pakistan&apos;s commercial landscape one business at a time. Empowering retailers with modern tools.
          </p>
        </div>
        <div>
          <h6 className="font-bold mb-6 text-xs uppercase tracking-widest text-text-main">Solutions</h6>
          <ul className="space-y-4 text-sm text-text-muted">
            <li><Link className="hover:text-[#2563EB] transition-colors" href="/solutions">Retail Platform</Link></li>
            <li><Link className="hover:text-[#2563EB] transition-colors" href="/solutions">ERP Customization</Link></li>
            <li><Link className="hover:text-[#2563EB] transition-colors" href="/solutions">Inventory Cloud</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-6 text-xs uppercase tracking-widest text-text-main">Company</h6>
          <ul className="space-y-4 text-sm text-text-muted">
            <li><Link className="hover:text-[#2563EB] transition-colors" href="/about">About Us</Link></li>
            <li><Link className="hover:text-[#2563EB] transition-colors" href="#">Careers</Link></li>
            <li><Link className="hover:text-[#2563EB] transition-colors" href="#">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-6 text-xs uppercase tracking-widest text-text-main">Connect</h6>
          <ul className="space-y-4 text-sm text-text-muted">
            <li><Link className="hover:text-[#2563EB] transition-colors" href="#">Support Desk</Link></li>
            <li><Link className="hover:text-[#2563EB] transition-colors" href="/contact">Sales Team</Link></li>
            <li><Link className="hover:text-[#2563EB] transition-colors" href="#">Office Locations</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-text-muted">© 2024 DukanDigit Pvt. Ltd. All rights reserved.</p>
        <div className="flex items-center gap-6 text-text-muted">
          <Link className="hover:text-[#2563EB] transition-colors" href="#">
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>public</span>
          </Link>
          <Link className="hover:text-[#2563EB] transition-colors" href="#">
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>alternate_email</span>
          </Link>
          <Link className="hover:text-[#2563EB] transition-colors" href="#">
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>share</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
