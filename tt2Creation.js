const NUM_SQUARES = 9;
for (i = 0; i < NUM_SQUARES; i++) {
  id = i;
  document.write("<div class='square' id='" + id + "'></div>");
}

let tttBox = document.querySelectorAll(".square");
tttBox.forEach(function (clickedBox) {
  clickedBox.addEventListener("click", function (e) {
    console.log("something was clicked");
     squareClicked = document.getElementById(e.target.id)
     squareClicked.textContent = 'X'
     alert(`Square number ${e.target.id} was clicked!`)
    console.log(squareClicked)
  });
});
