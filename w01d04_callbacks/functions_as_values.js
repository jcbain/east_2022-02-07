
const age = 76;
const yourAge = age;

const sayPetName = function(petName) {
  console.log(`my pet's name is ${petName}`);
};

const printPetName = sayPetName;

sayPetName("Pippa");
printPetName("Prairie");

const creature = {
  name: "Harry",
  type: "Bigfoot",
  hasBigFeet: true
}

printPetName['pizza'] = "some value";

console.log(printPetName);
console.log(sayPetName);
