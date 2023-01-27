// homeWork-15 / ivane_tvildiani

/* 
(_________1___________)
*/

// function isEven(number) {
//   if (number % 2 == 0) {
//     console.log("Its, false.");
//   } else {
//     console.log("Its, true.");
//   }
// }

// isEven(8);
// isEven(3);

/* 
(_________2___________)
*/

// function getCurrencySymbolFromCode(currency) {
//   if (currency === "USD") {
//     console.log("$");
//     return "$";
//   }
//   if (currency === "EUR") {
//     console.log("€");
//     return "€";
//   }
//   if (currency === "GEL") {
//     console.log("₾");
//     return "₾";
//   }
//   console.log("OPS... Wrong Currency");
// }

// getCurrencySymbolFromCode("GEL");
// getCurrencySymbolFromCode("USD");
// getCurrencySymbolFromCode("GEL");
// getCurrencySymbolFromCode("EUR");
// getCurrencySymbolFromCode("RUB");

/* 
(_________3___________)
*/

// function nameCases(name) {
//   console.log(name.toUpperCase());
//   console.log(name.toLowerCase());
// }

// nameCases("my name is vano !");

/* 
(_________4___________) 
*/

// let numbersArray = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// let isEven = numbersArray.filter((number) => number % 2 === 0);
// console.log(isEven);

/* 
(_________5___________)
*/

/* VERSION - 1 */

// let personsArray = [
//   {
//     name: "Giorgi",
//     age: 21,
//   },
//   {
//     name: "Ivane",
//     age: 23,
//   },
//   {
//     name: "Mariami",
//     age: 24,
//   },
// ];

// function isPerson(person) {
//   return person.name === "Ivane";
// }

// console.log(personsArray.find(isPerson));

/* VERSION - 2 - ES6 */

// const personsArray = [
//   {
//     name: "Giorgi",
//     age: 21,
//   },
//   {
//     name: "Ivane",
//     age: 23,
//   },
//   {
//     name: "Mariami",
//     age: 24,
//   },
// ];

// const isPerson = personsArray.find(({ name }) => name === "Ivane");

// console.log(isPerson);

/* 
(_________6___________)
*/

// function calcExpense(income, expense) {
//   const profit = income - expense;
//   return profit;
// }

// const Apr = calcExpense(920, 420);
// const May = calcExpense(1080, 696);
// const Jun = calcExpense(2551, 723);

// const sumOfProfit = Apr + May + Jun;
// console.log(sumOfProfit);
