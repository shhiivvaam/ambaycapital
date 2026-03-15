"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import { PrimaryButton } from "@/components/ui/Buttons";
import {
  formatINR,
  formatInputINR,
  calcSIP,
  calcRetirement,
  calcInsurance,
  calcEMI,
} from "@/lib/calculators";

export type CalcTab = "sip" | "retirement" | "insurance" | "emi";

interface SliderProps {
  label: string;
  displayValue: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}

function Slider({ label, displayValue, min, max, step, value, onChange }: SliderProps) {
  return (
    <div className="mb-7">
      <div className="flex justify-between text-[13px] text-[#8a9ab5] mb-2.5">
        <span>{label}</span>
        <span className="text-[#c9a84c] font-medium">{displayValue}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

interface ResultCardProps {
  label: string;
  value: string;
  sub: string;
  b1Label: string;
  b1Value: string;
  b2Label: string;
  b2Value: string;
}

function ResultCard({ label, value, sub, b1Label, b1Value, b2Label, b2Value }: ResultCardProps) {
  return (
    <div
      className="rounded-2xl p-10 text-center border border-[rgba(201,168,76,0.2)] lg:-mt-44"
      style={{
        background: "linear-gradient(135deg, rgba(201,168,76,0.10), rgba(201,168,76,0.05))",
      }}
    >
      <p className="text-[13px] text-[#8a9ab5] mb-3">{label}</p>
      <motion.p
        key={value}
        initial={{ scale: 0.9, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        className="font-serif text-[52px] font-medium text-[#c9a84c] leading-none mb-2"
      >
        {value}
      </motion.p>
      <p className="text-[13px] text-[#8a9ab5] mb-8">{sub}</p>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {[{ l: b1Label, v: b1Value }, { l: b2Label, v: b2Value }].map((item) => (
          <div key={item.l} className="bg-white/[0.04] rounded-xl p-4">
            <p className="text-[11px] text-[#8a9ab5] mb-1">{item.l}</p>
            <p className="font-serif text-[22px] font-medium text-white">{item.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-7">
        <PrimaryButton href="#contact" className="w-full justify-center">
          Get Personalised Plan →
        </PrimaryButton>
      </div>
    </div>
  );
}

export default function Calculators({ initialTab = "sip" }: { initialTab?: CalcTab }) {
  const [activeTab, setActiveTab] = useState<CalcTab>(initialTab);

  // SIP state
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipReturn, setSipReturn] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  // Retirement state
  const [retAge, setRetAge] = useState(30);
  const [retSavings, setRetSavings] = useState(10000);
  const [retReturn, setRetReturn] = useState(10);

  // Insurance state
  const [insIncome, setInsIncome] = useState(600000);
  const [insDep, setInsDep] = useState(2);
  const [insLoan, setInsLoan] = useState(1000000);

  // EMI state
  const [emiPrincipal, setEmiPrincipal] = useState(1000000);
  const [emiRate, setEmiRate] = useState(8.5);
  const [emiYears, setEmiYears] = useState(5);

  const sipResult = calcSIP(sipAmount, sipReturn, sipYears);
  const retResult = calcRetirement(retAge, retSavings, retReturn);
  const insResult = calcInsurance(insIncome, insDep, insLoan);
  const emiResult = calcEMI(emiPrincipal, emiRate, emiYears);

  const resultData = useMemo((): ResultCardProps => {
    if (activeTab === "sip") {
      return {
        label: "Estimated Corpus at Maturity",
        value: formatINR(sipResult.corpus),
        sub: `In ${sipYears} years at ${sipReturn}% p.a.`,
        b1Label: "Amount Invested",
        b1Value: formatINR(sipResult.invested),
        b2Label: "Est. Returns",
        b2Value: formatINR(sipResult.returns),
      };
    }
    if (activeTab === "retirement") {
      return {
        label: "Retirement Corpus by Age 60",
        value: formatINR(retResult.corpus),
        sub: `${retResult.years} years of investing until retirement`,
        b1Label: "Total Invested",
        b1Value: formatINR(retResult.invested),
        b2Label: "Wealth Gained",
        b2Value: formatINR(retResult.returns),
      };
    }
    if (activeTab === "emi") {
      return {
        label: "Monthly EMI",
        value: formatINR(emiResult.emi),
        sub: `For ${emiYears} years at ${emiRate}% p.a.`,
        b1Label: "Principal",
        b1Value: formatINR(emiResult.principal),
        b2Label: "Total Interest",
        b2Value: formatINR(emiResult.totalInterest),
      };
    }
    return {
      label: "Recommended Life Cover",
      value: formatINR(insResult.cover),
      sub: "Based on income, dependents & liabilities",
      b1Label: "Income Replacement",
      b1Value: formatINR(insResult.incomeReplacement),
      b2Label: "Loan Coverage",
      b2Value: formatINR(insResult.loans),
    };
  }, [activeTab, sipResult, retResult, insResult, emiResult, sipYears, sipReturn, emiYears, emiRate]);

  const TABS: { id: CalcTab; label: string }[] = [
    { id: "sip", label: "SIP Calculator" },
    { id: "retirement", label: "Retirement" },
    { id: "insurance", label: "Insurance Cover" },
    { id: "emi", label: "EMI Calculator" },
  ];

  return (
    <section
      id="calculators"
      className="py-24 px-[5%] relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #112240, #0a1628)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.07), transparent 60%)",
        }}
      />

      <div className="relative z-10">
        <SectionTag>Financial Tools</SectionTag>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-4"
        >
          Plan Smarter with Our
          <br />
          <em className="italic text-[#c9a84c]">Free Calculators.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[16px] text-[#8a9ab5] leading-relaxed max-w-[560px] font-light mb-12"
        >
          Estimate returns, plan your SIP, figure out EMI, or calculate the right insurance
          cover for your family.
        </motion.p>

        {/* Tabs */}
        <div
          className="flex flex-wrap gap-1 p-1 rounded-lg border border-[rgba(201,168,76,0.2)] 
            bg-white/[0.04] w-fit mb-12"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-md text-sm transition-all duration-200 font-sans ${
                activeTab === tab.id
                  ? "bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] text-[#0a1628] font-semibold"
                  : "text-[#8a9ab5] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Calc grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Inputs */}
          <div className="min-h-[300px]">
            {activeTab === "sip" && (
              <motion.div
                key="sip"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Slider
                  label="Monthly SIP Amount"
                  displayValue={formatInputINR(sipAmount)}
                  min={500} max={100000} step={500}
                  value={sipAmount} onChange={setSipAmount}
                />
                <Slider
                  label="Expected Annual Return"
                  displayValue={`${sipReturn}%`}
                  min={6} max={20} step={0.5}
                  value={sipReturn} onChange={setSipReturn}
                />
                <Slider
                  label="Investment Duration"
                  displayValue={`${sipYears} years`}
                  min={1} max={30} step={1}
                  value={sipYears} onChange={setSipYears}
                />
              </motion.div>
            )}

            {activeTab === "retirement" && (
              <motion.div
                key="retirement"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Slider
                  label="Current Age"
                  displayValue={`${retAge} years`}
                  min={20} max={55} step={1}
                  value={retAge} onChange={setRetAge}
                />
                <Slider
                  label="Monthly Savings"
                  displayValue={formatInputINR(retSavings)}
                  min={1000} max={200000} step={1000}
                  value={retSavings} onChange={setRetSavings}
                />
                <Slider
                  label="Expected Return"
                  displayValue={`${retReturn}%`}
                  min={6} max={18} step={0.5}
                  value={retReturn} onChange={setRetReturn}
                />
              </motion.div>
            )}

            {activeTab === "insurance" && (
              <motion.div
                key="insurance"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Slider
                  label="Annual Income"
                  displayValue={formatINR(insIncome)}
                  min={200000} max={5000000} step={50000}
                  value={insIncome} onChange={setInsIncome}
                />
                <Slider
                  label="Number of Dependents"
                  displayValue={`${insDep}`}
                  min={0} max={6} step={1}
                  value={insDep} onChange={setInsDep}
                />
                <Slider
                  label="Outstanding Loans"
                  displayValue={formatINR(insLoan)}
                  min={0} max={10000000} step={100000}
                  value={insLoan} onChange={setInsLoan}
                />
              </motion.div>
            )}

            {activeTab === "emi" && (
              <motion.div
                key="emi"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Slider
                  label="Loan Amount"
                  displayValue={formatINR(emiPrincipal)}
                  min={100000} max={50000000} step={100000}
                  value={emiPrincipal} onChange={setEmiPrincipal}
                />
                <Slider
                  label="Interest Rate"
                  displayValue={`${emiRate}%`}
                  min={5} max={20} step={0.5}
                  value={emiRate} onChange={setEmiRate}
                />
                <Slider
                  label="Loan Tenure"
                  displayValue={`${emiYears} years`}
                  min={1} max={30} step={1}
                  value={emiYears} onChange={setEmiYears}
                />
              </motion.div>
            )}
          </div>

          {/* Result */}
          <ResultCard {...resultData} />
        </div>
      </div>
    </section>
  );
}
