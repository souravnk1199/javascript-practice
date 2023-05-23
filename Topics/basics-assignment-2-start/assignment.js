const task3Element = document.getElementById("task-3");

function greet() {
  alert("Hello there!");
}

function greetUser(name) {
  alert(name);
}

function concatString(name1, name2, name3) {
  return `${name1} ${name2} ${name3}`;
}

greet();
greetUser("Sourav");

task3Element.addEventListener("click", greet);

alert(concatString("Sourav", "Anshul", "Prince"));
