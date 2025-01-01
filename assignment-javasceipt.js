// Problem One Solved
function calculateTax(income, expenses) {
  if (income >= 0 && expenses >= 0 && income > expenses) {
    const profit = income - expenses;
    const netTax = (profit * 20) / 100;
    return `Net profit:${profit} ,net tax:${netTax}`;
  } else {
    return "Invalid Input";
  }
}
// Notification Generator

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  } else {
    const mail = email.split("@");
    if (mail.length === 2) {
      let first = mail[0];
      let second = mail[1];
      return ` ${first} send you a email form ${second}`;
    }
  }
}
// console.log(sendNotification("mdsamanali@gmail.com"));
