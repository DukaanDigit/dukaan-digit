"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface IndustryFeature {
  icon: string;
  title: string;
  text: string;
}

interface IndustryData {
  title: string;
  desc: string;
  features: IndustryFeature[];
  stats: string[];
  img: string;
}

const industryData: Record<string, IndustryData> = {
  grocery: {
    title: "Advanced Grocery Operations",
    desc: "Optimize high-volume transactions and perishables management with millisecond-perfect synchronization.",
    features: [
      { icon: "inventory_2", title: "Real-time Expiry Tracking", text: "Automated alerts for nearing expiration dates to minimize wastage and maximize margin." },
      { icon: "weight", title: "Integrated Digital Weighing", text: "Direct scale integration for loose items ensuring zero manual entry errors at checkout." },
      { icon: "fast_forward", title: "High-Speed Offline Mode", text: "Continue serving long queues during internet outages with seamless background sync." },
    ],
    stats: ["32%", "Waste Reduction", "1.2s", "Avg Checkout", "99.9%", "Stock Accuracy", "15k+", "SKUs Supported"],
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
  },
  fashion: {
    title: "Precision Fashion Retail",
    desc: "Master complex matrix inventories with detailed Size, Color, and Style (SCS) tracking.",
    features: [
      { icon: "checkroom", title: "Matrix Inventory Control", text: "Effortlessly manage thousands of variants across multiple styles and seasons." },
      { icon: "qr_code_2", title: "Smart Barcoding", text: "Generate and print custom multi-variant barcodes for unique garment identification." },
      { icon: "loyalty", title: "Omnichannel Loyalty", text: "Unified customer profiles across physical stores and e-commerce webfronts." },
    ],
    stats: ["45%", "Return Reduction", "24/7", "Stock Visibility", "3.2x", "Loyalty Growth", "Unlimited", "Variant Combos"],
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200",
  },
  pharmacy: {
    title: "Compliant Pharma Solutions",
    desc: "Strict adherence to healthcare regulations with end-to-end batch and license tracking.",
    features: [
      { icon: "prescriptions", title: "Batch & Expiry Control", text: "Granular control over medicine batches with mandatory FEFO (First-Expiry-First-Out) logic." },
      { icon: "clinical_notes", title: "License Management", text: "Integrated checks for dangerous drugs and automated license documentation." },
      { icon: "monitor_heart", title: "E-Prescription Sync", text: "Seamlessly integrate with doctor platforms for digital prescription fulfillment." },
    ],
    stats: ["100%", "Compliance Rate", "0", "Recall Errors", "15s", "License Check", "DRAP", "Standards Ready"],
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
  },
  wholesale: {
    title: "Bulk Wholesale Management",
    desc: "Scale your distribution with advanced credit management and multi-unit pricing.",
    features: [
      { icon: "payments", title: "Credit Control System", text: "Strict credit limits and automated aging reports for large customer accounts." },
      { icon: "layers", title: "Tiered Pricing Engine", text: "Custom pricing rules based on customer type, volume, and contract terms." },
      { icon: "local_shipping", title: "Route Optimization", text: "Plan delivery routes and manage vehicle capacity for optimized logistics." },
    ],
    stats: ["18%", "Logistics Saving", "90%", "Faster Billing", "12k", "Agents Managed", "B2B", "Portal Enabled"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
  },
  hardware: {
    title: "Hardware Store Management",
    desc: "Streamline complex part numbers, bulk orders, and multi-category product management.",
    features: [
      { icon: "construction", title: "SKU Management", text: "Handle thousands of hardware variants with intelligent categorization and search." },
      { icon: "receipt_long", title: "Bulk Order Processing", text: "Process large contractor orders quickly with quote-to-invoice workflows." },
      { icon: "inventory", title: "Reorder Automation", text: "Smart reorder points based on seasonal demand and supplier lead times." },
    ],
    stats: ["35%", "Efficiency Gain", "2x", "Order Speed", "98%", "Stock Accuracy", "50k+", "SKUs Supported"],
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200",
  },
  electronics: {
    title: "Electronics Retail Platform",
    desc: "Manage warranties, serial numbers, and high-value item tracking with precision.",
    features: [
      { icon: "devices", title: "Serial Number Tracking", text: "Track every device from purchase to sale with full warranty management." },
      { icon: "verified", title: "Warranty Management", text: "Automated warranty alerts and customer notification system for support." },
      { icon: "swap_horiz", title: "Exchange & Returns", text: "Streamlined exchange workflows with automatic value calculation." },
    ],
    stats: ["40%", "Return Reduction", "100%", "Warranty Tracked", "2.5x", "Customer Satisfaction", "99%", "Serial Accuracy"],
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1200",
  },
  fbr: {
    title: "FBR Quota Management",
    desc: "Stay fully compliant with Pakistan's FBR regulations and quota management system.",
    features: [
      { icon: "receipt", title: "FBR Integration", text: "Direct integration with FBR systems for real-time tax reporting and compliance." },
      { icon: "policy", title: "Quota Tracking", text: "Monitor and manage product quotas with automated alerts for threshold breaches." },
      { icon: "assessment", title: "Tax Reporting", text: "Automated tax calculations and report generation for FBR submissions." },
    ],
    stats: ["100%", "FBR Compliance", "0", "Penalty Risk", "Real-time", "Quota Updates", "Auto", "Tax Filing"],
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
  },
  distributors: {
    title: "Distribution Network Management",
    desc: "Orchestrate complex distribution networks with multi-tier pricing and territory management.",
    features: [
      { icon: "hub", title: "Territory Management", text: "Define and manage sales territories with automatic agent assignment." },
      { icon: "route", title: "Van Sales Optimization", text: "Mobile-first van sales with real-time inventory and order capture." },
      { icon: "group", title: "Multi-Agent Tracking", text: "Track performance across your entire agent network with live dashboards." },
    ],
    stats: ["25%", "Distribution Cost", "3x", "Agent Efficiency", "10k+", "Outlets Covered", "Real-time", "Order Tracking"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
  },
};

const tabs = [
  { key: "grocery", label: "Grocery" },
  { key: "fashion", label: "Fashion" },
  { key: "pharmacy", label: "Pharmacy" },
  { key: "wholesale", label: "Wholesale" },
  { key: "hardware", label: "Hardware" },
  { key: "electronics", label: "Electronics" },
  { key: "fbr", label: "FBR Quota" },
  { key: "distributors", label: "Distributors" },
];

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState("grocery");
  const data = industryData[activeTab];

  return (
    <div className="bg-surface-container-lowest text-on-surface">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <header className="py-2xl bg-surface-alt border-b border-border-subtle">
          <div className="max-w-[1440px] mx-auto px-margin-desktop text-center">
            <h1 className="font-display-lg text-display-lg text-text-main mb-md max-w-3xl mx-auto">Built For Your Industry</h1>
            <p className="font-body-lg text-body-lg text-text-muted mx-auto" style={{ maxWidth: "42rem" }}>
              A specialized retail OS engineered to handle the unique complexities of your business domain, from high-frequency grocery to complex pharmaceutical regulations.
            </p>
          </div>
        </header>

        {/* Industry Selector Section */}
        <section className="py-2xl bg-surface-container-lowest">
          <div className="max-w-[1440px] mx-auto px-margin-desktop">
            {/* Tabs */}
            <div className="flex overflow-x-auto no-scrollbar gap-sm mb-2xl pb-sm border-b border-border-subtle">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`whitespace-nowrap px-lg py-md font-label-md text-label-md border transition-all ${
                    activeTab === tab.key
                      ? "bg-primary-container text-on-primary border-primary-container font-bold"
                      : "border-border-subtle bg-surface hover:bg-surface-variant text-on-surface"
                  }`}
                  style={{ fontSize: "14px", fontWeight: activeTab === tab.key ? 700 : 600 }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Two-Column Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-start" style={{ transition: "opacity 0.3s ease-in-out" }}>
              {/* Features Column */}
              <div className="space-y-xl">
                <div>
                  <h2 className="font-headline-md text-headline-md text-text-main mb-md">{data.title}</h2>
                  <p className="font-body-md text-body-md text-text-muted">{data.desc}</p>
                </div>
                <div className="space-y-lg">
                  {data.features.map((feature) => (
                    <div key={feature.title} className="flex gap-md">
                      <div className="w-12 h-12 flex-shrink-0 bg-secondary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">{feature.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-label-md text-label-md text-text-main">{feature.title}</h4>
                        <p className="font-body-sm text-body-sm text-text-muted">{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* UI Mockup Column */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-surface-container-lowest border border-border-strong overflow-hidden shadow-sm">
                  <div className="h-8 bg-surface-alt border-b border-border-subtle flex items-center px-md space-x-xs">
                    <div className="w-2 h-2 rounded-full bg-error"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                  </div>
                  <div className="aspect-video relative overflow-hidden bg-surface-container">
                    <Image
                      src={data.img}
                      alt="UI Mockup"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-2xl pt-2xl border-t border-border-subtle">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="font-display-lg text-display-lg text-primary mb-xs">{data.stats[i * 2]}</div>
                  <div className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider">{data.stats[i * 2 + 1]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2xl bg-text-main text-surface-container-lowest">
          <div className="max-w-[1440px] mx-auto px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-xl">
            <div>
              <h3 className="font-headline-md text-headline-md mb-sm">Ready to scale your enterprise?</h3>
              <p className="font-body-md text-body-md opacity-80" style={{ color: "#c5c5da" }}>Our industry experts are ready to build your custom transition roadmap.</p>
            </div>
            <div className="flex gap-md">
              <Link href="/contact" className="bg-primary-container text-on-primary px-xl py-md font-label-md text-label-md active:scale-95 transition-transform">Schedule Consultation</Link>
              <Link href="/contact" className="border border-outline-variant text-surface-container-lowest px-xl py-md font-label-md text-label-md hover:bg-white/10 transition-colors">Download Report</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
