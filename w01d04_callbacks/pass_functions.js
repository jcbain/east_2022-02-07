const sayHello = function(name){
  return `Hello, ${name}`;
};

const sayGoodBye = function(name){
  return `Get out of here, ${name}`;
}

// higher order function (HOF)
// a function that takes another function as parameter

const yellAtJames = function(anotherFunction){
  const statement = anotherFunction("James");
  return `${statement.toUpperCase()}!!!`;
};

const yellAtSomeone = function(name, anotherFunction){
  const statement = anotherFunction(name);
  return `${statement.toUpperCase()}!!!`;
};

const returnValue = yellAtJames(sayHello);
// console.log(returnValue);

// console.log(yellAtSomeone("Barb", sayHello))
