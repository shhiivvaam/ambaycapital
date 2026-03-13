'use client';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Trusted by 500+ Families Across India
        </div>
        <h1>
          Secure Your Future with
          <em>Smart Financial Planning.</em>
        </h1>
        <p className="hero-sub">
          Insurance, Investments, Retirement Planning &amp; Wealth Advisory — all under one roof. Your
          complete financial partner for every stage of life.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">✦ Book Free Consultation</a>
          <a href="#services" className="btn-secondary">Explore Services →</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-card-stack">
          <div className="hero-card hero-card-float1">
            <div className="card-label">Portfolio Growth</div>
            <div className="card-value">+18.4%</div>
            <div className="card-sub">Avg. annual returns</div>
            <div className="card-sparkline">
              {[30,50,40,70,60,90,100].map((h,i) => (
                <div key={i} className="sparkline-bar" style={{height:`${h}%`}}></div>
              ))}
            </div>
          </div>
          <div className="hero-card hero-card-main">
            <div className="card-label">Total Assets Managed</div>
            <div className="card-value">₹20 Cr+</div>
            <div className="card-sub">Across 500+ client portfolios</div>
          </div>
          <div className="hero-card hero-card-float2">
            <div className="card-label">Claim Success Rate</div>
            <div className="card-value">97%</div>
            <div className="card-sub">Insurance claims settled</div>
          </div>
        </div>
      </div>
    </section>
  );
}
