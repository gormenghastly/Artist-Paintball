var warholPoints = 145;
var kahloPoints = 175;
var daliPoints = 190;
var okeeffePoints = 160;
var playerDamage = "";
var opponentDamage = "";
var gameOn = false;

$(document).ready(function(){



function resetGame() {
    warholPoints = 145;
    kahloPoints = 175;
    daliPoints = 190;
    okeeffePoints = 160;
    playerDamage = "";
    opponentDamage = "";

    $('h5').hide();
    
    //$()
  
}

function pickPlayer() {
    $(".circle artist").on("click", function() {
        if (!(gameOn)) {
            $(this).css("border-color", "#55d460");
            player = $(this).detach();
            player.appendTo("#cir-t-3");
        }
    });
}

function playGame() {

}

function pointTotal() {

}

function defeatOpp() {

}

function winGame() {
    
}

pickPlayer();

});