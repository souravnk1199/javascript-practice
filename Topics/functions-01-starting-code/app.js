const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We have chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoise = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is Starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoise();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(
    `Computer's Choice - ${computerChoice}\nPlayer's Choice - ${
      playerChoice || ROCK
    }\nWinner - ${winner}`
  );
});

/////////////////////////////////////////

const sumUp = (resultHandler, operation, ...numbers) => {
  // rest parameters
  const validateNumber = (number) => {
    // function inside of function
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  if (operation === "ADD") {
    for (const num of numbers) {
      sum += validateNumber(num);
    }
  } else if (operation === "SUBTRACT") {
    for (const num of numbers) {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum); // calback Functions
};

const sumUp2 = function () {
  for (let i of arguments) {
    console.log(i);
  }
};

const showResult = (result, messageText) => {
  console.log(messageText + " " + result);
};

sumUp(
  showResult.bind(this, "The result after adding all numbers is "),
  "ADD",
  1,
  2,
  3,
  4
);
sumUp(
  showResult.bind(this, "The result after adding all numbers is "),
  "ADD",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
);
sumUp(
  showResult.bind(this, "The result after subtracting all numbers is "),
  "SUBTRACT",
  5,
  6,
  7,
  8,
  9
);
