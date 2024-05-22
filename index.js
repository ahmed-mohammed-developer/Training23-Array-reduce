const grades = [10, 15, 5];
const sum = grades.reduce((total, current) => {
  return total + current;
}, 0);
console.log(sum);

let grades2 = [10, 5, 15, 20];
let sum2 = grades2.reduce((t, x) => {
  console.log(`Total is ${t}`);
  console.log(`Current is ${x}`);
  console.log("---");
  return t + x;
}, 0);

console.log(`Sum is ${sum2}`);

const numbers = [5, 2, 10];
const mul = numbers.reduce((a, b) =>{
  console.log(`Total is ${a}`);
  console.log(`Current is ${b}`);
  console.log("---");
  return a * b;
}, 1);

console.log(mul);


const sumNu = numbers => {
  return numbers.reduce((total, current)=>{
    return total + current;
  }, 5);
};
console.log(sumNu([10, 20, 30])) // 60

const muNu = numbers => {
  return numbers.reduce((t, s)=>{
    return t * s;

  }, 1);
};

console.log(muNu([10, 20, 30]));
