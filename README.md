### Specs
1. Keep track of score and turn using object.
    var gameTracker=
    {
      turn: 1,
      player1Score: 0,
      player2Score: 0,
      rollArray:[]
    }

2. When roll button is clicked, generate random number between 1 and 6.
    input: button click
    output: random number 1-6

3. Each roll is added to a subtotal, unless the roll is 1, in which case the subtotal is cleared, and changes turn.

  example of 4 rolls

    input: (2,3,4,5)
    output:
      gameTacker = {
        turn: 1,
        player1Score: 0,
        player2Score: 0,
        **rollArray:[2,3,4,5]**
      }

    or

    input: (2,3,4,**1**)
    output:
      gameTacker = {
        turn: 2,
        player1Score: 0,
        player2Score: 0,
        **rollArray:[]**
      }

4. When Score button is clicked, adds the subtotal to the players total, clear the subtotal, then change turn.

  input: (2,3,4,5)
  output:
    gameTacker = {
      turn: 2,
      player1Score: 14,
      player2Score: 0,
      rollArray:[]
    }
