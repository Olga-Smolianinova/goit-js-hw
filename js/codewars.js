// 
// В этом простом задании вам дается число, и вы должны сделать его отрицательным. Но, может быть, число уже отрицательное?
// const makeNegative = (number) => {
//     const result = number > 0 ? -number : number;
//     return result;
// }

// const makeNegative = (number) => number > 0 ? -number : number;



// console.log(makeNegative(1)); // return -1
// console.log(makeNegative(-5)); // return -5
// console.log(makeNegative(0)); // return 0
// console.log(makeNegative(0.12)); // return -0.12


const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

console.log(getWage(baseSalary, overtime, rate));

const employee = {
  baseSalary: 30000,
  overtime: 10,
    rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(employee.getWage());

const Guest = function(name, room) {
  this.name = name;
  this.room = room;
};

const mango = new Guest('Mango', 28);

console.log(mango);

// 1. JavaScript Definition
// 2. JavaScript Mathematics
// 3. JavaScript Branches and Loops
// 4. JavaScript Arrays

// 5. JavaScript Functions
// 6. JavaScript Objects
// 7. JavaScript Spread, Rest, Destructuring
// http://bit.ly/2wAFTSQ
// http://bit.ly/39YQd66
// https://bit.ly/2Uacj0c
// https://bit.ly/39AJgY9

// https://bit.ly/3cbC2vl
// https://bit.ly/3ebVXMw
// https://bit.ly/2JTmBvx
