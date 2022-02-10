const yellAtJames = function(anotherFunction){
  const statement = anotherFunction("James");
  return `${statement.toUpperCase()}!!!`;
};

const sayHello = function(name){
  return `Hello, ${name}`;
};

// const result = yellAtJames(sayHello);

const result = yellAtJames(function(name){
  return `Hello, ${name}`;
});

const anotherResult = yellAtJames(function(someoneName) {
  return `You have a nice nose, ${someoneName}`
});

console.log(anotherResult);
