// NOTE: learn abt objects first
//       dumbfuck


// main variables for game's whole function
let valueMain = 0;
let valuePower = 1;
let startBtn = document.getElementById("start");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");
let gameState = false;

// simple update function to make code more readable and simple 
function update() {
  document.getElementById("value").innerHTML = valueMain;
  gameState = true
}

// start button to give sort of a main menu type vibe
startBtn.addEventListener("click", function () {
  update();
});

// main game functions
if (gameState) {
  incrementBtn.addEventListener("click", function () {
  valueMain += valuePower;
  update();
});  
  
  
}