export function formatINR(n: number): string {
  if (n >= 10_000_000) return `₹${(n / 10_000_000).toFixed(1)} Cr`;
  if (n >= 100_000) return `₹${(n / 100_000).toFixed(1)} L`;
  if (n >= 1_000) return `₹${(n / 1_000).toFixed(1)} K`;
  return `₹${n}`;
}

export function formatInputINR(n: number): string {
  if (n >= 100_000) return `₹${(n / 100_000).toFixed(1)} L`;
  if (n >= 1_000) return `₹${(n / 1_000).toFixed(0)},000`;
  return `₹${n}`;
}

export function calcSIP(monthly: number, annualRate: number, years: number) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const corpus = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = monthly * n;
  return { corpus, invested, returns: corpus - invested };
}

export function calcRetirement(
  currentAge: number,
  monthlySavings: number,
  annualRate: number
) {
  const years = 60 - currentAge;
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const corpus = monthlySavings * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = monthlySavings * n;
  return { corpus, invested, returns: corpus - invested, years };
}

export function calcInsurance(
  annualIncome: number,
  dependents: number,
  loans: number
) {
  const cover = annualIncome * 15 + dependents * annualIncome * 3 + loans;
  const incomeReplacement = annualIncome * 15;
  return { cover, incomeReplacement, loans };
}

export function calcEMI(principal: number, annualRate: number, tenureYears: number) {
  const r = annualRate / 12 / 100;
  const n = tenureYears * 12;
  const emi = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalAmount = emi * n;
  const totalInterest = totalAmount - principal;
  return { emi, principal, totalInterest, totalAmount };
}
