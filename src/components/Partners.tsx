'use client';

const partners = [
  'LIC',
  'HDFC Life',
  'ICICI Prudential',
  'Star Health',
  'SBI Mutual Fund',
  'Bajaj Allianz',
  'Mirae Asset',
  'Tata AIA',
];

export default function Partners() {
  return (
    <div className="py-[60px] px-[5%] border-t border-border">
      <p className="text-center text-[12px] uppercase tracking-[2px] text-text-muted mb-10">
        Partnered with India&apos;s Leading Financial Institutions
      </p>
      
      <div className="flex items-center justify-center gap-12 flex-wrap">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="font-cormorant text-[18px] font-semibold text-[rgba(255,255,255,0.25)] tracking-[1px] transition-colors duration-300 hover:text-[rgba(201,168,76,0.5)] cursor-default"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
}
