import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-surface-container-lowest">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-surface-container-lowest py-2xl px-margin-desktop border-b border-border-subtle">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="font-display-lg text-display-lg text-text-main mb-md" style={{ maxWidth: "42rem" }}>Let&apos;s Build Together</h1>
            <p className="font-body-lg text-body-lg text-text-muted" style={{ maxWidth: "36rem" }}>
              Partner with us to redefine your digital architecture. Our team is ready to scale your infrastructure with precision and technical excellence.
            </p>
          </div>
        </section>

        {/* Contact Two-Column Layout */}
        <section className="py-2xl px-margin-desktop bg-white">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2xl">
            {/* Left: Information */}
            <div className="flex flex-col gap-xl">
              <div className="space-y-lg">
                <div className="flex flex-col gap-sm">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Headquarters</span>
                  <div className="flex gap-md items-start">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <p className="font-body-md text-body-md text-text-main">
                      101 Enterprise Way, Suite 500<br />
                      Silicon Valley, CA 94043<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-sm">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Connect</span>
                  <div className="flex flex-col gap-md">
                    <div className="flex gap-md items-center">
                      <span className="material-symbols-outlined text-primary">mail</span>
                      <a href="mailto:hello@dukandigit.com" className="font-body-md text-body-md text-text-main hover:text-primary transition-colors underline underline-offset-4 decoration-border-subtle">
                        hello@dukandigit.com
                      </a>
                    </div>
                    <div className="flex gap-md items-center">
                      <span className="material-symbols-outlined text-primary">call</span>
                      <a href="tel:+18005550199" className="font-body-md text-body-md text-text-main">+1 (800) 555-0199</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <button className="flex items-center gap-sm bg-primary-container text-on-primary px-xl py-md font-label-md text-label-md w-fit hover:brightness-110 active:scale-95 transition-all">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  Chat on WhatsApp
                </button>
              </div>
              <div className="mt-lg pt-lg border-t border-border-subtle">
                <div className="w-full aspect-video bg-surface-alt relative overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3-MiGlEZkjYLj1tiGgy5FsRviH8ZhGUCaRk8Y-kpNNjutSiWvccvu8wH0i9EI8IAPKKYovHJdBCMNDlLPC3d0xO9PgKKB-LdWtnuhd0CpVY1mhYEPxFCkEN3fhKu-8NnnBj4DssNKXo-I9acrasOB1sIXDacOVLNMz5wHIxFq40t-VU-yDAibECsQrRIVzgfMj6ch7I89DAbZgC-un14iib-XTHtwlawtk6pyXM0WVOucSI8G4Xa7oyZLV0cy3aua0GqdBQys2mzk"
                    alt="Office Location Map View"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover grayscale opacity-80"
                    unoptimized
                  />
                  <div className="absolute inset-0 border border-border-strong pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white border border-border-subtle p-lg md:p-xl">
              <form className="flex flex-col gap-lg" action="/api/contact" method="POST">
                <input name="returnUrl" type="hidden" value="/contact?submitted=1" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-text-main">Name</label>
                    <input className="border border-border-subtle px-md py-sm font-body-sm text-body-sm focus:border-primary outline-none transition-colors" placeholder="John Doe" type="text" name="name" />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-text-main">Company</label>
                    <input className="border border-border-subtle px-md py-sm font-body-sm text-body-sm focus:border-primary outline-none transition-colors" placeholder="Acme Corp" type="text" name="company" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-text-main">Email Address</label>
                    <input className="border border-border-subtle px-md py-sm font-body-sm text-body-sm focus:border-primary outline-none transition-colors" placeholder="john@company.com" type="email" name="email" />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-text-main">Phone Number</label>
                    <input className="border border-border-subtle px-md py-sm font-body-sm text-body-sm focus:border-primary outline-none transition-colors" placeholder="+1 (555) 000-0000" type="tel" name="phone" />
                  </div>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-text-main">Message</label>
                  <textarea className="border border-border-subtle px-md py-sm font-body-sm text-body-sm focus:border-primary outline-none transition-colors resize-none" placeholder="Tell us about your project goals..." rows={5} name="message"></textarea>
                </div>
                <button className="py-md font-label-md text-label-md uppercase tracking-wider transition-all active:scale-[0.98] bg-primary-container text-on-primary hover:brightness-110" type="submit">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Support Cards Section */}
        <section className="py-2xl px-margin-desktop bg-surface-alt">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {[
                { icon: "monitoring", title: "Sales", desc: "Explore enterprise pricing, bulk licensing, and customized solution packages for your scale.", cta: "TALK TO SALES" },
                { icon: "engineering", title: "Technical Support", desc: "Encountering a bottleneck? Our engineers are available 24/7 to resolve complex infrastructure queries.", cta: "OPEN TICKET" },
                { icon: "handshake", title: "Partnership", desc: "Join our ecosystem as a vendor, affiliate, or integration partner to drive industry innovation.", cta: "APPLY NOW" },
              ].map((card) => (
                <div key={card.title} className="bg-white border border-border-subtle p-lg flex flex-col gap-md group hover:border-primary transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-fixed text-primary border border-primary-fixed">
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-text-main mb-xs">{card.title}</h3>
                    <p className="font-body-sm text-body-sm text-text-muted">{card.desc}</p>
                  </div>
                  <Link href="#" className="font-label-sm text-label-sm text-primary flex items-center gap-xs mt-auto group-hover:gap-sm transition-all">
                    {card.cta} <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
