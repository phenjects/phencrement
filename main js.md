// main variables for game's whole function
let valueMain = 0;
let valuePower = 1;
let z;
const test = document.getElementById("t");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// simple update function to make code more readable and simple
function update() {
  document.getElementById("value").innerHTML = valueMain;
} 

test.onclick = function() {
  z = true;
  test.remove();
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

if (z) {
  buttonFunc();
  update();
}

setInterval(() => {
  console.log(z);
}, 1000);