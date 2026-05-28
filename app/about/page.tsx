import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Malik Abdullah Nasir",
    role: "Founder & CEO",
    img: "/abdullah.jpg",
    linkedin: "https://www.linkedin.com/in/itsmalikabdullahnasir/",
  },
  {
    name: "Daniyal Qureshi",
    role: "CTO & Co-founder",
    img: "/daniyal.png",
    linkedin: "https://www.linkedin.com/in/daniyal-qureshi-b81016334/",
  },
  {
    name: "Muhammad Jibran",
    role: "Lead Developer & DevOps Engineer",
    img: "/jibran.png",
    linkedin: "https://www.linkedin.com/in/muhammad-jibran-8802322a5",
  },
  {
    name: "Ayesha Khan",
    role: "VP of Product",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5BdrBOoYZMzQrDs9GwCL5AKRn4cRlPHID58-sBDEIoW9jQJt8EMg5IlCq-h6bCDcLmb7Gyb9fLhszkgIFrVGmrc4A7Xs1vSD5faiA7k1iIu_2tQU29e80i1E9iNN9J-yUpzUnz7YMfv_oCanYvPvk5UwtAC-up22la54kpuDKEn4S_HL13Wx1CTjFzGlNlKpdvnFeynGggB0JXh5v_pq6YFroVW_Bxu_36nZKPNU3EvHqcQwizvC3VM70Ts4esrE7C7TiHyAwm6JU",
  },
];

const values = [
  { icon: "public", title: "Pakistan-First", desc: "Custom-built solutions engineered specifically for the local market's unique regulatory and economic landscape." },
  { icon: "offline_bolt", title: "Offline-Ready", desc: "Architecture that ensures business continuity even during connectivity outages, with seamless cloud synchronization." },
  { icon: "security", title: "Enterprise-Grade", desc: "Military-grade encryption and rigorous compliance standards protecting every byte of merchant and consumer data." },
  { icon: "code", title: "Developer-Friendly", desc: "Open APIs and robust documentation that allow businesses to build and scale their own custom digital ecosystems." },
];

export default function AboutPage() {
  return (
    <div className="bg-surface-container-lowest">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-2xl px-margin-desktop max-w-[1440px] mx-auto border-b border-border-subtle">
          <div className="max-w-4xl">
            <h1 className="font-display-lg text-display-lg text-text-main mb-lg">
              We Are Building Pakistan&apos;s Digital Commerce Layer
            </h1>
            <p className="font-body-lg text-body-lg text-text-muted">
              At DukanDigit, we are re-engineering the infrastructure of trade. By bridging the gap between traditional retail and digital scale, we empower millions of businesses to thrive in a globalized economy.
            </p>
          </div>
        </section>

        {/* Stats Row */}
        <section className="border-b border-border-subtle">
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1440px] mx-auto">
            {[
              { value: "3.5M+", label: "Retailers" },
              { value: "99.9%", label: "Uptime" },
              { value: "140ms", label: "Latency" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={stat.label} className={`py-xl px-margin-desktop text-center md:text-left ${i < 3 ? "border-r border-border-subtle" : ""}`}>
                <div className="font-headline-md text-headline-md text-primary-container mb-xs">{stat.value}</div>
                <div className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-2xl px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2xl items-start">
          <div>
            <h2 className="font-headline-md text-headline-md text-text-main leading-tight">
              Our mission is to democratize technological access for every merchant in Pakistan, from the smallest kiosk to the largest enterprise.
            </h2>
          </div>
          <div className="space-y-lg">
            <p className="font-body-md text-body-md text-text-muted">
              Born out of a need for local solutions to global challenges, DukanDigit was founded by a team of engineers and operators who saw the untapped potential in Pakistan&apos;s fragmented retail landscape. We believe that the next decade of growth will be driven by those who can bridge the &quot;last-mile&quot; digital divide.
            </p>
            <p className="font-body-md text-body-md text-text-muted">
              Our platform is built to handle the unique complexities of our market—intermittent connectivity, cash-heavy transactions, and logistical hurdles—turning them into competitive advantages for our partners. We don&apos;t just provide software; we provide the backbone for a new economic era.
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-2xl bg-surface-alt border-y border-border-subtle">
          <div className="px-margin-desktop max-w-[1440px] mx-auto">
            <div className="mb-xl">
              <div className="font-label-sm text-label-sm text-primary mb-sm uppercase tracking-widest">Our DNA</div>
              <h2 className="font-headline-md text-headline-md text-text-main">The Principles That Drive Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {values.map((val) => (
                <div key={val.title} className="bg-surface-container-lowest border border-border-subtle p-lg flex flex-col items-start transition-all hover:border-primary-container">
                  <span className="material-symbols-outlined text-primary-container mb-md" style={{ fontSize: "32px" }}>{val.icon}</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-main mb-sm">{val.title}</h3>
                  <p className="font-body-sm text-body-sm text-text-muted">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-2xl px-margin-desktop max-w-[1440px] mx-auto">
          <div className="mb-xl text-center">
            <h2 className="font-headline-md text-headline-md text-text-main mb-sm">Our Leadership</h2>
            <p className="font-body-md text-body-md text-text-muted mx-auto" style={{ maxWidth: "42rem" }}>
              Bringing together experience from global tech giants and local startups to solve Pakistan&apos;s biggest commerce challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xl">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative inline-block mb-md">
                  <div className="w-40 h-40 rounded-full border border-border-subtle bg-surface overflow-hidden mx-auto mb-md">
                    <Image src={member.img} alt={member.role} width={160} height={160} className="w-full h-full object-cover" unoptimized />
                  </div>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-main">{member.name}</h4>
                <p className="font-body-sm text-body-sm text-text-muted mb-md">{member.role}</p>
                {member.linkedin && (
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-text-muted hover:text-[#0A66C2] transition-colors" title="LinkedIn Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2xl px-margin-desktop bg-primary-container text-on-primary text-center">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-lg">Ready to build the future?</h2>
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <Link href="/contact" className="bg-surface-container-lowest text-primary-container px-xl py-md font-label-md text-label-md transition-all active:scale-95 inline-block">Join the Team</Link>
            <Link href="/contact" className="border border-on-primary text-on-primary px-xl py-md font-label-md text-label-md transition-all active:scale-95 inline-block">Partner With Us</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
