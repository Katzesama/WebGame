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


function addScoreAnimate(add){
  var add_score = document.getElementById("add-score");
  /*https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element*/
  //robsch
  add_score.style.animation = 'none';
  add_score.offsetHeight;
  add_score.style.animation = null;
  add_score.innerHTML = "+" + add;
  add_score.style.animation = "fadeup 0.8s";
}
