export default function WhyUs() {
  return (
    <section className="section why-section" id="about">
      <div className="why-layout">
        <div className="why-visual reveal">
          <div className="why-big-card">
            <div className="card-label">Our Commitment</div>
            <div style={{fontFamily:'var(--font-cormorant,serif)',fontSize:'24px',margin:'12px 0',lineHeight:'1.3'}}>
              &quot;We treat every client&apos;s financial future as if it were our own.&quot;
            </div>
            <div style={{fontSize:'13px',color:'var(--text-muted)',marginTop:'16px'}}>— Ambay Capital Team</div>
            <div style={{marginTop:'28px',paddingTop:'24px',borderTop:'1px solid var(--border)',display:'flex',gap:'24px'}}>
              <div>
                <div style={{fontFamily:'var(--font-cormorant,serif)',fontSize:'28px',color:'var(--gold)'}}>IRDAI</div>
                <div style={{fontSize:'11px',color:'var(--text-muted)'}}>Certified Advisor</div>
              </div>
              <div>
                <div style={{fontFamily:'var(--font-cormorant,serif)',fontSize:'28px',color:'var(--gold)'}}>AMFI</div>
                <div style={{fontSize:'11px',color:'var(--text-muted)'}}>Registered MFD</div>
              </div>
            </div>
          </div>
          <div className="why-small-card">
            <div className="card-label">Client Satisfaction</div>
            <div style={{display:'flex',alignItems:'baseline',gap:'8px'}}>
              <div className="card-value" style={{fontSize:'40px'}}>4.9</div>
              <div style={{color:'var(--gold)',fontSize:'18px'}}>★</div>
            </div>
            <div className="card-sub">Based on 300+ reviews</div>
          </div>
        </div>
        <div>
          <div className="section-tag">Why Ambay Capital</div>
          <h2 className="section-title reveal">Financial Guidance You<br /><em>Can Actually Trust.</em></h2>
          <div className="why-list">
            {[
              { num:'01', title:'Expert, Unbiased Advice', desc:'We analyse your financial profile and goals to recommend products that genuinely suit you — not what pays us the highest commission.' },
              { num:'02', title:'End-to-End Support', desc:"From policy selection to claim settlement and portfolio reviews — we're with you at every step, not just at the point of sale." },
              { num:'03', title:'Personalised for Every Stage of Life', desc:"Whether you're a young professional, a growing family, or approaching retirement — we have solutions tailored precisely to your situation." },
              { num:'04', title:'Transparent & Accountable', desc:'No hidden charges, no jargon. We explain every recommendation clearly so you always know where your money is going.' },
            ].map((item) => (
              <div key={item.num} className="why-item reveal">
                <div className="why-num">{item.num}</div>
                <div className="why-item-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
