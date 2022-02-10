const nums = [ 1, 2, 3, 4, 50 ];

const addFive = (num) => num + 5;
// console.log(addFive(3));

// for(const num of nums){
//   console.log(addFive(num))
// }
const addSummedValueToArray = function(num){
  const summedValue = addFive(num) - 100;
  summedValues.push(summedValue);
}

const summedValues = [];
nums.forEach((num ) => {
  const summedValue = addFive(num) - 100;
  summedValues.push(summedValue);
})

console.log(summedValues)

const myForEach = (arr, callback) => {
  for(const element of arr){
    callback(element);
  }
};

const names = [ 'James', 'Jennifer', 'Pippa', 'Prairie' ];


const sayHello = (name) => {
  console.log(`hello, ${name}`);
};
myForEach(names, (name) => {
  console.log(`hello, ${name}`);
})
// myForEach(names, sayHello)

// myForEach(nums, (num) => {
//   console.log(addFive(num));
// });

