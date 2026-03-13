export default function Partners() {
  const partners = ['LIC','HDFC Life','ICICI Prudential','Star Health','SBI Mutual Fund','Bajaj Allianz','Mirae Asset','Tata AIA'];
  return (
    <div className="partners-section">
      <p className="partners-label">Partnered with India&apos;s Leading Financial Institutions</p>
      <div className="partners-row">
        {partners.map((p) => <div key={p} className="partner-item">{p}</div>)}
      </div>
    </div>
  );
}
