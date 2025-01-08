// main variables for game's whole function
let valueMain = 0;
let valuePower = 1;
let gameState = false;
let darkMode = false;

// simple update function to make this more simple
function update() {
  document.getElementById("value").innerHTML = valueMain;
}

// starts the game and removes the start button
document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start");

  startBtn.onclick = function () {
    gameState = true;
    startBtn.remove();
    buttonFunc();
    update();
  };
});

// main game functions
function buttonFunc() {
// create and adds buttons to the DOM  {
  const buttons = [
    { id: "increment", text: "increment" },
    { id: "reset", text: "reset" },
    { id: "decrement", text: "decrement" },
    { id: "mode", text: "change mode" },
  ];

  buttons.forEach((button) => {
    const btn = document.createElement("button");
    btn.setAttribute("id", button.id);
    btn.setAttribute("class", button.id);
    btn.innerHTML = button.text;
    document.body.appendChild(btn);
  });
// }

  // add event listeners to the buttons
  document.getElementById("increment").onclick = function () {
    valueMain += valuePower;
    update();
  };

  document.getElementById("decrement").onclick = function () {
    valueMain -= valuePower;
    update();
  };

  document.getElementById("reset").onclick = function () {
    valueMain = 0;
    update();
  };

  // DARK MODE BABY WOOOOO (rest your eyes sweet child)
  document.getElementById("mode").onclick = function () {
    if (darkMode) {
      document.querySelector("body").style.backgroundColor =
        "rgb(255, 252, 232)";
      document.getElementById("value").style.color = "rgb(28, 28, 41)";
      console.log("kill yourself");
      darkMode = false;
    } else {
      document.querySelector("body").style.backgroundColor = "rgb(28, 28, 41)";
      document.getElementById("value").style.color = "rgb(255, 252, 232)";
      console.log("dark mode");
      darkMode = true;
    }
    update();
  };
}
