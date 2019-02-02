function Game(){
  this.turn=1;
  this.playerArray=[];
  this.rollArray=[];
}

function Player(name){
  this.name=name;
  this.score=0;
}

Game.prototype.turnChanger=function(){
  this.rollArray=[];
  if(this.turn<this.playerArray.length){
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
  } else {
    this.rollArray.push(rollResult);
  }
  return rollResult
}

Game.prototype.addScore=function(){
  var roundScore=0;
  this.rollArray.forEach(function(roll){
    roundScore+=roll;
  });
  this.playerArray[this.turn-1].score+=roundScore;
  this.turnChanger();
}

$(document).ready(function(){
  var newGame = new Game();

  function displayPlayers(){
    $(".player").hide();
    for (var i=0; i<newGame.playerArray.length;i++){
      var appendString="<div class='card player ";
      if (newGame.turn===i+1){
        appendString+='currentTurn';
      }
      appendString+="'><h3 class='card-title'>"+newGame.playerArray[i].name+" "+newGame.playerArray[i].score+"</h3></div>";
      $(".playerDisplay").append(appendString);
    }
  };

  function displayRoll(){
    var rollString= newGame.rollArray.join(", ");
    $("#rollDisplay").text(rollString);
  };

  function displayTurn(){
    $("#turnDisplay").text(newGame.playerArray[newGame.turn-1].name)
  };

  function displayVictoryModal(){
    newGame.playerArray.forEach(function(player){
      if (player.score>=100){
        $("#winnerName").text(player.name);
        $("#victoryModal").modal("show");
      }
    })
  }

  $('#nameForm').submit(function(event){
    event.preventDefault();
    var playerName= $("#nameInput").val();
    if(playerName){
      $("#nameInput").removeClass("is-invalid");
      newGame.addPlayer(playerName);
      displayPlayers();
      $("#nameInput").val("");
    } else {
      $("#nameInput").addClass("is-invalid");
    }
  });

  $("#startGame").click(function(){
    if(newGame.playerArray.length>0){
      $("#titleDisplay").hide();
      $('#grin').show();
      $("#gameDisplay").show();
    }
  });

  $("#rollBtn").click(function(){
    var diceResult= newGame.rollDice();
    displayRoll();
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
    newGame.addScore();
    $("#diceDisplay img").hide();
    displayVictoryModal();
  });
  $("button").click(function(){
    displayRoll();
    displayPlayers();
    displayTurn();
  });
});
