/* 
const ids = new Set(["Hi", "from", "Set!"]);
ids.add(2);
ids.delete("Hi");

for (const entry of ids.entries()) {
  console.log(entry[0]);
}
*/

/* 
const person1 = { name: "Sourav" };
const person2 = { name: "Sai" };

const personData = new Map([[person1, [{ date: "Yestreday", price: 10 }]]]);

personData.set(person2, [{ date: "two weeks ago", price: 100 }]);

console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

console.log(personData.size);
*/

let person = { name: "sourav" };
const persons = new WeakSet();
persons.add(person);

// ...some operations
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, "Extra Info!");

person = null;

console.log(personData);
