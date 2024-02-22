window.addEventListener("load", function () {
  const gridContainer = document.getElementById("grid-container");
  const NUM_SQUARES = 9;
  let moves = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  for (i = 0; i < NUM_SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = i;
    gridContainer.appendChild(square);
  }

  let turn = startingPlayer();
  document.getElementById("startGame").addEventListener("click", resetGame);

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  function startingPlayer() {
    let randomChoice = Math.random() < 0.5;
    startingPlayer = randomChoice ? "X" : "O";
    alert(`The starting player is ${startingPlayer}`);
    return startingPlayer;
  }

  function resetGame() {
    moves = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    document.querySelectorAll(".square").forEach((square) => {
      square.textContent = "";
    });
  }

  let tttBox = document.querySelectorAll(".square");
  tttBox.forEach(function (clickedBox) {
    clickedBox.addEventListener("click", function (e) {
      squareClicked = document.getElementById(e.target.id);

      if (squareClicked.textContent === "" && turn === "X") {
        squareClicked.textContent = "X";
        document.getElementById("nextTurn").innerText = `Next Turn: O`;
        turn = "O";
        moves[squareClicked.id] = turn;
      } else if (squareClicked.textContent === "" && turn === "O") {
        squareClicked.textContent = "O";
        document.getElementById("nextTurn").innerText = `Next Turn: X`;
        turn = "X";
        moves[squareClicked.id] = turn;
      }

      console.log(moves);
    });
  });
  resetGame();
});
