export default function Stats() {
  return (
    <div className="stats-strip">
      <div className="stats-grid">
        <div className="stat-item reveal">
          <div className="stat-number">500<span className="stat-suffix">+</span></div>
          <div className="stat-label">Families Protected</div>
        </div>
        <div className="stat-item reveal">
          <div className="stat-number">₹20<span className="stat-suffix">Cr+</span></div>
          <div className="stat-label">Investments Managed</div>
        </div>
        <div className="stat-item reveal">
          <div className="stat-number">10<span className="stat-suffix">+</span></div>
          <div className="stat-label">Years of Expertise</div>
        </div>
        <div className="stat-item reveal">
          <div className="stat-number">97<span className="stat-suffix">%</span></div>
          <div className="stat-label">Claim Settlement Rate</div>
        </div>
      </div>
    </div>
  );
}
