$(document).ready(function(){

    // random number generator and player change functions below

    var getRandomNumber = function(max){        // random number generator function
        var rand;
        if(!isNaN(max)){
            random = Math.random();
            random = Math.floor(random * max);
            random = random + 1;
        }
        return rand;
    };

    var changePlayer = function(){              // player change function
        if($("#current").text() == $("#p1").val()){
            $("#current").text($("#p2").val());
        }else{
            $("#current").text($("#p1").val());
        }
        $("#dice").val("0");
        $("#total").val("0");
        $("#roll").focus();
    };

    // click events below: new game, roll, and hold

    $("#new_game").click(function(){                    // click event resets scores to 0
        $("#sc1").val("0");     // score at 0 after new game clicked
        $("#sc2").val("0");     // score at 0 after new game clicked
        if($("#p1").val() == "" || $("#p2").val() == ""){   // statement checks to see if any name is in text box
            $("#turn").removeClass("open");                 // if yes, this function removes open class, and display is set back to none
            alert("Enter two player names");            // click event prompts user to enter player names
        }else{
            $("#turn").addClass("open");                // uses open class to display turn section
            changePlayer();
        }
    });

    $("#roll").click(function(){
        var total = parseInt($("#total").val());    // gets total value for the turn from "total" text box
        var die = getRandomNumber(6);      // calls getRandomNumber function to get result of one roll
        if(die == 1){           // statement checks if roll = 1; if yes, players total is set to 0
            total = 0;
            changePlayer();     // moves on to the next player
        }else{
            total = total + die;    // otherwise the total = the current total + current roll
        }
        $("#dice").val(die);
        $("#total").val(total);
    });

    $("#hold").click(function(){
        var score;
        var total = parseInt($("#total").val());
        if($("#current").text() == $("#p1").val()){     // tests which player is active
            score = $("#sc1");                      // if player 1 is active, score is counted for player 1
        }else{                                      // and is stored in score variable declared above
            score = $("#sc2");                      // if player 2 is active, score is counted for player 2
        }                                           // and is stored in score variable declared above
        
        score.val(parseInt(score.val()) + total);   // new score value is added to the current score value in the total text box
        if(score.val() >= 100){                     // if total score is greater than or equal to 100
            alert($("#current").text() + "Wins!");  // that player wins; player name is displayed in alert
            newGame();                              // new game is initiated
        }else{
            changePlayer();                         // otherwise, change player and resume game
        }
    });

});