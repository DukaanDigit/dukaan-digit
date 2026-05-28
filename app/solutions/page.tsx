import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const solutionCards = [
  {
    icon: "settings_suggest",
    title: "Business Software",
    desc: "Custom-built enterprise applications designed to streamline complex workflows and increase operational transparency across departments.",
  },
  {
    icon: "robot_2",
    title: "Automation",
    desc: "Eliminate manual bottlenecks with intelligent logic engines and automated data pipelines that work 24/7 without supervision.",
  },
  {
    icon: "analytics",
    title: "Analytics",
    desc: "Transform raw data into actionable intelligence with high-fidelity visualization dashboards and predictive modeling tools.",
  },
];

const features = [
  "Real-time synchronization across all distributed systems",
  "Bank-grade encryption protocols for data security",
  "Unified API for seamless third-party integrations",
  "99.9% uptime SLA for critical business operations",
];

export default function SolutionsPage() {
  return (
    <div className="bg-surface-container-lowest">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-2xl px-margin-desktop max-w-[1440px] mx-auto bg-surface-container-lowest">
          <div className="max-w-3xl">
            <h1 className="font-display-lg text-display-lg text-text-main leading-tight mb-md">
              Smarter <span className="text-primary-container">Solutions</span> For Every Business
            </h1>
            <p className="font-body-lg text-body-lg text-text-muted mb-xl" style={{ maxWidth: "42rem" }}>
              Engineered for high-performance teams. Deploy scalable digital infrastructure that evolves with your business requirements and technical demands.
            </p>
            <div className="flex flex-wrap gap-md">
              <Link href="/contact" className="bg-primary-container text-on-primary px-xl py-md font-label-md text-label-md active:scale-95 transition-transform inline-block">
                Get Started Now
              </Link>
              <Link href="/products" className="bg-surface-container-lowest border border-border-strong text-text-main px-xl py-md font-label-md text-label-md hover:bg-surface-alt transition-colors inline-block">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Solution Cards Section */}
        <section className="py-2xl px-margin-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {solutionCards.map((card) => (
              <div key={card.title} className="border border-border-subtle bg-surface-container-lowest p-lg flex flex-col items-start hover:border-primary-container transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-alt mb-lg">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'opsz' 32" }}>{card.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-main mb-md">{card.title}</h3>
                <p className="font-body-md text-body-md text-text-muted mb-lg flex-grow" style={{ fontSize: "16px" }}>{card.desc}</p>
                <Link href="#" className="text-primary-container font-label-md text-label-md flex items-center gap-xs group-hover:gap-sm transition-all">
                  Learn More <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Mid-section: Split UI */}
        <section className="py-2xl px-margin-desktop max-w-[1440px] mx-auto border-t border-border-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
            <div>
              <h2 className="font-display-lg text-display-lg text-text-main mb-lg">Precision Engineering for Scale</h2>
              <ul className="space-y-md">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-md">
                    <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-body-md text-body-md text-text-main" style={{ fontSize: "16px" }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-surface-alt border border-border-strong p-lg">
              <div className="bg-surface-container-lowest border border-border-subtle shadow-sm overflow-hidden">
                <div className="border-b border-border-subtle p-md flex items-center justify-between bg-surface-container-low">
                  <div className="flex gap-xs">
                    <div className="w-3 h-3 rounded-full bg-error/20 border border-error/40"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary/20 border border-secondary/40"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary/40"></div>
                  </div>
                  <span className="font-label-sm text-label-sm text-text-muted" style={{ fontSize: "12px" }}>Analytics Dashboard</span>
                </div>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaZS33bBTpN8MQ5Tn3IleAsIsiudqd6WCpySF50FvOaJSxzutYLXHVIh6LrxCQ_dKHcaPVUslhQpdVx8edrHX7oIbyxYv39GWhfayq7Mo9qiuzIqOfdmLq8UBQ5oI_146va1tKw6bjX66g3ebpGeMhlVcV9hpi5Gxmrm00r9ds51wXTYshAOS8MwUtARBeuhcSMRzlHqLUdo0Hg-U3_sxDzaM_xCSNA8nxTWuDdq08zcMfasYuSwUBll1PWCh5KeVbkIk5AQq3JNqx"
                  alt="Dashboard visualization"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="mx-margin-desktop max-w-[1440px] lg:mx-auto mb-2xl">
          <div className="bg-primary-container py-2xl px-xl flex flex-col md:flex-row items-center justify-between gap-xl">
            <div className="text-center md:text-left">
              <h2 className="font-display-lg text-display-lg text-on-primary mb-sm">Ready to transform your workflow?</h2>
              <p className="font-body-lg text-body-lg text-on-primary/80">Join over 5,000 businesses driving growth with DukanDigit.</p>
            </div>
            <div className="flex flex-wrap gap-md justify-center">
              <Link href="/contact" className="bg-surface-container-lowest text-primary-container px-xl py-md font-label-md text-label-md active:scale-95 transition-transform inline-block">
                Start Free Trial
              </Link>
              <Link href="/contact" className="bg-primary-container border border-on-primary text-on-primary px-xl py-md font-label-md text-label-md hover:bg-white/10 transition-colors inline-block">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
