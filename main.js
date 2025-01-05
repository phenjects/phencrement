// NOTE: learn abt objects
//       dumbfuck

// main variables for game's whole function
let valueMain = 0;
let valuePower = 1;
let gameState = false;
const startBtn = document.getElementById("start");

// simple update function to make this more simple
function update() {
  document.getElementById("value").innerHTML = valueMain;
}

// starts the game and removes the start button
startBtn.onclick = function () {
  gameState = true;
  startBtn.remove();
  buttonCreate();
  buttonFunc();
  update();
};

// button creation function
function buttonCreate() {
  // creates the buttons
  const incrementBtn = document.createElement("button");
  const decrementBtn = document.createElement("button");
  const resetBtn = document.createElement("button");

  // adds the names to the buttons
  incrementBtn.innerHTML = "increment";
  decrementBtn.innerHTML = "decrement";
  resetBtn.innerHTML = "reset";

  // adds the attributes to the buttons
  incrementBtn.setAttribute("id", "increment");
  decrementBtn.setAttribute("id", "decrement");
  resetBtn.setAttribute("id", "reset");

  console.log("buttons created");
}

// main game functions
function buttonFunc() {
  incrementBtn.onclick = function () {
    valueMain += valuePower;
    console.log("inc");
    update();
  };

  decrementBtn.onclick = function () {
    valueMain -= valuePower;
    console.log("dec");
    update();
  };

  resetBtn.onclick = function () {
    valueMain = 0;
    console.log("res");
    update();
  };
}
