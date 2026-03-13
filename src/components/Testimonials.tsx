export default function Testimonials() {
  const testimonials = [
    { initial:'R', name:'Rahul Sharma', role:'Software Engineer, Pune', text:'Ambay Capital completely transformed how I think about money. They set up my SIP, got me adequate life insurance, and sorted my tax planning — all in one place. I finally feel financially secure.' },
    { initial:'P', name:'Priya Mehta', role:'Homemaker, Mumbai', text:'When my husband was hospitalised, the claim process was completely smooth because Ambay Capital guided us at every step. Their after-sales support is unmatched. I recommend them to everyone.' },
    { initial:'A', name:'Arjun Patel', role:'Business Owner, Ahmedabad', text:'As a business owner I needed personal and business insurance along with investment planning. Ambay Capital handled everything seamlessly. Their expertise and genuine care for clients sets them apart.' },
  ];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-tag">Client Stories</div>
      <h2 className="section-title reveal">Trusted by Families<br /><em>Across India.</em></h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.name} className="testimonial-card reveal">
            <div className="stars">★★★★★</div>
            <span className="quote-icon">&quot;</span>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initial}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
