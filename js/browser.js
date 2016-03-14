var Game = require('./../js/Game.js').Game;
var Card = require('./../js/Card.js').Card;

$(document).ready (function() {

    var game = new Game();
    var cards = game.createCards();
    var startPlay = game.randomizeCards(cards);

    var i = 0;

    for(i; i< 5; i++){
      $('#row1').append("<div class='col-md-2 ' >" + startPlay[i].name +  "</div>");
    }
    if (i >4){
      for(i; i< 9; i++ ){
      return  $('#row1').append("<div class='col-md-2'>" + startPlay[i].name +  "</div>");

      }
    }
  event.preventDefault();
  });
