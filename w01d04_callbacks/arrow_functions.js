const yellAtJames = function(anotherFunction){
  const statement = anotherFunction("James");
  return `${statement.toUpperCase()}!!!`;
};

// const sayHello = function(name){
//   return `Hello, ${name}`;
// };

// const sayHello = (name) => {
//   return `Hello, ${name}`;
// };

// const sayHello = name => {
//   return `Hello, ${name}`;
// }

const sayHello = name => `Hello, ${name}`;

// const result = yellAtJames(function(name){
//   return `Hello, ${name}`;
// });

const result = yellAtJames(name => `Hello, ${name}`);

console.log(result);