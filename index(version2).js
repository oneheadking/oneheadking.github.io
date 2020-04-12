/**logic
 * 1. choose any one of choice
 * 2. wait for 3s, the hand are shaking(css animation)
 * 3. the choice
 */

 
//initiaize variables
let option = ["rock", "paper", "scissors"];
let userGuessArr = [];
let userGuessElement = "";
let allBtns = document.querySelectorAll("button");

//initiaize functions
function computerGuessF() {
  let randomNum = Math.floor(Math.random() * option.length);
  let computerGuess = option[randomNum]; //rock
  let computerSrc = computerGuess + ".png";
  document.querySelector(".computer-img img").setAttribute("src", computerSrc);
  return computerGuess;
}

function check() {
  let computerGuess = computerGuessF();
  console.log(
    `userGuessArr = ${userGuessArr}, userGuess = ${userGuessElement}, computerGuess = ${computerGuess}`
  );
  winLogic();
}

function winLogic() {
  let computerGuess = computerGuessF();
  let pattern = "";
  if (userGuessElement === computerGuess) {
    pattern = "C";
  } else if (userGuessElement === "rock" && computerGuess === "scissors") {
    pattern = "A";
  } else if (userGuessElement === "scissors" && computerGuess === "paper") {
    pattern = "A";
  } else if (userGuessElement === "paper" && computerGuess === "rock") {
    pattern = "A";
  } else if (userGuessElement === "scissors" && computerGuess === "rock") {
    pattern = "B";
  } else if (userGuessElement === "paper" && computerGuess === "scissors") {
    pattern = "B";
  } else if (userGuessElement === "rock" && computerGuess === "paper") {
    pattern = "B";
  }
  switch (pattern) {
    case "A":
      document.querySelector(".title").textContent = "user win";
      userGuessArr = [];
      break;
    case "B":
      document.querySelector(".title").textContent = "Computer win";
      userGuessArr = [];
      break;
    case "C":
      document.querySelector(".title").textContent = "Draw";
      userGuessArr = [];
      break;
  }
}

//execute
for (let i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener("click", (e) => {
    let userGuess = e.target.id; //rock
    let userSrc = userGuess + ".png";
    userGuessArr.push(userGuess);
    userGuessElement = userGuessArr[0];
    document.querySelector(".player-img img").setAttribute("src", userSrc);
    check();
  });
}
