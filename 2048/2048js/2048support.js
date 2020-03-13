var score = 0;
var gridboard = [];
var indexboard = [];
var has_changed = new Array(4);

function getGridPosition(row, col){
  var gridrow = document.getElementsByClassName("grid-row")[row];
  var gridcell = gridrow.getElementsByClassName("grid-cell")[col];
  return {
    x: gridcell.offsetTop,
    y: gridcell.offsetLeft
  };
}

//https://stackoverflow.com/questions/4777077/removing-elements-by-class-name
//Veikko Karsikko
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function noSpace(){
  for (let i=0; i < 4; i++){
    for (let j=0; j < 4; j++){
      if (gridboard[i][j] == 0)
        return false;
    }
  }
  return true;
}

function canMove(x1, y1, x2, y2) {
    if (gridboard[x1][y1] != 0){
      if (gridboard[x2][y2] == 0 || gridboard[x1][y1] == gridboard[x2][y2]){
            return true;
    }
  }
    return false;
}


function noMove(){
  // left and up
  for (var i = 0; i < 4; i++){
      for (var j = 1; j < 4; j++){
        if (canMove(i, j, i, j-1) || canMove(j, i, j-1, i)){
          return false;
        }
      }
    }
    //right and down
  for (var i = 0; i < 4; i++){
        for (var j = 0; j < 3; j++){
          if (canMove(i, j, i, j+1) || canMove(j, i, j+1, i)){
            return false;
          }
    }
  }
  return true;
}

function updateIndex(old_ind, new_ind){
  var num = document.querySelector('.number-cell[data-index="' + old_ind + '"]');
  num.setAttribute("data-index", new_ind);
}

function updateNum(x, y, index){
  var num = document.querySelector('.number-cell[data-index="' + index + '"]');
  let tuple = getGridPosition(x, y);
  num.style.top = tuple.x.toString() + "px";
  num.style.left = tuple.y.toString() + "px";
}

function updateVal(index, val){
  var num = document.querySelector('.number-cell[data-index="' + index + '"]');
  num.innerHTML = val;
  num.setAttribute('data-num', val);
}

function removeNum(index){
  var num = document.querySelector('.number-cell[data-index="' + index + '"]');
  num.remove();
}

function updateScoreBoard(){
  var score_board = document.getElementById("score");
  score_board.innerHTML = score;
}
