
// Problem One Solved
function calculateTax(income, expenses) {
  if (income>=0 && expenses>=0 && income > expenses) {
    const profit = income - expenses;
    const netTax = (profit *20) /100;
    return `Net profit:${profit} ,net tax:${netTax}`;
    
  } else {
    return "Invalid Input";
  }

 
}
console.log(calculateTax(2000, 220));
