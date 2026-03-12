// Reduce salaries to calculate total payroll
let salaries = [50000, 60000, 70000];

let totalPayroll = salaries.reduce((total, salary) => {
  return total + salary;
}, 0);

console.log(totalPayroll);
