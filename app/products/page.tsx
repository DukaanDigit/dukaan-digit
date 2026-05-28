import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  { icon: "inventory_2", title: "Inventory OS", tag: "CORE", desc: "Real-time synchronization across warehouses, stores, and digital channels with sub-second accuracy." },
  { icon: "point_of_sale", title: "Cloud POS", tag: "RETAIL", desc: "A high-performance checkout experience with offline mode support and integrated loyalty systems." },
  { icon: "chat", title: "WhatsApp Commerce", tag: "SOCIAL", desc: "Transform messaging into a high-conversion channel with automated catalogs and conversational AI." },
  { icon: "foundation", title: "ERP", tag: "ENTERPRISE", desc: "Complete back-office automation including procurement, accounting, and human capital management." },
  { icon: "query_stats", title: "Analytics Engine", tag: "DATA", desc: "High-velocity data processing for predictive stock modeling and customer lifetime value forecasting." },
  { icon: "smart_toy", title: "AI Assistant", tag: "NEW", desc: "LLM-powered automation that handles customer support queries and inventory replenishment alerts." },
];

const pricingTiers = [
  { tier: "STARTER", price: "$499", period: "/mo", desc: "For growing businesses needing core inventory and POS.", cta: "Start Free Trial", highlighted: false },
  { tier: "GROWTH", price: "$1,299", period: "/mo", desc: "Full stack commerce with WhatsApp integration and Analytics.", cta: "Select Plan", highlighted: true },
  { tier: "ENTERPRISE", price: "Custom", period: "", desc: "Advanced ERP and AI modules with dedicated support.", cta: "Contact Sales", highlighted: false },
];

export default function ProductsPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-2xl px-margin-desktop max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-display-lg text-display-lg text-text-main mb-md">One Platform. Every Operation.</h1>
            <p className="font-body-lg text-body-lg text-text-muted mb-xl">
              Unified commerce infrastructure built for modern enterprises. From multi-node inventory to AI-driven logistics, DukanDigit powers the world&apos;s most complex supply chains.
            </p>
            <div className="flex flex-wrap gap-md">
              <button className="bg-primary-container text-on-primary px-xl py-md font-label-md text-label-md hover:brightness-110 transition-all">View Product Suite</button>
              <button className="bg-surface-container-lowest border border-border-strong text-text-main px-xl py-md font-label-md text-label-md hover:bg-surface-container-low transition-all">Technical Documentation</button>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-2xl px-margin-desktop bg-surface-alt border-y border-border-subtle">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-xl">
              <h2 className="font-headline-md text-headline-md text-text-main">The Core Stack</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {products.map((product) => (
                <div key={product.title} className="bg-surface-container-lowest border border-border-subtle p-lg group hover:border-primary transition-colors">
                  <div className="mb-md">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "32px" }}>{product.icon}</span>
                  </div>
                  <div className="flex justify-between items-start mb-sm">
                    <h3 className="font-headline-sm text-headline-sm text-text-main">{product.title}</h3>
                    <span className="bg-secondary-container text-on-secondary-container px-sm py-xs font-label-sm text-label-sm border border-border-subtle" style={{ fontSize: "12px" }}>{product.tag}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-text-muted mb-md" style={{ fontSize: "14px" }}>{product.desc}</p>
                  <Link href="#" className="font-label-sm text-label-sm text-primary flex items-center gap-xs" style={{ fontSize: "12px" }}>
                    EXPLORE MODULE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Product Section */}
        <section className="py-2xl px-margin-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
            <div>
              <div className="inline-flex items-center gap-sm bg-primary/5 text-primary border border-primary px-sm py-xs mb-md">
                <span className="font-label-sm text-label-sm" style={{ fontSize: "12px" }}>DukanDigit ERP</span>
                <span className="w-[1px] h-3 bg-primary/30"></span>
                <span className="font-label-sm text-label-sm" style={{ fontSize: "12px" }}>v4.2.0</span>
              </div>
              <h2 className="font-display-lg text-display-lg text-text-main mb-md">The Backbone of Global Commerce</h2>
              <p className="font-body-lg text-body-lg text-text-muted mb-xl">
                Our flagship ERP orchestrates thousands of data points every minute, ensuring your business stays agile in a volatile market. Designed for scale, security, and absolute reliability.
              </p>
              <ul className="space-y-md mb-xl">
                {["Multi-entity financial consolidation", "Automated compliance & tax reporting", "Predictive maintenance for logistics fleets"].map((item) => (
                  <li key={item} className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-body-md text-body-md text-text-main" style={{ fontSize: "16px" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-primary-container text-on-primary px-xl py-md font-label-md text-label-md hover:brightness-110 transition-all">Request Enterprise Briefing</button>
            </div>
            <div className="relative">
              <div className="bg-surface-container border border-border-strong p-sm">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBspvEQ3J2V2Y0iNEXXj6zM-MDkxDb8fICBCQaY1CwvXzlG6fO4E9Vr_507vN0RJbbbTQsQ3bxoSx-6SJv36axwIczPhdw4TG60gu1WPfA4mUm975FSe1El80Fit0dJ1Kc8cbc6gVR7QX7_qXQbx2nqmZDoLo6vUTxLucr8IpjDue4In-z7TaAdJh8lQvrZY1si0BrBu5B-jZB00kN0gwK-Tv16niCQHb8lZTJe98o8PI6bfi0hAwE6gksal1MKItjsuz9WXoiGogCO"
                  alt="ERP Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest border border-border-strong p-lg hidden md:block max-w-[240px]">
                <div className="font-headline-sm text-headline-sm text-primary mb-xs">99.99%</div>
                <div className="font-label-sm text-label-sm text-text-muted uppercase" style={{ fontSize: "12px" }}>Uptime Reliability Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-2xl px-margin-desktop bg-surface-alt border-t border-border-subtle">
          <div className="max-w-[1440px] mx-auto text-center mb-xl">
            <h2 className="font-headline-md text-headline-md text-text-main">Flexible Deployment Models</h2>
            <p className="font-body-md text-body-md text-text-muted" style={{ fontSize: "16px" }}>Choose the scale that fits your operational complexity.</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {pricingTiers.map((tier) => (
              <div key={tier.tier} className={`bg-surface-container-lowest border p-xl flex flex-col items-center relative ${tier.highlighted ? "border-2 border-primary-container" : "border-border-subtle"}`}>
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container text-on-primary px-md py-xs font-label-sm text-label-sm" style={{ fontSize: "12px" }}>
                    RECOMMENDED
                  </div>
                )}
                <span className={`font-label-sm text-label-sm mb-md ${tier.highlighted ? "text-primary" : "text-text-muted"}`} style={{ fontSize: "12px" }}>{tier.tier}</span>
                <div className="font-display-lg text-display-lg text-text-main mb-md">
                  {tier.price}<span className="text-body-sm font-normal text-text-muted">{tier.period}</span>
                </div>
                <p className="font-body-sm text-body-sm text-text-muted mb-xl text-center" style={{ fontSize: "14px" }}>{tier.desc}</p>
                <button className={`w-full py-sm font-label-md text-label-md transition-colors ${tier.highlighted ? "bg-primary-container text-on-primary hover:brightness-110" : "border border-border-strong hover:bg-surface-container-low"}`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
