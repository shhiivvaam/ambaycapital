'use client';

import { useState, useEffect } from 'react';

type Tab = 'sip' | 'retirement' | 'insurance';

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<Tab>('sip');
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipReturn, setSipReturn] = useState(12);
  const [sipYears, setSipYears] = useState(10);
  const [retAge, setRetAge] = useState(30);
  const [retSavings, setRetSavings] = useState(10000);
  const [retReturn, setRetReturn] = useState(10);
  const [insIncome, setInsIncome] = useState(600000);
  const [insDep, setInsDep] = useState(2);
  const [insLoan, setInsLoan] = useState(1000000);

  const [result, setResult] = useState({ label:'', value:'', sub:'', b1Label:'', b1Value:'', b2Label:'', b2Value:'' });

  const fmt = (n: number) => {
    if (n >= 10000000) return '₹' + (n/10000000).toFixed(1) + ' Cr';
    if (n >= 100000)   return '₹' + (n/100000).toFixed(1) + ' L';
    if (n >= 1000)     return '₹' + (n/1000).toFixed(1) + ' K';
    return '₹' + n;
  };
  const fmtInput = (n: number) => {
    if (n >= 100000) return '₹' + (n/100000).toFixed(1) + ' L';
    if (n >= 1000)   return '₹' + (n/1000).toFixed(0) + ',000';
    return '₹' + n;
  };

  useEffect(() => {
    if (activeTab === 'sip') {
      const r = sipReturn/100/12, n = sipYears*12;
      const corpus = sipAmount*((Math.pow(1+r,n)-1)/r)*(1+r);
      const invested = sipAmount*n;
      setResult({ label:'Estimated Corpus at Maturity', value:fmt(corpus), sub:`In ${sipYears} years at ${sipReturn}% p.a.`, b1Label:'Amount Invested', b1Value:fmt(invested), b2Label:'Est. Returns', b2Value:fmt(corpus-invested) });
    } else if (activeTab === 'retirement') {
      const r = retReturn/100/12, yrs = 60-retAge, n = yrs*12;
      const corpus = retSavings*((Math.pow(1+r,n)-1)/r)*(1+r);
      const invested = retSavings*n;
      setResult({ label:'Retirement Corpus by Age 60', value:fmt(corpus), sub:`${yrs} years of investing until retirement`, b1Label:'Total Invested', b1Value:fmt(invested), b2Label:'Wealth Gained', b2Value:fmt(corpus-invested) });
    } else {
      const cover = (insIncome*15)+(insDep*insIncome*3)+insLoan;
      setResult({ label:'Recommended Life Cover', value:fmt(cover), sub:'Based on income, dependents & liabilities', b1Label:'Income Replacement', b1Value:fmt(insIncome*15), b2Label:'Loan Coverage', b2Value:fmt(insLoan) });
    }
  }, [activeTab, sipAmount, sipReturn, sipYears, retAge, retSavings, retReturn, insIncome, insDep, insLoan]);

  const switchCalc = (type: Tab) => setActiveTab(type);

  return (
    <section className="section calc-section" id="calculators">
      <div className="section-tag">Financial Tools</div>
      <h2 className="section-title reveal">Plan Smarter with Our<br /><em>Free Calculators.</em></h2>
      <p className="section-sub reveal" style={{marginBottom:'48px'}}>
        Estimate returns, plan your SIP, or figure out the right insurance cover for your family.
      </p>

      <div className="calc-tabs">
        <button className={`calc-tab${activeTab==='sip'?' active':''}`} onClick={()=>switchCalc('sip')}>SIP Calculator</button>
        <button className={`calc-tab${activeTab==='retirement'?' active':''}`} onClick={()=>switchCalc('retirement')}>Retirement</button>
        <button className={`calc-tab${activeTab==='insurance'?' active':''}`} onClick={()=>switchCalc('insurance')}>Insurance Cover</button>
      </div>

      <div className="calc-layout">
        <div>
          {/* SIP */}
          {activeTab === 'sip' && (
            <>
              <div className="calc-input-group">
                <label>Monthly SIP Amount <span>{fmtInput(sipAmount)}</span></label>
                <input type="range" className="range-slider" min="500" max="100000" step="500" value={sipAmount} onChange={e=>setSipAmount(+e.target.value)} />
              </div>
              <div className="calc-input-group">
                <label>Expected Annual Return <span>{sipReturn}%</span></label>
                <input type="range" className="range-slider" min="6" max="20" step="0.5" value={sipReturn} onChange={e=>setSipReturn(+e.target.value)} />
              </div>
              <div className="calc-input-group">
                <label>Investment Duration <span>{sipYears} years</span></label>
                <input type="range" className="range-slider" min="1" max="30" step="1" value={sipYears} onChange={e=>setSipYears(+e.target.value)} />
              </div>
            </>
          )}
          {/* Retirement */}
          {activeTab === 'retirement' && (
            <>
              <div className="calc-input-group">
                <label>Current Age <span>{retAge} years</span></label>
                <input type="range" className="range-slider" min="20" max="55" step="1" value={retAge} onChange={e=>setRetAge(+e.target.value)} />
              </div>
              <div className="calc-input-group">
                <label>Monthly Savings <span>{fmtInput(retSavings)}</span></label>
                <input type="range" className="range-slider" min="1000" max="200000" step="1000" value={retSavings} onChange={e=>setRetSavings(+e.target.value)} />
              </div>
              <div className="calc-input-group">
                <label>Expected Return <span>{retReturn}%</span></label>
                <input type="range" className="range-slider" min="6" max="18" step="0.5" value={retReturn} onChange={e=>setRetReturn(+e.target.value)} />
              </div>
            </>
          )}
          {/* Insurance */}
          {activeTab === 'insurance' && (
            <>
              <div className="calc-input-group">
                <label>Annual Income <span>{fmt(insIncome)}</span></label>
                <input type="range" className="range-slider" min="200000" max="5000000" step="50000" value={insIncome} onChange={e=>setInsIncome(+e.target.value)} />
              </div>
              <div className="calc-input-group">
                <label>Number of Dependents <span>{insDep}</span></label>
                <input type="range" className="range-slider" min="0" max="6" step="1" value={insDep} onChange={e=>setInsDep(+e.target.value)} />
              </div>
              <div className="calc-input-group">
                <label>Outstanding Loans <span>{fmt(insLoan)}</span></label>
                <input type="range" className="range-slider" min="0" max="10000000" step="100000" value={insLoan} onChange={e=>setInsLoan(+e.target.value)} />
              </div>
            </>
          )}
        </div>

        <div className="calc-result">
          <div className="result-label">{result.label}</div>
          <div className="result-value">{result.value}</div>
          <div className="result-sub">{result.sub}</div>
          <div className="result-breakdown">
            <div className="breakdown-item">
              <div className="breakdown-label">{result.b1Label}</div>
              <div className="breakdown-value">{result.b1Value}</div>
            </div>
            <div className="breakdown-item">
              <div className="breakdown-label">{result.b2Label}</div>
              <div className="breakdown-value">{result.b2Value}</div>
            </div>
          </div>
          <a href="#contact" className="btn-primary" style={{marginTop:'28px',width:'100%',justifyContent:'center',textDecoration:'none'}}>
            Get Personalised Plan →
          </a>
        </div>
      </div>
    </section>
  );
}
