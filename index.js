/**logic
 * 1. choose any one of choice
 * 2. wait for 3s, the hand are shaking(css animation)
 * 3. the choice
 */
let option = ["rock", "paper", "scissors"];
let userGuessArr = [];
let userGuessElement = "";

let allBtns = document.querySelectorAll("button");
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
  if (userGuessElement === computerGuess) {
    document.querySelector(".title").textContent = "Draw";
    userGuessArr = [];
  } else if (userGuessElement === "rock" && computerGuess === "scissors") {
    document.querySelector(".title").textContent = "user win";
    userGuessArr = [];
  } else if (userGuessElement === "scissors" && computerGuess === "paper") {
    document.querySelector(".title").textContent = "user win";
    userGuessArr = [];
  } else if (userGuessElement === "paper" && computerGuess === "rock") {
    document.querySelector(".title").textContent = "user win";
    userGuessArr = [];
  } else if (userGuessElement === "scissors" && computerGuess === "rock") {
    document.querySelector(".title").textContent = "Computer win";
    userGuessArr = [];
  } else if (userGuessElement === "paper" && computerGuess === "scissors") {
    document.querySelector(".title").textContent = "Computer win";
    userGuessArr = [];
  } else if (userGuessElement === "rock" && computerGuess === "paper") {
    document.querySelector(".title").textContent = "Computer win";
    userGuessArr = [];
  }
}

function winLogic() {
  let computerGuess = computerGuessF();
    
  switch (letter) {
    case "A":
      document.querySelector(".title").textContent = "user Win";
      userGuessArr = [];
      break;
    case "B":
      if (userGuessElement === "scissors" && computerGuess === "rock") {
        document.querySelector(".title").textContent = "computer Win";
      }
      break;
  }
}
