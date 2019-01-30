
var gameTracker=
{
  turn: 1,
  player1Score: 0,
  player2Score: 0,
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
  }
  gameTracker.turn += 1;
  clearArray();
}

$(document).ready(function(){
  $("#rollBtn").click(function(){
    var diceResult= rollDice(gameTracker.turn);
  })
  $("#scoreBtn").click(function(){
    addScore(gameTracker.rollArray);
  })
});
