import Link from "next/link";

const FOOTER_LINKS = {
  Services: [
    { label: "Life Insurance", href: "/services/life-insurance" },
    { label: "Health Insurance", href: "/services/health-insurance" },
    { label: "Motor Insurance", href: "/services/motor-insurance" },
    { label: "Travel Insurance", href: "/services/travel-insurance" },
    { label: "Business Insurance", href: "/services/business-insurance" },
  ],
  Investments: [
    { label: "Mutual Funds", href: "/services/mutual-funds" },
    { label: "SIP Planning", href: "/calculators/sip" },
    { label: "ELSS Tax Saving", href: "/services/mutual-funds" },
    { label: "Retirement Plans", href: "/services/retirement-planning" },
    { label: "Wealth Management", href: "/services/financial-planning" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Calculators", href: "/calculators/sip" },
    { label: "Contact", href: "/#contact" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const SOCIAL = [
  { label: "in", href: "#" },
  { label: "f", href: "#" },
  { label: "𝕏", href: "#" },
  { label: "▶", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060f1e] pt-20 pb-10 px-[5%] border-t border-[rgba(201,168,76,0.2)]">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-16">
        {/* Brand */}
        <div className="lg:w-1/3 max-w-[400px]">
          <Link href="/" className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center 
              bg-gradient-to-br from-[#c9a84c] to-[#e2c97e]
              font-serif text-xl font-semibold text-[#0a1628]"
            >
              A
            </div>
            <span className="font-serif text-[22px] font-semibold text-white">
              Ambay <span className="text-[#c9a84c]">Capital</span>
            </span>
          </Link>
          <p className="text-[14px] text-[#8a9ab5] leading-relaxed mb-7">
            Insurance, Investments &amp; Wealth Planning for every stage of
            life. Your trusted financial partner since 1999.
          </p>
          <div className="flex gap-2.5">
            {SOCIAL.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm
                  text-[#8a9ab5] bg-white/[0.05] border border-[rgba(201,168,76,0.2)]
                  hover:bg-[rgba(201,168,76,0.1)] hover:border-[#c9a84c] hover:text-[#c9a84c]
                  transition-all duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 lg:gap-20 lg:w-2/3 lg:justify-end">
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col}>
              <h5 className="text-[13px] uppercase tracking-[1.5px] text-[#c9a84c] font-medium mb-5">
                {col}
              </h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#8a9ab5] hover:text-[#c9a84c] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-[rgba(201,168,76,0.2)] flex flex-wrap justify-between items-center gap-4">
        <p className="text-[13px] text-[#8a9ab5]">
          © 2026 Ambay Capital. All rights reserved.
        </p>
        <span
          className="text-[12px] text-[rgba(201,168,76,0.5)] 
          bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.12)] 
          px-3.5 py-1.5 rounded-full"
        >
          Mutual Fund investments are subject to market risks. Read all scheme
          documents carefully.
        </span>
      </div>
    </footer>
  );
}
