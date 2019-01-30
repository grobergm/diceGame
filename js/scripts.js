
var gameTracker=
{
  turn: 1,
  player1Score: 0,
  player2Score: 0,
<<<<<<< HEAD
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
=======
  rollArray:[]
}

function rollDice(turn){
  var result = Math.ceil(Math.random()*6);
  console.log("result is"+ result)
  if(result!==1){
    gameTracker.rollArray.push(result);
  } else {
    gameTracker.turn += 1;
    clearArray();
  }
  console.log(gameTracker.turn);
}

function clearArray(){
  gameTracker.rollArray=[];
};

function addScore(array){
  var score = 0
  array.forEach(function(roll){
    score += roll;
  console.log(array)
  });
  if (gameTracker.turn%2!==0) {
    gameTracker.player1Score += score;
    console.log("p1")
  } else if(gameTracker.turn%2===0) {
    gameTracker.player2Score += score;
    console.log("p2")
>>>>>>> fixed
  }
  gameTracker.turn += 1;
  clearArray();
}

<<<<<<< HEAD
function addScore(turn){
  var score = 0;
  if (turn === "p1") {
    gameTracker.player1Array.forEach(function(roll){
      score += roll;
=======
$(document).ready(function(){
  $("#rollBtn").click(function(){
    var diceResult= rollDice(gameTracker.turn);
  })
  $("#scoreBtn").click(function(){
    addScore(gameTracker.rollArray);
>>>>>>> fixed
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
