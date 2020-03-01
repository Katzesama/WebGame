document.getElementById("newgame").onclick = newGame;

document.addEventListener("keydown", function(event){
  event.preventDefault();
  switch(event.keyCode){
    case 39:
      if (moveRight()){
        setTimeout(generateNumber, 500)
      };
      break;
    case 37:
      if (moveLeft()){
        setTimeout(generateNumber, 500)
      };
      break;
    case 38:
      if (moveUp()){
        setTimeout(generateNumber, 500)
      };
      break;
    case 40:
      if (moveDown()){
        setTimeout(generateNumber, 500)
      };
      break;
    default:
      break;
  }

});
