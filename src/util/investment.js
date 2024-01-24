export function calculateInvestmentResults({
  initialInvestment = 0,
  annualInvestment = 0,
  expectedReturn = 0,
  duration = 0,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1,
      growth: interestEarnedInYear + annualInvestment, // Consider using a term like "growth" to encompass both interest and additional investments
      valueEndOfYear: investmentValue,
      annualInvestment,
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
