// //Returning the greater number
// function greaterNum(num1, num2) {
//   if (num1 > num2) {
//       return num1;
//   } else {
//       return num2;
//     }
// }
// console.log(greaterNum(32, 10));

// //Returning to English.
// function helloWorld(lang) {
//   if (lang == 'es') {
//     return ("Hola, amigo!")
//   } else if (lang == 'de') {
//       return ("Bounjour!")
//   } else {
//       return ("Hello there!")
//     }
// }
//
// console.log(helloWorld('es'));
// console.log(helloWorld('de'));
// console.log(helloWorld('en'));

// //The Grade Assigner
// function assignGrade(numscore) {
//   if (numscore > 90) {
//       return "A! Wow, you are so smart!";
//   } else if (numscore > 80) {
//       return "B! Wow, you are almost smart!";
//   } else if (numscore > 70) {
//       return "C!'s get degrees!";
//   } else if (numscore > 60) {
//       return "D! Really? Geez.";
//     } else {
//       return "That's a no bueno!";
//   }
// }
// console.log(assignGrade(81));

// //The Pluralizer
// function pluralize(noun, num) {
//   if (num > 1) {
//       return num + '' + noun + 's';
//   } else {
//       return num + noun + '';
//   }
// }
// console.log('I have ' + pluralize('cat', 4));
// console.log('I have ' + pluralize('dog', 1));

// //Adding value to end of an Array using .push method
// var groceryList1 = ["apples", "carrots", "oatmeal"]
// groceryList1.push("granola");
// console.log(groceryList1);

// //Add number to beginning of an Array using .unshift method
// var numbers1 = [1, 2, 3, 4, 5]
// numbers1.unshift(0)
// console.log(numbers1);

// //Locate indexOf on a specific value in the array i.e. 2. FIRST APPEARANCE.
// var numbers3 = [2, 13, 6, 8, 4, 2]
// numbers3.lastIndexOf()
// console.log(numbers3.lastIndexOf(2)); //5

//Loop through Arrays
// //var car = {
//   year: 2018,
//   make: "Subaru",
//   color: "Silver",
//   getData: function() {
//     return this.year+"-"+this.make+"-"+this.color;
//   }
// };
// console.log(car.getData);
