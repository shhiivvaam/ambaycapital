import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#060f1e] pt-20 pb-10 px-[5%] border-t border-border">
      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link href="#" className="inline-flex items-center gap-3 no-underline mb-5">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center font-cormorant text-[20px] font-semibold text-navy">
              A
            </div>
            <div className="font-cormorant text-[22px] font-semibold text-white tracking-[0.5px]">
              Ambay <span className="text-gold">Capital</span>
            </div>
          </Link>
          <p className="text-[14px] text-text-muted leading-[1.7] mt-5 mb-7 max-w-[300px]">
            Insurance, Investments & Wealth Planning for every stage of life. Your trusted financial partner since 2015.
          </p>
          <div className="flex gap-2.5">
            {[
              { label: 'in', href: '#' },
              { label: 'f', href: '#' },
              { label: '𝕏', href: '#' },
              { label: '▶', href: '#' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="w-9 h-9 bg-[rgba(255,255,255,0.05)] border border-border rounded-lg flex items-center justify-center text-[14px] text-text-muted no-underline transition-all duration-200 hover:bg-[rgba(201,168,76,0.1)] hover:border-gold hover:text-gold"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-[13px] uppercase tracking-[1.5px] text-gold mb-5 font-medium">Services</h5>
          <ul className="list-none space-y-2.5">
            {['Life Insurance', 'Health Insurance', 'Motor Insurance', 'Travel Insurance', 'Business Insurance'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-[14px] text-text-muted no-underline transition-colors duration-200 hover:text-gold">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Investments */}
        <div>
          <h5 className="text-[13px] uppercase tracking-[1.5px] text-gold mb-5 font-medium">Investments</h5>
          <ul className="list-none space-y-2.5">
            {['Mutual Funds', 'SIP Planning', 'ELSS Tax Saving', 'Retirement Plans', 'Wealth Management'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-[14px] text-text-muted no-underline transition-colors duration-200 hover:text-gold">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-[13px] uppercase tracking-[1.5px] text-gold mb-5 font-medium">Company</h5>
          <ul className="list-none space-y-2.5">
            {['About Us', 'Blog', 'Calculators', 'Contact', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-[14px] text-text-muted no-underline transition-colors duration-200 hover:text-gold">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-border flex flex-wrap justify-between items-center gap-4">
        <p className="text-[13px] text-text-muted">
          © 2025 Ambay Capital. All rights reserved. IRDAI Reg. No. XXXXXXXXX
        </p>
        <div className="text-[12px] text-[rgba(201,168,76,0.5)] bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.12)] px-3.5 py-1.5 rounded-full">
          Mutual Fund investments are subject to market risks. Read all scheme documents carefully.
        </div>
      </div>
    </footer>
  );
}
