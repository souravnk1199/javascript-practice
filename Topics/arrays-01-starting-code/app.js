/* 
const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(5);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListsItems = Array.from(listItems); // split iterables into array
console.log(arrayListsItems);
*/

/* 
const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading");
hobbies.unshift("Coding");
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = "Coding";
// hobbies[5] = "Reading"; // Rarely used
console.log(hobbies);

hobbies.splice(1, 0, "Good Food");
console.log(hobbies);

const removedElemets = hobbies.splice(-2, 1);
console.log(hobbies);
*/

/* 
const testResults = [1, 2.3, 5, 10.99, 7, -3, 21];
// const storedResults = testResults.slice(2);
const storedResults = testResults.concat([3.99, 2]);

testResults.push(55);

console.log(testResults);
console.log(storedResults);

console.log(testResults.indexOf(10.99));

const personData = [{ name: "Sourav" }, { name: "sai" }];
console.log(personData.indexOf({ name: "sai" }));

const sai = personData.find((person, index, persons) => {
  return person.name === 'sai';
});

console.log(sai); 
*/

/* 
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(prices);
console.log(taxAdjustedPrices);
*/

/* 
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

// console.log(sortedPrices.reverse());
console.log(sortedPrices);

const filteredArray = prices.filter((p) => p > 6);
console.log(filteredArray);

// let sum = 0;
// prices.forEach((price) => {
//   sum += price;
// });
// console.log(sum);

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);
console.log(sum);

const data = "new york;10.99;2000";
const transformedData = data.split(";");
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragments = ["Sourav", "Nayak"];
const userName = nameFragments.join(" ");
console.log(userName);

const copiedNameFragments = [...nameFragments];
nameFragments.unshift("Mr.");
console.log(nameFragments, copiedNameFragments);

console.log(Math.min(...prices));

const persons = [
  { name: "Sourav", age: 23 },
  { name: "sai", age: 23 },
];
const copiedPersons = persons.map((person) => ({
  name: person.name,
  age: person.age,
}));
persons.push({ name: "Birendar", age: 23 });
persons[0].age = 24;
console.log(persons, copiedPersons);
*/

// CODING EXERCISE 11
/* 
function transformToObjects(numberArray) {
  const transformedArray = numberArray.map((num) => {
    const numObj = { val: num };
    return numObj;
  });
  return transformedArray;
}
*/

/* 
const nameData = ["Sourav", "Nayak", "Mr.", 23];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);
*/
