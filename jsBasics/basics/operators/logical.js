
// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true);

// Finanical Loan example

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('Eligible', eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE

// NOT (!)
// Returns the opposite of the operand
// it is attached to

let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused);