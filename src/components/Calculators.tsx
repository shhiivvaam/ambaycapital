'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Tab = 'sip' | 'retirement' | 'insurance';

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<Tab>('sip');

  // SIP State
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipReturn, setSipReturn] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  // Retirement State
  const [retAge, setRetAge] = useState(30);
  const [retSavings, setRetSavings] = useState(10000);
  const [retReturn, setRetReturn] = useState(10);

  // Insurance State
  const [insIncome, setInsIncome] = useState(600000);
  const [insDep, setInsDep] = useState(2);
  const [insLoan, setInsLoan] = useState(1000000);

  // Results State
  const [result, setResult] = useState({
    label: '',
    value: '',
    sub: '',
    b1Label: '',
    b1Value: '',
    b2Label: '',
    b2Value: '',
  });

  const fmt = (n: number) => {
    if (n >= 10000000) return '₹' + (n / 10000000).toFixed(1) + ' Cr';
    if (n >= 100000) return '₹' + (n / 100000).toFixed(1) + ' L';
    if (n >= 1000) return '₹' + (n / 1000).toFixed(1) + ' K';
    return '₹' + n;
  };

  const fmtInput = (n: number) => {
    if (n >= 100000) return '₹' + (n / 100000).toFixed(1) + ' L';
    if (n >= 1000) return '₹' + (n / 1000).toFixed(0) + ',000';
    return '₹' + n;
  };

  useEffect(() => {
    if (activeTab === 'sip') {
      const r = sipReturn / 100 / 12;
      const n = sipYears * 12;
      const corpus = sipAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const invested = sipAmount * n;
      
      setResult({
        label: 'Estimated Corpus at Maturity',
        value: fmt(corpus),
        sub: `In ${sipYears} years at ${sipReturn}% p.a.`,
        b1Label: 'Amount Invested',
        b1Value: fmt(invested),
        b2Label: 'Est. Returns',
        b2Value: fmt(corpus - invested),
      });
    } else if (activeTab === 'retirement') {
      const r = retReturn / 100 / 12;
      const yrs = 60 - retAge;
      const n = yrs * 12;
      const corpus = retSavings * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const invested = retSavings * n;

      setResult({
        label: 'Retirement Corpus by Age 60',
        value: fmt(corpus),
        sub: `${yrs} years of investing until retirement`,
        b1Label: 'Total Invested',
        b1Value: fmt(invested),
        b2Label: 'Wealth Gained',
        b2Value: fmt(corpus - invested),
      });
    } else if (activeTab === 'insurance') {
      const cover = (insIncome * 15) + (insDep * insIncome * 3) + insLoan;
      
      setResult({
        label: 'Recommended Life Cover',
        value: fmt(cover),
        sub: 'Based on income, dependents & liabilities',
        b1Label: 'Income Replacement',
        b1Value: fmt(insIncome * 15),
        b2Label: 'Loan Coverage',
        b2Value: fmt(insLoan),
      });
    }
  }, [activeTab, sipAmount, sipReturn, sipYears, retAge, retSavings, retReturn, insIncome, insDep, insLoan]);

  return (
    <section id="calculators" className="py-[100px] px-[5%] bg-gradient-to-br from-navy-mid to-navy relative overflow-hidden">
      <div className="absolute -top-[100px] -right-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(201,168,76,0.07),_transparent_60%)] rounded-full"></div>
      
      <div className="text-[11px] uppercase tracking-[2px] text-gold font-medium mb-4 flex items-center gap-3 before:content-[''] before:w-[30px] before:h-[1px] before:bg-gold">
        Financial Tools
      </div>
      
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="font-cormorant text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-4"
      >
        Plan Smarter with Our<br />
        <em className="not-italic italic text-gold">Free Calculators.</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-[16px] text-text-muted leading-[1.7] max-w-[560px] font-light mb-12"
      >
        Estimate returns, plan your SIP, or figure out the right insurance cover for your family.
      </motion.p>

      <div className="flex gap-1 bg-[rgba(255,255,255,0.04)] border border-border rounded-lg p-1 mb-12 w-fit relative z-10 overflow-x-auto max-w-full">
        {(['sip', 'retirement', 'insurance'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-md text-[14px] font-dm transition-all duration-200 whitespace-nowrap ${
              activeTab === tab 
                ? 'bg-gradient-to-br from-gold to-gold-light text-navy font-semibold' 
                : 'bg-transparent text-text-muted hover:text-white'
            }`}
          >
            {tab === 'sip' ? 'SIP Calculator' : tab === 'retirement' ? 'Retirement' : 'Insurance Cover'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        
        {/* Sliders Container */}
        <div>
          {/* SIP Sliders */}
          {activeTab === 'sip' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7">
              <div>
                <label className="flex justify-between text-[13px] text-text-muted mb-2.5">
                  Monthly SIP Amount <span className="text-gold font-medium">{fmtInput(sipAmount)}</span>
                </label>
                <input type="range" className="range-slider" min="500" max="100000" step="500" value={sipAmount} onChange={(e) => setSipAmount(Number(e.target.value))} />
              </div>
              <div>
                <label className="flex justify-between text-[13px] text-text-muted mb-2.5">
                  Expected Annual Return <span className="text-gold font-medium">{sipReturn}%</span>
                </label>
                <input type="range" className="range-slider" min="6" max="20" step="0.5" value={sipReturn} onChange={(e) => setSipReturn(Number(e.target.value))} />
              </div>
              <div>
                <label className="flex justify-between text-[13px] text-text-muted mb-2.5">
                  Investment Duration <span className="text-gold font-medium">{sipYears} years</span>
                </label>
                <input type="range" className="range-slider" min="1" max="30" step="1" value={sipYears} onChange={(e) => setSipYears(Number(e.target.value))} />
              </div>
            </motion.div>
          )}

          {/* Retirement Sliders */}
          {activeTab === 'retirement' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7">
              <div>
                <label className="flex justify-between text-[13px] text-text-muted mb-2.5">
                  Current Age <span className="text-gold font-medium">{retAge} years</span>
                </label>
                <input type="range" className="range-slider" min="20" max="55" step="1" value={retAge} onChange={(e) => setRetAge(Number(e.target.value))} />
              </div>
              <div>
                <label className="flex justify-between text-[13px] text-text-muted mb-2.5">
                  Monthly Savings <span className="text-gold font-medium">{fmtInput(retSavings)}</span>
                </label>
                <input type="range" className="range-slider" min="1000" max="200000" step="1000" value={retSavings} onChange={(e) => setRetSavings(Number(e.target.value))} />
              </div>
              <div>
                <label className="flex justify-between text-[13px] text-text-muted mb-2.5">
                  Expected Return <span className="text-gold font-medium">{retReturn}%</span>
                </label>
                <input type="range" className="range-slider" min="6" max="18" step="0.5" value={retReturn} onChange={(e) => setRetReturn(Number(e.target.value))} />
              </div>
            </motion.div>
          )}

          {/* Insurance Sliders */}
          {activeTab === 'insurance' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7">
              <div>
                <label className="flex justify-between text-[13px] text-text-muted mb-2.5">
                  Annual Income <span className="text-gold font-medium">{fmt(insIncome)}</span>
                </label>
                <input type="range" className="range-slider" min="200000" max="5000000" step="50000" value={insIncome} onChange={(e) => setInsIncome(Number(e.target.value))} />
              </div>
              <div>
                <label className="flex justify-between text-[13px] text-text-muted mb-2.5">
                  Number of Dependents <span className="text-gold font-medium">{insDep}</span>
                </label>
                <input type="range" className="range-slider" min="0" max="6" step="1" value={insDep} onChange={(e) => setInsDep(Number(e.target.value))} />
              </div>
              <div>
                <label className="flex justify-between text-[13px] text-text-muted mb-2.5">
                  Outstanding Loans <span className="text-gold font-medium">{fmt(insLoan)}</span>
                </label>
                <input type="range" className="range-slider" min="0" max="10000000" step="100000" value={insLoan} onChange={(e) => setInsLoan(Number(e.target.value))} />
              </div>
            </motion.div>
          )}
        </div>

        {/* Results Box */}
        <div className="bg-gradient-to-br from-[rgba(201,168,76,0.1)] to-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.2)] rounded-2xl p-10 text-center">
          <div className="text-[13px] text-text-muted mb-3">{result.label}</div>
          <div className="font-cormorant text-[52px] font-medium text-gold leading-none mb-2">{result.value}</div>
          <div className="text-[13px] text-text-muted mb-8">{result.sub}</div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-[rgba(255,255,255,0.04)] rounded-lg p-4">
              <div className="text-[11px] text-text-muted mb-1">{result.b1Label}</div>
              <div className="font-cormorant text-[22px] font-medium text-white">{result.b1Value}</div>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] rounded-lg p-4">
              <div className="text-[11px] text-text-muted mb-1">{result.b2Label}</div>
              <div className="font-cormorant text-[22px] font-medium text-white">{result.b2Value}</div>
            </div>
          </div>
          
          <a
            href="#contact"
            className="mt-7 w-full flex justify-center bg-gradient-to-br from-gold to-gold-light text-navy px-8 py-3.5 rounded font-semibold text-[15px] no-underline border-none cursor-pointer transition-transform duration-200 hover:-translate-y-[2px] shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
          >
            Get Personalised Plan →
          </a>
        </div>

      </div>
    </section>
  );
}
