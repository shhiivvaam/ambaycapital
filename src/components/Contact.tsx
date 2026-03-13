'use client';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-layout">
        <div className="contact-info reveal">
          <div className="section-tag">Get In Touch</div>
          <h3 className="section-title" style={{fontSize:'clamp(28px,3vw,42px)'}}>
            Let&apos;s Start Your<br /><em>Financial Journey.</em>
          </h3>
          <p>Fill out the form and one of our advisors will reach out within 24 hours for a free, no-obligation consultation.</p>
          <div className="contact-detail">
            <div className="contact-icon">📍</div>
            <div className="contact-text"><strong>Office Address</strong>Your City, India</div>
          </div>
          <div className="contact-detail">
            <div className="contact-icon">📞</div>
            <div className="contact-text"><strong>Phone / WhatsApp</strong>+91 XXXXX XXXXX</div>
          </div>
          <div className="contact-detail">
            <div className="contact-icon">✉️</div>
            <div className="contact-text"><strong>Email</strong>hello@ambaycapital.in</div>
          </div>
          <div style={{marginTop:'40px',padding:'24px',background:'rgba(201,168,76,0.07)',border:'1px solid var(--border)',borderRadius:'12px'}}>
            <div style={{fontFamily:'var(--font-cormorant,serif)',fontSize:'20px',marginBottom:'8px'}}>IRDAI &amp; AMFI Certified</div>
            <div style={{fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>
              Ambay Capital is a SEBI registered investment advisor and IRDAI licensed insurance broker. All advice is regulated and client interests are protected.
            </div>
          </div>
        </div>

        <div className="form-card reveal">
          <div className="form-title">Book Your Free Consultation</div>
          <div className="form-sub">No charges, no obligations — just expert financial guidance.</div>
          {submitted ? (
            <div style={{textAlign:'center',padding:'40px 0'}}>
              <div style={{fontSize:'48px',marginBottom:'16px'}}>✓</div>
              <div style={{fontFamily:'var(--font-cormorant,serif)',fontSize:'24px',color:'var(--gold)',marginBottom:'8px'}}>Request Submitted!</div>
              <div style={{fontSize:'14px',color:'var(--text-muted)'}}>We&apos;ll call you shortly.</div>
            </div>
          ) : (
            <form onSubmit={e=>{e.preventDefault();setSubmitted(true);}}>
              <div className="form-row">
                <div className="form-group"><label>First Name</label><input type="text" placeholder="Rahul" /></div>
                <div className="form-group"><label>Last Name</label><input type="text" placeholder="Sharma" /></div>
              </div>
              <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="+91 XXXXX XXXXX" /></div>
              <div className="form-group"><label>Email Address</label><input type="email" placeholder="rahul@email.com" /></div>
              <div className="form-group"><label>City</label><input type="text" placeholder="Mumbai" /></div>
              <div className="form-group">
                <label>I&apos;m Interested In</label>
                <select>
                  <option>Life Insurance</option>
                  <option>Health Insurance</option>
                  <option>Motor Insurance</option>
                  <option>Mutual Funds / SIP</option>
                  <option>Retirement Planning</option>
                  <option>Tax Saving</option>
                  <option>Wealth Management</option>
                  <option>Business Insurance</option>
                  <option>Complete Financial Review</option>
                </select>
              </div>
              <div className="form-group"><label>Message (Optional)</label><textarea placeholder="Tell us about your financial goals..."></textarea></div>
              <button type="submit" className="form-submit">Request Free Consultation →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
