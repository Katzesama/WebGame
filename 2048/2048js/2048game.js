function newGame(){
  initGame();
  generateNumber();
  generateNumber();
}

function initGame(){
  removeElementsByClass("number-cell");
  var gameover = document.getElementsByClassName("game-over")[0];
  gameover.style.opacity = 0;
  score = 0;
  updateScoreBoard();
  var count = 0;
  for (var i=0; i < 4; i++){
    gridboard[i] = [];
    indexboard[i] = [];
    for (var j=0; j < 4; j++){
      gridboard[i][j] = 0;
      indexboard[i][j] = count;
      count++;
    }
  }
}

function generateNumber(){
  var row = 0;
  var col = 0;

  count = 0
  while (count < 30){
    row = Math.floor(Math.random() * 4);
    col = Math.floor(Math.random() * 4);

    if (gridboard[row][col] == 0)
      break;

    count++;
  }

  if (count == 30){
    outter_loop: for (let i=0; i < 4; i++){
      for (let j=0; j < 4; j++){
        if (gridboard[i][j] == 0){
          row = i;
          col = j;
          break outter_loop;
        }
      }
    }
  }

  var number = Math.random() < 0.5 ? 2 : 4;
  gridboard[row][col] = number;
  genrateNumAnimate(row, col, number);
}

function normalMove(x1, y1, x2, y2, old_ind){
  gridboard[x2][y2] = gridboard[x1][y1];
  gridboard[x1][y1] = 0;
  new_index = indexboard[x2][y2];
  updateIndex(old_ind, new_index);
  updateNum(x2, y2, new_index);
}

function mergeMove(x1, y1, x2, y2){
  gridboard[x2][y2] += gridboard[x1][y1];
  gridboard[x1][y1] = 0;
  updateVal(indexboard[x2][y2], gridboard[x2][y2]);
  removeNum(indexboard[x1][y1]);
}

function resetChange(){
  for (let i = 0; i < 4; i++){
    has_changed[i] = false;
  }
}

function moveLeft(){
  var move = false;
  for (var i = 0; i < 4; i++){
      resetChange();
          for (var j = 1; j < 4; j++) {
              if (gridboard[i][j] != 0) {
                  let old_index = indexboard[i][j];
                  let old_y = j;
                  for (var k = j - 1; k >= 0; k--) {
                      if (gridboard[i][k] == 0) {
                          normalMove(i, old_y, i, k, old_index);
                          old_y = k;
                          old_index = indexboard[i][old_y];
                          move = true;
                      }
                    }
                    if (old_y > 0 && gridboard[i][old_y] == gridboard[i][old_y-1] && !has_changed[old_y-1]) {
                        mergeMove(i, old_y, i, old_y-1);
                        let points = gridboard[i][old_y-1];
                        score += points;
                        addScoreAnimate(points);
                        has_changed[old_y-1] = true;
                        move = true;
                    }

                  }
              }
        }
    setTimeout("updateScoreBoard()", 200);
    return move;
}


function moveRight(){
  var move = false;
  for (var i = 0; i < 4; i++){
    resetChange();
          for (var j = 2; j >= 0; j--) {
              if (gridboard[i][j] != 0) {
                  let old_index = indexboard[i][j];
                  let old_y = j;
                  for (var k = j + 1; k < 4; k++) {
                      if (gridboard[i][k] == 0) {
                          normalMove(i, old_y, i, k, old_index);
                          old_y = k;
                          old_index = indexboard[i][old_y];
                          move = true;
                      }
                    }
                    if (old_y < 3 && gridboard[i][old_y] == gridboard[i][old_y+1] && !has_changed[old_y+1]) {
                        mergeMove(i, old_y, i, old_y+1);
                        let points = gridboard[i][old_y+1];
                        score += points;
                        addScoreAnimate(points);
                        has_changed[old_y+1] = true;
                        move = true;
                    }
                  }
              }
        }
    setTimeout("updateScoreBoard()", 200);
    return move;
}

function moveUp(){
  var move = false;
  for (var j = 0; j < 4; j++){
    resetChange();
          for (var i = 1; i < 4; i++) {
              if (gridboard[i][j] != 0) {
                  let old_index = indexboard[i][j];
                  let old_x = i;
                  for (var k = i - 1; k >= 0; k--) {
                      if (gridboard[k][j] == 0) {
                          normalMove(old_x, j, k, j, old_index);
                          old_x = k;
                          old_index = indexboard[old_x][j];
                          move = true;
                      }
                    }
                    if (old_x > 0 && gridboard[old_x][j] == gridboard[old_x-1][j] && !has_changed[old_x-1]) {
                        mergeMove(old_x, j, old_x-1, j);
                        let points = gridboard[old_x-1][j];
                        score += points;
                        addScoreAnimate(points);
                        has_changed[old_x-1] = true;
                        move = true;
                    }
                }
              }
        }
    setTimeout("updateScoreBoard()", 200);
    return move;
}

function moveDown(){
  var move = false;
  for (var j = 0; j < 4; j++){
    resetChange();
          for (var i = 2; i >= 0; i--) {
              if (gridboard[i][j] != 0) {
                  let old_index = indexboard[i][j];
                  let old_x = i;
                  for (var k = i + 1; k < 4; k++) {
                      if (gridboard[k][j] == 0) {
                          normalMove(old_x, j, k, j, old_index);
                          old_x = k;
                          old_index = indexboard[old_x][j];
                          move = true;
                      }
                    }
                    if (old_x < 3 && gridboard[old_x][j] == gridboard[old_x+1][j] && !has_changed[old_x+1]) {
                        mergeMove(old_x, j, old_x+1, j);
                        let points = gridboard[old_x+1][j];
                        score += points;
                        addScoreAnimate(points);
                        has_changed[old_x+1] = true;
                        move = true;
                    }
                  }
              }
        }
    setTimeout("updateScoreBoard()", 200);
    return move;
}

function isGameOver(){
  if (noSpace() && noMove()){
    var gameover = document.getElementsByClassName("game-over")[0];
    gameover.style.opacity = 1;
  }
}
