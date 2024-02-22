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
    "XXX------",
    "---XXX---",
    "------XXX",
    "X--X--X--",
    "-X--X--X-",
    "--X--X--X",
    "X---X---X",
    "--X-X-X--",
  ];
  function checkWin() {
    for (let condition of winConditions) {
      const player = condition[0];
      if (
        player !== "-" &&
        (condition === moves.slice(0, 3).join("") ||
          condition === moves.slice(3, 6).join("") ||
          condition === moves.slice(6, 9).join("") ||
          condition === moves[0] + moves[3] + moves[6] ||
          condition === moves[1] + moves[4] + moves[7] ||
          condition === moves[2] + moves[5] + moves[8] ||
          condition === moves[0] + moves[4] + moves[8] ||
          condition === moves[2] + moves[4] + moves[6])
      ) {
        return true;
      }
    }
    return false;
  }
  function startingPlayer() {
    let randomChoice = Math.random() < 0.5;
    startingPlayer = randomChoice ? "X" : "O";
    alert(`The starting player is ${startingPlayer}`);
    return startingPlayer;
  }

  function checkStalemate() {
    return !moves.includes("-") && !checkWin();
  }

  function resetGame() {
    moves = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    document.querySelectorAll(".square").forEach((square) => {
      square.textContent = "";
    });
  }

  function endGame(winner) {
    if (winner) {
      alert(`Player ${winner} wins!`);
    } else {
      alert("Stalemate!");
    }
  }

  let tttBox = document.querySelectorAll(".square");
  tttBox.forEach(function (clickedBox) {
    clickedBox.addEventListener("click", function (e) {
      squareClicked = document.getElementById(e.target.id);

      if (squareClicked.textContent === "" && turn === "X") {
        squareClicked.textContent = "X";
        moves[squareClicked.id] = turn;
        document.getElementById("nextTurn").innerText = `Next Turn: O`;
        turn = "O";
      } else if (squareClicked.textContent === "" && turn === "O") {
        squareClicked.textContent = "O";
        moves[squareClicked.id] = turn;
        document.getElementById("nextTurn").innerText = `Next Turn: X`;
        turn = "X";
      }

      if (checkWin()) {
        endGame(turn);
      } else if (checkStalemate()) {
        endGame(null);
      }

      console.log(moves);
    });
  });
  resetGame();
});
