
var gameTracker=
{
  turn:"p1",
  player1Score: 0,
  player1Array:[],
  player2Score: 0,
  player2Array:[]
}

// function that generates random number and returns the number
function changeTurn(turn){
  if(turn==="p1"){
    return "p2";
  } else if (turn==="p1"){
    return "p1";
  }
}

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
      clearArray("p1");
    } else if (gameTracker.turn==="p2"){
      clearArray("p2");
    }
  }
}

function clearArray(turn){
  if (turn==="p1"){
    gameTracker.player1Array=[];
    gameTracker.turn="p2";
  } else if(turn==="p2") {
    gameTracker.player2Array=[];
    gameTracker.turn="p1"
  }
};

function addScore(array){
  var score = 0
  array.forEach(function(roll){
    score += roll;
  });
  if (gameTracker.turn === "p1") {
    gameTracker.player1Score += score;
    console.log("before p1")
    clearArray("p1");
    console.log("after p1")
  } else if(gameTracker.turn==="p2") {
    gameTracker.player2Score += score;
    console.log("before p2")
    clearArray("p2");
    console.log("after p2")
  }
}

$(document).ready(function(){
  $("#rollBtn").click(function(){
    var diceResult= rollDice(gameTracker.turn);
  })
  $("#scoreBtn").click(function(){
    if (gameTracker.turn == "p1") {
      addScore(gameTracker.player1Array);
    }
    if (gameTracker.turn == "p2") {
      addScore(gameTracker.player2Array);
    }
  })
});
