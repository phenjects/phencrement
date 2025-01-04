// NOTE: learn abt objects
//       dumbfuck

// main variables for game's whole function
let valueMain = 0;
let valuePower = 1;
const startBtn = document.getElementById("start");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
let gameState = false;

// simple update function to make code more readable and simple
function update() {
  document.getElementById("value").innerHTML = valueMain;
  gameState = true;
}

// start button to give sort of a main menu type vibe
startBtn.addEventListener("click", function () {
  update();
});

// main game functions
function buttonFunc() {
  switch (gameState) {
    case true:
      incrementBtn.addEventListener("click", function () {
        valueMain += valuePower;
      });
    case true:
      decrementBtn.addEventListener("click", function () {
        valueMain -= valuePower;
      });
    default:
      resetBtn.addEventListener("click", function () {
        valueMain -= valueMain;
      });
  }
}

buttonFunc();
