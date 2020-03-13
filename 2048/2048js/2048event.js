document.getElementById("newgame").onclick = newGame;

document.addEventListener("keydown", function(event){
  event.preventDefault();
  if (isGameOver()){
    return;
  }
  switch(event.keyCode){
    case 39:
      if (moveRight()){
        setTimeout(generateNumber, 200)
      };
      break;
    case 37:
      if (moveLeft()){
        setTimeout(generateNumber, 200)
      };
      break;
    case 38:
      if (moveUp()){
        setTimeout(generateNumber, 200)
      };
      break;
    case 40:
      if (moveDown()){
        setTimeout(generateNumber, 200)
      };
      break;
    default:
      break;
  }
});
