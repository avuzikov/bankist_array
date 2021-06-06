'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//let arr = ['a', 'b', 'c', 'd', 'e'];
//SLICE
/*console.log(arr.slice(2)); //does not mutate the original array, returns the new one
  console.log(arr.slice(2, 4));
  console.log(arr.slice(-2)); //last 2 elements
  console.log(arr.slice(1, -2));
  console.log(arr.slice()); //shallow copy of the new array
  */
//SPLICE: as slice, but mutates the original array
//parameters: what elements must be deleted from the array.
//First parameter - start element, second - number of elements

//console.log(arr.splice(2));
//arr.splice(3);
//console.log(arr);

//REVERSE
//const arr2 = ['j', 'i', 'h', 'g', 'j'];

//console.log(arr2.reverse()); //mutates the array
//console.log(arr2);

//CONCAT
//const letters = arr.concat(arr2); //does not mutate the array
//console.log(letters);
//the same
//console.log([...arr, ...arr2]);

//JOIN
//console.log(letters.join(' - '));

//for (const movement of movements) {
/*for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
      console.log(`Movement ${i + 1}: You deposited ${movement}.`);
    } else {
      console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}.`);
    }
  }
  */

//FOR EACH takes a function and applies it to all elements
//console.log('--- FOR EACH ---');
/*movements.forEach(function (movement, i, array) {
    if (movement > 0) {
      console.log(`Movement ${i + 1}: You deposited ${movement}.`);
    } else {
      console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}.`);
    }
  });
  */
//FOR EACH for maps
/*
  currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
  });*/
//FOR EACH for sets
/*
  const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
  console.log(currenciesUnique);
  currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
  });*/
//key and value are the same to avoid confusion
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const newDogsJulia = dogsJulia.slice(1, -2);
  const dogs = newDogsJulia.concat(dogsKate);
  dogs.forEach(function (value, key, array) {
    console.log(`Dog number ${key + 1}
    is ${
      value < 3 ? 'still a puppy🐶' : `an adult, and is ${value} years old`
    }`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


//MAP EXAMPLE

const euroToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

//FILTER filters out some elements. Need to receive a boolean function as a parameter
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(elem => elem < 0);
console.log(withdrawals);


console.log(movements);

//accumulator -> SNOWBALL. Parameters are the function and the initial value of accumulator
const balance = movements.reduce(function (accumulator, cur, i, arr) {
  console.log(`Iteration ${i}: ${accumulator}`);
  return accumulator + cur;
}, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

//Maximum value of the movements array
const maxValue = movements.reduce(
  (accumulator, value, index, array) => Math.max(accumulator, value),
  movements[0]
);
console.log(maxValue);

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (data) {
  const humanAgeAverage = data
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((accumulator, elem, i, arr) => accumulator + elem / arr.length, 0);
  return humanAgeAverage;
};

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));

const firstWithdrawal = movements.find(mov => mov < 0); //will return only the first element of the array satisfying this condition

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc);
  }
}

console.log(movements);

//EQUALITY
console.log(movements.includes(-130));
//CONDITION
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // returns [1, 2, 3, 4, 5, 6 ,7 ,8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // returns [[1, 2], 3, 4, [5, 6], 7, 8]
//flat goes only one level deep.
//To change this behavious depth value is given to the function
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((a, b) => a + b, 0);
console.log(overallBalance);

//the same with chaining

const overallBalance1 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance1);

//the same with flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
//flatMap goes only 1 level deep. If there is a need to go deeper, usage of flat and map are still required

//SORTING
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //mutates the original array!!
console.log(owners);

//Numbers: sort method does sorting based on strings
console.log(movements);
console.log(movements.sort()); //WRONG!

//return < 0 A, B
//return >= 0 B, A
//ascending order:
console.log(movements.sort((a, b) => a - b));
//descending order:
console.log(movements.sort((a, b) => b - a));

const a = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//if only one argument is passed, it created an array with this number of empty elements
const x = new Array(7);
console.log(x);
//we also cannot call map method on the new array
//console.log(x.map(() => 5));
//but we can call fill method. This method fills the entire array with the given value
//x.fill(1);
//console.log(x);
//fills the array with value 1 starting from the 3rd position and ending on the 5th postion:
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1); // array on ones
console.log(y);

const z = Array.from({ length: 7 }, (_, index) => index + 1); //values from 1 to 7
console.log(z);

const zz = Array.from({ length: 100 }, () => Math.floor(Math.random() * 6) + 1);
console.log(zz);

//1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);
//2.
let numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits1000);
//other solution
numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => count + (cur >= 1000 ? 1 : 0), 0);
console.log(numDeposits1000);

let a = 10;
console.log(a++); //10
console.log(a); //11

//3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      //cur > 0 ? (sum.deposits += cur) : (sum.withdrawals -= cur);
      sum[cur > 0 ? 'deposits' : 'withdrawals'] += Math.abs(cur);
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//4.
//this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'and', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

*/

//challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//task1
/*dogs.map(dog => {
  dog['recommendedFood'] = dog['weight'] ** 0.75 * 28;
  return dog;
});*/
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

//task 2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  sarahDog.curFood > sarahDog.recommendedFood * 1.1
    ? 'Dog eats too much'
    : sarahDog.curFood < sarahDog.recommendedFood * 0.9
    ? 'Dog eats too little'
    : 'Dog eats healthy'
);
//task 3

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .map(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .map(dog => dog.owners);

console.log(ownersEatTooMuch, ownersEatTooLittle);

//task 4
console.log(`${ownersEatTooMuch.flat().join(' and ')}'s dogs eat too much!"`);
console.log(
  `${ownersEatTooLittle.flat().join(' and ')}'s dogs eat too little!"`
);
//task 5
console.log(dogs.some(dog => dog.curFood === Math.round(dog.recommendedFood)));
//task 6
console.log(
  dogs.some(
    dog =>
      dog.curFood < dog.recommendedFood * 1.1 &&
      dog.curFood > dog.recommendedFood * 0.9
  )
);
//task 7
console.log(
  dogs.filter(
    dog =>
      dog.curFood < dog.recommendedFood * 1.1 &&
      dog.curFood > dog.recommendedFood * 0.9
  )
);
//task 8
console.log(dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood));
console.log(dogs);
