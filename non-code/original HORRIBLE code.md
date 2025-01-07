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
  buttonFunc();
  update();
};

// main game functions
function buttonFunc() {
  // adds the buttons (not to the DOM)
  const incrementBtn = document.createElement("button");
  const decrementBtn = document.createElement("button");
  const resetBtn = document.createElement("button");

  // adds the names of the buttons
  incrementBtn.innerHTML = "increment";
  decrementBtn.innerHTML = "decrement";
  resetBtn.innerHTML = "reset";

  // adds the attributes to the buttons
  incrementBtn.setAttribute("id", "increment");
  decrementBtn.setAttribute("id", "decrement");
  resetBtn.setAttribute("id", "reset");

  // adds the buttons (to the DOM)
  document.body.appendChild(incrementBtn);
  document.body.appendChild(decrementBtn);
  document.body.appendChild(resetBtn);

  // button functions
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
