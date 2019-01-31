

function Game(){
  this.turn=1;
  this.playerArray=[];
  this.rollArray=[];
}

Game.prototype.turnChanger=function(){
  if(this.turn<6){
    this.turn++
  } else{
    this.turn=1;
  }
}

Game.prototype.addPlayer=function(playerName){
  this.playerArray.push(new Player(playerName));
}

Game.prototype.rollDice=function(){
  var rollResult = Math.ceil(Math.random()*6);
  console.log("Roll Dice Hit "+ rollResult)
  if(rollResult===1){
    this.turnChanger();
    this.clearArray();
  } else {
    this.rollArray.push(rollResult);
  }
}

Game.prototype.clearArray=function(){
  console.log("Clear Array hit")
  this.rollArray=[]
}

function Player(name){
  this.name=name;
  this.score=0;
}

var newGame= new Game();
var newPlayer= new Player("Matt");

newGame.addPlayer(newPlayer);



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
  return result;
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
    if(gameTracker.player2Score>= 100){
     alert("Player 2 Wins!");
    }
    console.log("p2")
  }
  checkVictory();
  gameTracker.turn += 1;
  clearArray();
}

function checkVictory(){
  if(gameTracker.player1Score>= 100){
     alert("Player 1 Wins!");
  }
  if(gameTracker.player2Score>=100){
    alert("Player 2 Wins!");
  }
  if ((gameTracker.player1Score>=100)||(gameTracker.player2Score>=100)){
    gameTracker.player1Score=0;
    gameTracker.player2Score=0;
  }
}



$(document).ready(function(){
  function displayTurn(){
    if (gameTracker.turn % 2 !==0){
      $("#turnDisplay").text("Player 1")
    } else if (gameTracker.turn % 2 ===0){
        $("#turnDisplay").text("Player 2")
    }
  };

  function displayRoll(){
    var rollString= gameTracker.rollArray.join(", ");
    $("#rollDisplay").text(rollString);
  };

  function displayPlayerScore(){
    $("#p1Score").text(gameTracker.player1Score);
    $("#p2Score").text(gameTracker.player2Score);
  }
  $("#rollBtn").click(function(){
    var diceResult= rollDice(gameTracker.turn);
    $("#diceDisplay img").hide();
    if(diceResult===1){
      $("#grin").show();
    }
    if(diceResult===2){
      $("#two").show();
    }
    if(diceResult===3){
      $("#three").show();
    }
    if(diceResult===4){
      $("#four").show();
    }
    if(diceResult===5){
      $("#five").show();
    }
    if(diceResult===6){
      $("#six").show();
    }
  });

  $("#scoreBtn").click(function(){
    addScore(gameTracker.rollArray);
  })
  $("button").click(function(){
    displayPlayerScore();
    displayTurn();
    displayRoll();
  })

});
