// NOTE: learn abt objects
//       dumbfuck

// main variables for game's whole function
let valueMain = 0;
let valuePower = 1;
let gameState = false;
const startBtn = document.getElementById("start");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// simple update function to make code more readable and simple
function update() {
  document.getElementById("value").innerHTML = valueMain;
} 

startBtn.onclick = function() {
  gameState = true;
  test.remove();
  buttonFunc();
  update();
}

// main game functions
function buttonFunc() {
  incrementBtn.onclick = function() {
    valueMain += valuePower;
    console.log("inc");
    update();
  };

  decrementBtn.onclick = function() {
    valueMain -= valuePower;
    console.log("dec");
    update();
  };

  resetBtn.onclick = function() {
    valueMain = 0;
    console.log("res");
    update();
  };
}