export default function Services() {
  const services = [
    { icon: '🛡️', title: 'Life Insurance', desc: "Term plans, child plans, and retirement-linked policies to secure your loved ones' future." },
    { icon: '❤️', title: 'Health Insurance', desc: 'Family floater, senior citizen plans, and critical illness covers for complete health protection.' },
    { icon: '📈', title: 'Mutual Funds', desc: 'SIP investments, ELSS tax saving, and long-term wealth creation through curated fund selection.' },
    { icon: '🚗', title: 'Motor Insurance', desc: 'Comprehensive car and bike insurance with hassle-free renewals and claim assistance.' },
    { icon: '🏦', title: 'Financial Planning', desc: 'Personalised plans for tax saving, wealth management, and achieving your financial goals.' },
    { icon: '🌅', title: 'Retirement Planning', desc: 'Build a stress-free retirement with the right corpus strategy, annuities, and pension plans.' },
    { icon: '🏢', title: 'Business Insurance', desc: 'Protect your enterprise with comprehensive business liability, fire, and asset coverage.' },
    { icon: '✈️', title: 'Travel Insurance', desc: 'Domestic and international travel coverage for medical emergencies, trip cancellations, and more.' },
  ];

  return (
    <section className="section services-section" id="services">
      <div className="services-header">
        <div>
          <div className="section-tag">What We Offer</div>
          <h2 className="section-title">Every Financial Solution,<br /><em>Under One Roof.</em></h2>
        </div>
        <p className="section-sub">
          From protecting your family with the right insurance to growing your wealth through smart investments — we cover it all.
        </p>
      </div>
      <div className="services-grid reveal">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <div className="service-name">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}
