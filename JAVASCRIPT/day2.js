// OPERATORS
// 1 - ARTHIMATIC
// 2 - COMPARISION OPERATOR
// 3 - LOGICAL OPERATOR

// 1 - ARTHIMATIC
// +, - *, /, %%

// 2 - COMPARISION OPERATOR
// =,  ==,  ===,  >=

// L - <

// 3 - LOGICAL OPERATOR
//  && - AND OPERATOR
// || - OR OPERATOR
// ! - NOT OPERATOR

console.log(60 / 10);

let myName = "ZOHAIB";

var num = 89;

const age = 89;

console.log(age, "YEH ASSIGNMENT OPERATOR HAI");

// 40 = 40

// == - COMPARE

// 1 STRING
// 2 NUMBER
// 3 BOOLEAN - TRUE FALSE
console.log(age == num, "== WALI EXAMPLE");

let number = "34";
let number2 = 34;

console.log(number === number2);

// == - ONLY CHECKS VALUES
// === - ONLY CHECKS VALUES AND DATA TYPE

// IF ELSE CONDITION

let abidAge = 20;

if (abidAge >= 18) {
  console.log("YOU ARE ELIGIBLE FOR CNIC");
} else {
  console.log("YOU ARE NOT ELIGIBLE FOR CNIC");
}

let isLogin = true;
let balanceInCard = false;

if (isLogin || balanceInCard || true) {
  console.log("PURCHASE SUCCESSFULL");
} else {
  console.log("PLEASE LOGIN FIRST OR TOP UP YOUR ACCOUNT");
}
