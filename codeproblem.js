// function inchToFeet(inch){
//     const feet = inch /12;
//     return feet;
// }

// const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

//2
// function inchToFeet2(inch){
//     const feetFraction = inch / 12;
//     const feetNumber = parseInt(feetFraction);
//     const inchRemaining = inch % 12;
//     const result = feetNumber + ' ft ' + inchRemaining + ' inch. '
//     return result;
// }
// const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);

//3
// function mileToKilometer (mile){
//     const kilo = mile * 1.60934;
//     return kilo;
// }
// console.log(mileToKilometer(1));

//4
// function kiloMeterToMiles(kilo){
//     const mile = kilo * 0.6213/1;
//     return mile;
// }
// console.log(kiloMeterToMiles(1));

//5
//simple logic not 100% true
// year will be leap year if the year is divisible by 4
// function isLeapYear(year){
//     if(year % 4 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isLeapYear(2043));

//6
// those year that is not divisble by 100, if the year is divisible by 4, then it will be a leap year
// if the year is divisible by 400 then it is leap year
// function isLeapYear2(year){
//     if(year % 100 !== 0 && year % 4 === 0){
//         return true;
//     }
//     else if(year % 100 === 0 && year % 400 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isLeapYear2(2043));

// lec 2

//7
/*
function takes an array as parameter
give the average of the odd numbers in the array
*/

// // put odd number in a array
// function oddAverage(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             // console.log(number);
//             odds.push(number);
//         }

//     }
//     // odds is the array that contains only the odd numbers
//     //    console.log(odds);
//     let sum = 0;
//     for(const number of odds){
//         sum = sum + number;
//     }
//     const count = odds.length;
//     console.log(sum, count);
//     const avg = sum / count;
//     return avg;
// }
// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const avg = oddAverage(numbers);
// console.log('average of the odd number is: ', avg);

/*
array has some duplicate elements
[]
*/

// const biryanikhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
// const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

// function noDuplicate(array){
//     console.log(array);
// }
// const uniqueArray = noDuplicate(biryanikhor);
// console.log(uniqueArray);

// const biryanikhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
// const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

// function noDuplicate(array) {
//      const unique = [];
//      for (cosnt item of array){
//         if(unique.includes(item) === false){
//           unique.push(item);
//         }
//      }
//      return unique;
// }
// const uniqueArray = noDuplicate(biryanikhor);
// console.log(uniqueArray);

// // function takes an array as parameter give the average of the odd numbers in the array

// // put odd number in a array
// function oddAverage(numbers){
//   const odds = [];
//   for(const number of numbers){
//       if(number % 2 === 1){
//       //   console.log(number);
//       odds.push(number)
//       }
    
//   }
//   // odds is the array that contain only array number
//   // console.log(odds);
//   let sum = 0;
//   for(const number of odds){
//       sum = sum + number;
//   }
//   const count = odds.length;
//   console.log(sum, count);
//   const avg = sum / count;
//   return avg;
  
// }

// const numbers = [42, 13, 58, 65, 81];
// const avg = oddAverage(numbers);
// console.log('average of the odd numbers is: ', avg);

// function monthlySavings(payments, livingCost) {
//   // Validate the inputs
//   if (!Array.isArray(payments) || typeof livingCost !== 'number') {
//       return "invalid input";
//   }

//   // Initialize totalIncome
//   let totalIncome = 0;

//   // Calculate total income after applying tax
//   for (let payment of payments) {
//       if (payment >= 3000) {
//           totalIncome += payment * 0.8; // Deduct 20% tax
//       } else {
//           totalIncome += payment; // No tax for payments less than 3000
//       }
//   }

//   // Calculate the savings
//   let savings = totalIncome - livingCost;

//   // Determine the result based on savings
//   if (savings >= 0) {
//       return savings;
//   } else {
//       return "earn more";
//   }
// }

// // Example usage:
// console.log(monthlySavings([2500, 3200, 1500, 5000], 4000));

// const biryanikhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
// const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

// function noDuplicate(array){
//  const unique = [];
//  for(const item of array){
//   if(unique.includes(item) === false){
//     unique.push(item)
//   }
//  }
//  return unique;
// }

// const uniqueArray = noDuplicate(biryanikhor);
// console.log(uniqueArray);

//6
// const Math = {
//   min: function min(num1, num2){
//     return num2;
//   }
// }
// console.log(Math.min);

// const min = Math.min(45, 21, 65, 99, 126, 5, -99)
// console.log(min);
// const max = Math.max(45, 21, 65, 99, 126, 5, -99, 987);
// console.log(max);
// console.log(Math.PI);
// console.log(Math.abs(5-10));
// console.log(Math.round(2.56));
// console.log(Math.floor(2.96));
// console.log(Math.ceil(2.001));
console.log(Math.random());
console.log(Math.random()*10);
const rend = Math.round(Math.random()*10)
console.log(rend);


