var gridboard = [];
var score = 0;
var indexboard = [];
var has_changed = new Array(4);

function newGame(){
  initGame();
  generateNumber();
  generateNumber();
}

function initGame(){
  removeElementsByClass("number-cell");
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


function moveLeft(){
  var move = false;
  for (var i = 0; i < 4; i++){
      for (let g = 0; g < 4; g++){
        has_changed[g] = false;
      }
          for (var j = 1; j < 4; j++) {
              if (gridboard[i][j] != 0) {
                  let old_index = indexboard[i][j];
                  let old_y = j;
                  for (var k = j - 1; k >= 0; k--) {
                      if (gridboard[i][k] == 0) {
                          gridboard[i][k] = gridboard[i][old_y];
                          gridboard[i][old_y] = 0;
                          old_y = k;
                          new_index = indexboard[i][k];
                          updateIndex(old_index, new_index);
                          updateNum(i, k, new_index);
                          old_index = indexboard[i][old_y];
                          move = true;
                      }
                    }
                    if (old_y > 0 && gridboard[i][old_y] == gridboard[i][old_y-1] && !has_changed[old_y-1]) {
                        gridboard[i][old_y-1] += gridboard[i][old_y];
                        gridboard[i][old_y] = 0;
                        updateVal(indexboard[i][old_y-1], gridboard[i][old_y-1]);
                        removeNum(indexboard[i][old_y]);
                        has_changed[old_y-1] = true;
                        move = true;
                    }

                  }
              }
        }
    return move;
}


function moveRight(){
  var move = false;
  for (var i = 0; i < 4; i++){
    for (let g = 0; g < 4; g++){
      has_changed[g] = false;
    }
          for (var j = 2; j >= 0; j--) {
              if (gridboard[i][j] != 0) {
                  let old_index = indexboard[i][j];
                  let old_y = j;
                  for (var k = j + 1; k < 4; k++) {
                      if (gridboard[i][k] == 0) {
                          gridboard[i][k] = gridboard[i][old_y];
                          gridboard[i][old_y] = 0;
                          old_y = k;
                          new_index = indexboard[i][k];
                          updateIndex(old_index, new_index);
                          updateNum(i, k, new_index);
                          old_index = indexboard[i][old_y];
                          move = true;
                      }
                    }
                    if (old_y < 3 && gridboard[i][old_y] == gridboard[i][old_y+1] && !has_changed[old_y+1]) {
                        gridboard[i][old_y+1] += gridboard[i][old_y];
                        gridboard[i][old_y] = 0;
                        updateVal(indexboard[i][old_y+1], gridboard[i][old_y+1]);
                        removeNum(indexboard[i][old_y]);
                        has_changed[old_y+1] = true;
                        move = true;
                    }
                  }
              }
        }
    return move;
}

function moveUp(){
  var move = false;
  for (var j = 0; j < 4; j++){
    for (let g = 0; g < 4; g++){
      has_changed[g] = false;
    }
          for (var i = 1; i < 4; i++) {
              if (gridboard[i][j] != 0) {
                  let old_index = indexboard[i][j];
                  let old_x = i;
                  for (var k = i - 1; k >= 0; k--) {
                      if (gridboard[k][j] == 0) {
                          gridboard[k][j] = gridboard[old_x][j];
                          gridboard[old_x][j] = 0;
                          old_x = k;
                          new_index = indexboard[k][j];
                          updateIndex(old_index, new_index);
                          updateNum(k, j, new_index);
                          old_index = indexboard[old_x][j];
                          move = true;
                      }
                    }
                    if (old_x > 0 && gridboard[old_x][j] == gridboard[old_x-1][j] && !has_changed[old_x-1]) {
                        gridboard[old_x-1][j] += gridboard[old_x][j];
                        gridboard[old_x][j] = 0;
                        updateVal(indexboard[old_x-1][j], gridboard[old_x-1][j]);
                        removeNum(indexboard[old_x][j]);
                        has_changed[old_x-1] = true;
                        move = true;
                    }
                }
              }
        }
    return move;
}

function moveDown(){
  var move = false;
  for (var j = 0; j < 4; j++){
    for (let g = 0; g < 4; g++){
      has_changed[g] = false;
    }
          for (var i = 2; i >= 0; i--) {
              if (gridboard[i][j] != 0) {
                  let old_index = indexboard[i][j];
                  let old_x = i;
                  for (var k = i + 1; k < 4; k++) {
                      if (gridboard[k][j] == 0) {
                          gridboard[k][j] = gridboard[old_x][j];
                          gridboard[old_x][j] = 0;
                          old_x = k;
                          new_index = indexboard[k][j];
                          updateIndex(old_index, new_index);
                          updateNum(k, j, new_index);
                          old_index = indexboard[old_x][j];
                          move = true;
                      }
                    }
                    if (old_x < 3 && gridboard[old_x][j] == gridboard[old_x+1][j] && !has_changed[old_x+1]) {
                        gridboard[old_x+1][j] += gridboard[old_x][j];
                        gridboard[old_x][j] = 0;
                        updateVal(indexboard[old_x+1][j], gridboard[old_x+1][j]);
                        removeNum(indexboard[old_x][j]);
                        has_changed[old_x+1] = true;
                        move = true;
                    }
                  }
              }
        }
    return move;
}
