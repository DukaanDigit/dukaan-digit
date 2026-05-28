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

        {/* Final CTA Banner */}
        <section className="bg-[#2563EB] py-24 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl heavy-heading text-white mb-8 leading-tight">Building The Digital Backbone Of Small Business</h2>
            <p className="text-white/80 text-lg mb-12 mx-auto" style={{ maxWidth: "42rem" }}>We are on a mission to empower every merchant in Pakistan with tools that were previously only available to global conglomerates.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-[#2563EB] px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">Get Started Today</Link>
              <Link href="/contact" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">Contact Sales</Link>
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
          <form className="bg-white border border-border-subtle p-8 md:p-12 rounded-3xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-text-main">Full Name</label>
                <input className="w-full bg-surface-alt border border-border-subtle rounded-lg p-3 text-sm outline-none focus:border-[#2563EB]" placeholder="Ali Ahmed" type="text" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-text-main">Company Name</label>
                <input className="w-full bg-surface-alt border border-border-subtle rounded-lg p-3 text-sm outline-none focus:border-[#2563EB]" placeholder="ABC Enterprises" type="text" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-text-main">Email Address</label>
              <input className="w-full bg-surface-alt border border-border-subtle rounded-lg p-3 text-sm outline-none focus:border-[#2563EB]" placeholder="ali@company.com" type="email" />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-bold mb-2 text-text-main">Message</label>
              <textarea className="w-full bg-surface-alt border border-border-subtle rounded-lg p-3 text-sm outline-none focus:border-[#2563EB]" placeholder="How can we help your business?" rows={4}></textarea>
            </div>
            <button className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg" type="submit">Submit Inquiry</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
