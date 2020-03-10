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

function noSpace(board){
  for (let i=0; i < 4; i++){
    for (let j=0; j < 4; j++){
      if (board[i][j] == 0)
        return false;
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
