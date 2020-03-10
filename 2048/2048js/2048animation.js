function genrateNumAnimate(x, y, n){
  var numberboard = document.getElementsByClassName("number-board")[0];
  var number = document.createElement("DIV");
  number.classList.add("number-cell");
  number.innerHTML = n;
  number.setAttribute('data-index', indexboard[x][y]);
  number.setAttribute('data-num', n);
  let tuple = getGridPosition(x, y);
  number.style.top = tuple.x.toString() + "px";
  number.style.left = tuple.y.toString() + "px";
  number.style.animation = "zoom 0.5s";
  numberboard.appendChild(number);
}

function addNumAnimate(index){

}

function addScoreAnimate(){
  var score_board = document.getElementById("score");
}
