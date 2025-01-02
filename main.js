// main variables for game's whole function
let valueMain = 0;
let startBtn = document.getElementById("start");

// you don't need a comment for this.
function update() {
  document.getElementById("value").innerHTML = valueMain;
}

// start button to give sort of a main menu type vibe
startBtn.addEventListener("click", function () {
  update();
});
