import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";
import WordCycle from "@/components/WordCycle";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[90vh] flex items-center">
          <HeroCanvas />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center section-padding relative w-full" style={{ zIndex: 10 }}>
            <div className="animate-fade-up">
              <h1 className="heavy-heading leading-[1.05] mb-8 text-text-main" style={{ fontSize: "clamp(48px,5vw,72px)" }}>
                Helping Your <br />Business Go <br />
                <span className="text-[#2563EB]">
                  <WordCycle words={["Automated", "Digital", "Connected"]} />
                </span>
              </h1>
              <p className="text-lg text-text-muted regular-body mb-10 leading-relaxed" style={{ maxWidth: "32rem" }}>
                Comprehensive software ecosystem designed specifically for Pakistani retailers, wholesalers, and distributors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-[#2563EB] text-white px-8 py-3.5 rounded-lg font-bold hover:brightness-110 transition-all">
                  Get Started Now
                </Link>
                <Link href="/solutions" className="border border-border-subtle text-text-main px-8 py-3.5 rounded-lg font-bold hover:bg-surface-alt transition-all">
                  View Solutions
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end items-center pointer-events-none">
              <div className="w-full max-w-[600px] aspect-square relative flex justify-center items-center opacity-80">
                <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-[#2563EB] rounded-full opacity-40 floating-element" style={{ animationDelay: "0.2s", filter: "blur(1px)" }}></div>
                <div className="absolute bottom-[35%] left-[25%] w-1.5 h-1.5 bg-[#2563EB] rounded-full opacity-30 floating-element" style={{ animationDelay: "1.5s", filter: "blur(1px)" }}></div>
                <div className="absolute top-[45%] right-[15%] w-2.5 h-2.5 bg-[#2563EB] rounded-full opacity-40 floating-element" style={{ animationDelay: "0.8s", filter: "blur(1px)" }}></div>
                <div className="absolute bottom-[20%] right-[30%] w-2 h-2 bg-[#2563EB] rounded-full opacity-30 floating-element" style={{ animationDelay: "2.1s", filter: "blur(1px)" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-border-subtle py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3.5M+", label: "Potential Retailers" },
              { value: "Offline-First", label: "Technology Core" },
              { value: "WhatsApp", label: "Integrated Reports" },
              { value: "Built for PK", label: "Localization First" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl heavy-heading text-[#2563EB] mb-1">{stat.value}</div>
                <div className="font-bold text-text-muted uppercase" style={{ fontSize: "10px", letterSpacing: "0.15em" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl heavy-heading mb-4 text-text-main">Digital Transformation Made Practical</h2>
            <p className="text-text-muted mx-auto" style={{ maxWidth: "42rem" }}>No fluff. Just tools that solve real problems for Pakistani businesses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "inventory_2", title: "Business Software", desc: "Intuitive interfaces for inventory, POS, and procurement management tailored for local workflows." },
              { icon: "bolt", title: "Automation Solutions", desc: "Automate daily reconciliations and order placements via Pakistan's favorite tool: WhatsApp." },
              { icon: "analytics", title: "Data & Analytics", desc: "Real-time insights into margins, best-sellers, and seasonal trends to drive growth." },
            ].map((card) => (
              <div key={card.title} className="p-10 border border-border-subtle rounded-2xl hover:border-[#2563EB]/50 transition-all bg-white group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                </div>
                <h3 className="text-xl heavy-heading mb-4">{card.title}</h3>
                <p className="text-text-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* One Platform. Total Control. — Bento Grid */}
        <section className="max-w-7xl mx-auto px-6 section-padding">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.2em] mb-4 block">Engineered for Efficiency</span>
            <h2 className="text-4xl heavy-heading text-text-main">One Platform. Total Control.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Scan & Sell */}
            <div className="bg-white border border-border-subtle rounded-2xl p-8">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white" style={{ fontSize: "22px" }}>qr_code_scanner</span>
              </div>
              <h3 className="text-xl heavy-heading text-text-main mb-3">Scan &amp; Sell</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">Ultra-fast checkout via mobile camera or external scanner. Reduce queues and automate your billing in seconds.</p>
              <ul className="space-y-2">
                {["1.2s average scan speed", "Multi-barcode support"].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-text-main font-semibold">
                    <span className="material-symbols-outlined text-[#2563EB]" style={{ fontSize: "18px" }}>check_circle</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            {/* Centre dark image */}
            <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden relative" style={{ minHeight: "280px" }}>
              <Image
                src="/barcode-phone.png"
                alt="Barcode scanner phone"
                width={600}
                height={400}
                className="w-full h-full object-cover opacity-75"
                style={{ position: "absolute", inset: 0 }}
                unoptimized
              />
            </div>
            {/* WhatsApp Alerts */}
            <div className="bg-white border border-border-subtle rounded-2xl p-8" style={{ borderLeft: "4px solid #2563EB" }}>
              <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white" style={{ fontSize: "22px" }}>receipt_long</span>
              </div>
              <h3 className="text-lg heavy-heading text-text-main mb-3">WhatsApp Alerts</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">Keep customers loyal with automated digital receipts and credit reminders sent directly to their WhatsApp.</p>
              <div className="bg-[#F4F4F5] rounded-lg p-3 font-mono text-xs text-text-muted">
                <div className="text-[10px] text-text-muted mb-1 uppercase tracking-wider">SYSTEM: MESSAGE_SENT</div>
                <div>&quot;Dear Ali, your balance of Rs. 450<br />is due. Pay now via Link.&quot;</div>
              </div>
            </div>
            {/* Reliable Offline Mode */}
            <div className="bg-white border border-border-subtle rounded-2xl p-8">
              <div className="w-12 h-12 bg-surface-alt rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-text-muted" style={{ fontSize: "22px" }}>wifi_off</span>
              </div>
              <h3 className="text-lg heavy-heading text-[#2563EB] mb-3">Reliable Offline Mode</h3>
              <p className="text-[#2563EB]/80 text-sm leading-relaxed">Internet goes down, business doesn&apos;t. Full functionality without connectivity, syncing automatically when back online.</p>
            </div>
            {/* AI Marketing & Insights */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 md:col-span-2">
              <h3 className="text-2xl heavy-heading text-white mb-3">AI Marketing &amp; Insights</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6" style={{ maxWidth: "28rem" }}>Understand your best-selling items and peak hours. DukanDigit AI suggests what to stock and when to discount.</p>
              <div className="space-y-2 mb-8" style={{ maxWidth: "240px" }}>
                <div className="h-2 bg-[#2563EB] rounded-full w-full"></div>
                <div className="h-2 bg-white/20 rounded-full" style={{ width: "75%" }}></div>
                <div className="h-2 bg-white/20 rounded-full" style={{ width: "55%" }}></div>
              </div>
              <Link href="/contact" className="inline-block border border-white/40 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                View Sample Report
              </Link>
            </div>
          </div>
        </section>

        {/* Core Infrastructure */}
        <section className="max-w-7xl mx-auto px-6 section-padding bg-surface-alt/30 rounded-[3rem]">
          <div className="mb-16">
            <h2 className="text-4xl heavy-heading mb-4 text-text-main">Core Infrastructure Solutions</h2>
            <p className="text-text-muted">Scalable modules for every stage of your business growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "warehouse", title: "Inventory Management", desc: "Real-time stock tracking across multiple locations with auto-reorder alerts." },
              { icon: "point_of_sale", title: "Cloud POS", desc: "Lightning fast checkout experience that works flawlessly even without internet." },
              { icon: "dashboard", title: "Executive Dashboards", desc: "Consolidated view for owners to track performance from anywhere in the world." },
              { icon: "settings_suggest", title: "Custom ERP", desc: "Tailored resource planning modules for unique distribution workflows." },
              { icon: "psychology", title: "AI Assistants", desc: "Predictive purchasing and demand forecasting to minimize capital lockup." },
              { icon: "developer_mode", title: "Custom Development", desc: "Dedicated engineering teams to build proprietary digital assets for your brand." },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white border border-border-subtle rounded-xl shadow-sm hover:border-[#2563EB] transition-all">
                <span className="material-symbols-outlined text-[#2563EB] mb-4 block">{item.icon}</span>
                <h4 className="text-lg heavy-heading mb-2">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Showcase */}
        <section className="max-w-7xl mx-auto px-6 section-padding grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.2em] mb-4 block">Product Showcase</span>
            <h2 className="text-5xl heavy-heading mb-6 leading-tight text-text-main">DukanDigit Retail <br />Platform v2.0</h2>
            <p className="text-text-muted regular-body text-lg mb-8">The definitive operating system for Pakistani retail. We've combined deep local market insights with world-class engineering.</p>
            <ul className="space-y-4 mb-10">
              {["Offline-first architecture for interrupted connectivity", "Automated WhatsApp daily sales summaries", "Multi-user permission hierarchy & security"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#2563EB] font-bold">check_circle</span>
                  <span className="font-semibold text-text-main">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/products" className="bg-[#2563EB] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform inline-block">
              Learn More About Platform
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#2563EB]/5 rounded-[2.5rem] -rotate-2"></div>
            <Image
              src="https://lh3.googleusercontent.com/aida/ADBb0ugbPdgcUwsZnUAC0vSN7LLw6Fz64Ti0BVr44HDuKh70Qo4VCffvMRAMrSPMtB5LCpbj08ly3Hw_NDYdksQtaNqbqb_llZbOQYAJSGLuD6s_pZbZ-rjiCyXKmjTTMnPoBxEyJvD44_P7Y7uXADRcQdb3sy7T1pzIBRFSw9ERGnEltqDiAZhVeo83zGEqmCuvIsENCjn4pgIgmuo7dkKSd-30m2XhNalt_eTytCptOTlioHpgu3u5O5TkYKsZ"
              alt="Dashboard Showcase"
              width={600}
              height={400}
              className="relative w-full rounded-2xl shadow-2xl border border-white"
              unoptimized
            />
          </div>
        </section>

        {/* Implementation Steps */}
        <section className="max-w-7xl mx-auto px-6 section-padding">
          <h2 className="text-4xl heavy-heading text-center mb-20 text-text-main">Streamlined Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-border-subtle" style={{ zIndex: -1 }}></div>
            {[
              { step: "1", title: "Create Store", desc: "Set up your digital profile in minutes with basic business details." },
              { step: "2", title: "Add Inventory", desc: "Bulk upload or scan products into our smart database system." },
              { step: "3", title: "Start Selling", desc: "Begin processing transactions with our zero-latency Cloud POS." },
              { step: "4", title: "Get Reports", desc: "Detailed performance insights delivered straight to your phone." },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-20 h-20 bg-white border border-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                  <span className="text-2xl heavy-heading">{item.step}</span>
                </div>
                <h4 className="heavy-heading mb-2 text-text-main">{item.title}</h4>
                <p className="text-sm text-text-muted px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Tabs */}
        <section className="bg-surface-alt/50 section-padding">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl heavy-heading text-center mb-16 text-text-main">Tailored For Your Industry</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {[
                { icon: "storefront", label: "Kiryana", active: false },
                { icon: "apparel", label: "Fashion", active: true },
                { icon: "local_pharmacy", label: "Pharmacy", active: false },
                { icon: "warehouse", label: "Wholesale", active: false },
                { icon: "home_repair_service", label: "Hardware", active: false },
                { icon: "smartphone", label: "Mobile", active: false },
                { icon: "restaurant", label: "F&B", active: false },
                { icon: "category", label: "Distribution", active: false },
              ].map((item) => (
                <Link key={item.label} href="/industries" className={`bg-white p-6 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${item.active ? "border-[#2563EB]" : "border-border-subtle hover:border-[#2563EB]"}`}>
                  <span className={`material-symbols-outlined ${item.active ? "text-[#2563EB]" : "text-text-muted"}`}>{item.icon}</span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${item.active ? "text-[#2563EB]" : "text-text-muted"}`}>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Advantage Section */}
        <section className="max-w-7xl mx-auto px-6 section-padding">
          <h2 className="text-4xl heavy-heading text-center mb-16 text-text-main">The DukanDigit Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: "public", title: "Pakistan-Focused", desc: "Every feature is built considering unique local tax laws and market behaviors of Pakistan." },
              { icon: "cloud_off", title: "Offline First", desc: "Internet outages won't stop your sales. Our sync technology handles connectivity gaps seamlessly." },
              { icon: "chat", title: "WhatsApp Native", desc: "Direct integration with the country's most used communication tool for alerts and reports." },
              { icon: "security", title: "Enterprise Security", desc: "Your business data is encrypted and backed up on secure, redundant regional servers." },
              { icon: "trending_up", title: "Scalable Stack", desc: "From a single shop to a national franchise, our infrastructure grows as your business expands." },
              { icon: "support_agent", title: "Local Support", desc: "On-ground assistance and local technical support available across all major cities." },
            ].map((item) => (
              <div key={item.title} className="flex gap-6">
                <span className="material-symbols-outlined text-[#2563EB] text-4xl">{item.icon}</span>
                <div>
                  <h5 className="heavy-heading text-lg mb-2 text-text-main">{item.title}</h5>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-surface-alt/30 section-padding">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl heavy-heading text-center mb-16 text-text-main">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "DukanDigit transformed how we handle our wholesale distributions. The offline capability is a lifesaver in areas with spotty internet.", initials: "AR", name: "Ahmed Raza", role: "CEO, Raza Wholesale Group" },
                { quote: "The transition from manual ledgers to this digital platform was surprisingly smooth. Our daily efficiency has increased by almost 40%.", initials: "FK", name: "Fatima Khalid", role: "Operations Head, Urban Retail" },
                { quote: "The WhatsApp reporting feature is excellent. I get a full breakdown of my store's performance every evening on my phone.", initials: "ZM", name: "Zubair Malik", role: "Owner, Malik General Store" },
              ].map((t) => (
                <div key={t.name} className="bg-white p-10 rounded-2xl border border-border-subtle shadow-sm">
                  <p className="text-lg regular-body italic mb-8">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-[#2563EB]">{t.initials}</div>
                    <div>
                      <div className="font-bold text-text-main">{t.name}</div>
                      <div className="text-xs text-text-muted">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparent Pricing */}
        <section className="bg-[#F0F2F5] section-padding">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl heavy-heading mb-4 text-text-main">Transparent Pricing</h2>
              <p className="text-text-muted mx-auto" style={{ maxWidth: "38rem" }}>Scalable solutions for every store size, from street-side stalls to large mini-marts.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ maxWidth: "720px", margin: "0 auto" }}>
              {/* Basic Plan */}
              <div className="bg-white border border-border-subtle rounded-2xl p-8 flex flex-col">
                <h3 className="text-xl heavy-heading mb-2 text-text-main">Basic Plan</h3>
                <div className="mb-1">
                  <span className="text-4xl heavy-heading text-text-main">Rs. 800</span>
                  <span className="text-text-muted text-sm">/mo</span>
                </div>
                <p className="text-[#2563EB] text-sm mb-6">Ideal for small, single-owner kiryana shops.</p>
                <hr className="border-border-subtle mb-6" />
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    { text: "Unlimited Sales Entries", included: true },
                    { text: "Digital Udhaar Ledger", included: true },
                    { text: "Basic Inventory Tracking", included: true },
                    { text: "AI Purchase Predictions", included: false },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <span className={`material-symbols-outlined ${item.included ? "text-[#2563EB]" : "text-text-muted"}`} style={{ fontSize: "18px" }}>
                        {item.included ? "check" : "close"}
                      </span>
                      <span className={`text-sm ${item.included ? "text-text-main" : "text-text-muted"}`}>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <hr className="border-border-subtle mb-6" />
                <Link href="/contact" className="block text-center border border-text-main text-text-main py-3 rounded-lg font-bold hover:bg-surface-alt transition-colors">
                  Choose Basic
                </Link>
              </div>
              {/* Pro Plan */}
              <div className="bg-[#0A0A0A] rounded-2xl p-8 flex flex-col relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Most Popular
                </div>
                <h3 className="text-xl heavy-heading mb-2 text-white">Pro Plan</h3>
                <div className="mb-1">
                  <span className="text-4xl heavy-heading text-white">Rs. 1,200</span>
                  <span className="text-white/60 text-sm">/mo</span>
                </div>
                <p className="text-white/70 text-sm mb-6">For growing mini-marts with multiple staff.</p>
                <hr className="border-white/10 mb-6" />
                <ul className="space-y-3 mb-8 flex-grow">
                  {["Multi-Staff Accounts", "AI-Powered Stock Optimization", "WhatsApp Marketing Engine", "Advanced Sales Analytics"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#2563EB]" style={{ fontSize: "18px" }}>check</span>
                      <span className="text-sm text-white">{item}</span>
                    </li>
                  ))}
                </ul>
                <hr className="border-white/10 mb-6" />
                <Link href="/contact" className="block text-center bg-[#2563EB] text-white py-3 rounded-lg font-bold hover:brightness-110 transition-all">
                  Go Pro
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Development Roadmap */}
        <section className="max-w-7xl mx-auto px-6 section-padding">
          <div className="mb-10">
            <h2 className="text-3xl heavy-heading text-text-main">Development Roadmap</h2>
            <p className="text-[#2563EB] text-sm mt-1">Our 12-month engineering milestone summary.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { quarter: "Q1", label: "FOUNDATION", active: true, title: "Core POS Release", desc: "Launch of mobile-first inventory and sales module with offline support." },
              { quarter: "Q2", label: "GROWTH", active: false, title: "Digital Payments", desc: "Integration with Easypaisa, JazzCash, and direct bank API for settlements." },
              { quarter: "Q3", label: "SCALE", active: false, title: "DukanDigit AI", desc: "Deployment of generative AI for demand forecasting and procurement." },
              { quarter: "Q4", label: "ECOSYSTEM", active: false, title: "FMCG Connect", desc: "Direct supply chain bridge connecting brands to stores via real-time data." },
            ].map((item) => (
              <div
                key={item.quarter}
                className={`rounded-xl p-6 border border-border-subtle ${item.active ? "border-l-[3px] border-l-[#2563EB]" : ""}`}
              >
                <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${item.active ? "text-[#2563EB]" : "text-text-muted"}`}>
                  {item.quarter} — {item.label}
                </p>
                <h4 className="heavy-heading text-text-main mb-2">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ready to Dominate CTA */}
        <section className="bg-[#0A0A0A] py-24 text-center mx-6 rounded-3xl mb-16" style={{ maxWidth: "calc(100% - 3rem)" }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl heavy-heading text-white mb-6 leading-tight">Ready to dominate your market?</h2>
            <p className="text-white/70 text-lg mb-10 mx-auto" style={{ maxWidth: "38rem" }}>
              Join the digital revolution. Transform your store from a shop to a data-driven retail powerhouse today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-[#2563EB] text-white px-8 py-3.5 rounded-lg font-bold hover:brightness-110 transition-all">
                Start 30-day Free Trial
              </Link>
              <Link href="/contact" className="border border-white/30 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 transition-all">
                Book a Consultant
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-6 section-padding grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl heavy-heading mb-6 text-text-main">Ready to Go Digital?</h2>
            <p className="text-text-muted text-lg mb-10 leading-relaxed">Fill out the form and our solution consultants will reach out to you within 24 hours to schedule a personalized demo.</p>
            <div className="space-y-8">
              {[
                { icon: "location_on", title: "Lahore Headquarters", info: "Phase 6, DHA, Lahore, Pakistan" },
                { icon: "call", title: "Direct Line", info: "+92 42 3XXX XXXX" },
                { icon: "mail", title: "Email Support", info: "contact@dukandigit.com" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-[#2563EB]">{item.icon}</span>
                  <div>
                    <div className="font-bold text-text-main">{item.title}</div>
                    <div className="text-text-muted text-sm">{item.info}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="bg-white border border-border-subtle p-8 md:p-12 rounded-3xl shadow-sm" action="/api/contact" method="POST">
            <input name="returnUrl" type="hidden" value="/?submitted=1" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-text-main">Full Name</label>
                <input className="w-full bg-surface-alt border border-border-subtle rounded-lg p-3 text-sm outline-none focus:border-[#2563EB]" placeholder="Ali Ahmed" type="text" name="name" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-text-main">Company Name</label>
                <input className="w-full bg-surface-alt border border-border-subtle rounded-lg p-3 text-sm outline-none focus:border-[#2563EB]" placeholder="ABC Enterprises" type="text" name="company" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-text-main">Email Address</label>
              <input className="w-full bg-surface-alt border border-border-subtle rounded-lg p-3 text-sm outline-none focus:border-[#2563EB]" placeholder="ali@company.com" type="email" name="email" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-text-main">Phone Number</label>
              <input className="w-full bg-surface-alt border border-border-subtle rounded-lg p-3 text-sm outline-none focus:border-[#2563EB]" placeholder="+92 300 123 4567" type="tel" name="phone" />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-bold mb-2 text-text-main">Message</label>
              <textarea className="w-full bg-surface-alt border border-border-subtle rounded-lg p-3 text-sm outline-none focus:border-[#2563EB]" placeholder="How can we help your business?" rows={4} name="message"></textarea>
            </div>
            <button className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg" type="submit">Submit Inquiry</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
