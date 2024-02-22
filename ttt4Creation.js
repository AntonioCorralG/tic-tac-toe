const NUM_SQUARES = 9;
for (i = 0; i < NUM_SQUARES; i++) {
  id = i;
  document.write("<div class='square' id='" + id + "'></div>");
}

let turn = startingPlayer();

function startingPlayer() {
  let randomChoice = Math.random() < 0.5;
  startingPlayer = randomChoice ? "X" : "O";
  alert(`The starting player is ${startingPlayer}`);
  return startingPlayer;
}

let tttBox = document.querySelectorAll(".square");
tttBox.forEach(function (clickedBox) {
  clickedBox.addEventListener("click", function (e) {
    squareClicked = document.getElementById(e.target.id);

    if (squareClicked.textContent === "" && turn === "X") {
      squareClicked.textContent = "X";
      document.getElementById("nextTurn").innerText = `Next Turn: O`;
      turn = "O";
    } else if (squareClicked.textContent === "" && turn === "O") {
      squareClicked.textContent = "O";
      document.getElementById("nextTurn").innerText = `Next Turn: X`;
      turn = "X";
    }
  });
});
