import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="#" className="nav-logo" style={{display:'inline-flex'}}>
            <div className="logo-icon">A</div>
            <div className="logo-text">Ambay <span>Capital</span></div>
          </Link>
          <p>Insurance, Investments &amp; Wealth Planning for every stage of life. Your trusted financial partner since 2015.</p>
          <div className="footer-social">
            <Link className="social-btn" href="#">in</Link>
            <Link className="social-btn" href="#">f</Link>
            <Link className="social-btn" href="#">𝕏</Link>
            <Link className="social-btn" href="#">▶</Link>
          </div>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            {['Life Insurance','Health Insurance','Motor Insurance','Travel Insurance','Business Insurance'].map(i=>(
              <li key={i}><Link href="#">{i}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Investments</h5>
          <ul>
            {['Mutual Funds','SIP Planning','ELSS Tax Saving','Retirement Plans','Wealth Management'].map(i=>(
              <li key={i}><Link href="#">{i}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            {['About Us','Blog','Calculators','Contact','Privacy Policy'].map(i=>(
              <li key={i}><Link href="#">{i}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Ambay Capital. All rights reserved. IRDAI Reg. No. XXXXXXXXX</p>
        <div className="footer-rera">Mutual Fund investments are subject to market risks. Read all scheme documents carefully.</div>
      </div>
    </footer>
  );
}
