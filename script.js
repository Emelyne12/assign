document.getElementById("calculateBtn").addEventListener("click", function() {
  // Get input values
  let principal = parseFloat(document.getElementById("principal").value);
  let annualRate = parseFloat(document.getElementById("rate").value);
  let years = parseFloat(document.getElementById("years").value);
  let result = document.getElementById("result");

  // Input validation
  if (isNaN(principal) || isNaN(annualRate) || isNaN(years) ||
      principal <= 0 || annualRate <= 0 || years <= 0) {
    result.textContent = "⚠ Please enter valid positive numbers for all fields.";
    result.style.color = "red";
    return;
  }

  // Convert annual rate to monthly and calculate total months
  let monthlyRate = annualRate / 100 / 12;
  let totalPayments = years * 12;

  // Mortgage formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
  let monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
                       (Math.pow(1 + monthlyRate, totalPayments) - 1);

  // Display result
  result.style.color = "green"
  {monthlyPayment.toFixed(2)};
});