
var gameTracker=
{
  turn:"p1",
  player1Score: 0,
  player1Array:[],
  player2Score: 0,
  player2Array:[]
}

// function that generates random number and returns the number

function rollDice(turn){
  var result = Math.ceil(Math.random()*6);
  console.log("result is"+ result)
  if(result!==1){
    if (turn==="p1"){
      gameTracker.player1Array.push(result);
    }
    if(turn==="p2"){
      gameTracker.player2Array.push(result);
    }
  } else {
    if (gameTracker.turn==="p1"){
      gameTracker.turn="p2"
    } else if (gameTracker.turn==="p2"){
      gameTracker.turn="p1"
    }
  }
  console.log(gameTracker);
}


function addScore(array){

}

$(document).ready(function(){
  $("#rollBtn").click(function(){
    var diceResult= rollDice(gameTracker.turn);

  })
});
