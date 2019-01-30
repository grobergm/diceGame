
var gameTracker=
{
  turn:"p1",
  player1Score: 0,
  player1Array:[],
  player2Score: 0,
  player2Array:[]
}


function rollDice(game){
  var diceResult= Math.ceil(Math.random()*6);
  if (diceResult===1){
    clearArray(game.turn);
    resetTurn(game.turn)
  } else {
    if (game.turn==="p1"){
      game.player1Array.push(diceResult);
    } else if (game.turn==="p2"){
      game.player2Array.push(diceResult);
    }
  }

}


function clearArray(turn){
  if (turn==="p1"){
    gameTracker.player1Array=[];
  } else if(turn==="p2") {
    gameTracker.player2Array=[];
  }
};

function resetTurn(turn){
  if (turn==="p1"){
    gameTracker.turn="p2";
  } else if(turn==="p2") {
    gameTracker.turn="p1"
  }
}

function addScore(turn){
  var score = 0;
  if (turn === "p1") {
    gameTracker.player1Array.forEach(function(roll){
      score += roll;
  })
  } else if (turn === "p2") {
      gameTracker.player2Array.forEach(function(roll){
        score += roll;
    });
  }
}

// function(){
//   if (gameTracker.turn == "p1") {
//     addScore(gameTracker.player1Array);
//   }
//   if (gameTracker.turn == "p2") {
//     addScore(gameTracker.player2Array);
//   }
// }



$(document).ready(function(){
  $("#rollBtn").click(rollDice(gameTracker));
  $("#scoreBtn").click(addScore(gameTracker.turn))
});
