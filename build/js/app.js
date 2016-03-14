(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Card = function(name){
  this.name= name;
}




// Each round consists of 2 clicks
// On click 1:
  // Show card img
  // Grab value
// On click 2:
  // Show card img
  // Perform match method (compare values)
    // IF values match
      // Award 1 point
      // Leave cards face-up
      // Count as a "round"
    // ELSE (values do not match)
      // No points awarded
      // Cards flip back over
      // Count as a "round"

},{}],2:[function(require,module,exports){
var Card = require('./../js/Card.js').Card;


exports.Game = function(){
  this.rounds = 0;
  this.matched = 0;
}

exports.Game.prototype.randomizeCards = function(cards) {
  var cardArray = cards;
  for(var i = cardArray.length-1; i >=0; i--) {
    var randomArray = Math.floor(Math.random()*(i+1));
    var cardAtIndex = cardArray[randomArray];
  }
  return cardArray;
}

exports.Game.prototype.createCards = function() {
  card1 = new Card("blue");
  card2 = new Card("yellow");
  card3 = new Card("red");
  card4 = new Card("green");
  card5 = new Card("purple");
  card6 = new Card("blue");
  card7 = new Card("yellow");
  card8 = new Card("red");
  card9 = new Card("green");
  card10 = new Card("purple");
  var cards = [card1 ,card2, card3, card4, card5, card6, card7, card8, card9, card10];

  return cards;
}



// Game.prototype.playGame(click_1, click_2){
//  var cardOne = click_1;
//  var cardTwo = click_2;
//
//  this.rounds = this.rounds++;
//  if(cardOne == cardTwo){
//    this.matched = this.matched++;
//  } else {
//    toggle
//  }
// }

},{"./../js/Card.js":1}],3:[function(require,module,exports){
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

exports.Card = function(name){
  this.name= name;
}




// Each round consists of 2 clicks
// On click 1:
  // Show card img
  // Grab value
// On click 2:
  // Show card img
  // Perform match method (compare values)
    // IF values match
      // Award 1 point
      // Leave cards face-up
      // Count as a "round"
    // ELSE (values do not match)
      // No points awarded
      // Cards flip back over
      // Count as a "round"

var Card = require('./../js/Card.js').Card;


exports.Game = function(){
  this.rounds = 0;
  this.matched = 0;
}

exports.Game.prototype.randomizeCards = function(cards) {
  var cardArray = cards;
  for(var i = cardArray.length-1; i >=0; i--) {
    var randomArray = Math.floor(Math.random()*(i+1));
    var cardAtIndex = cardArray[randomArray];
  }
  return cardArray;
}

exports.Game.prototype.createCards = function() {
  card1 = new Card("blue");
  card2 = new Card("yellow");
  card3 = new Card("red");
  card4 = new Card("green");
  card5 = new Card("purple");
  card6 = new Card("blue");
  card7 = new Card("yellow");
  card8 = new Card("red");
  card9 = new Card("green");
  card10 = new Card("purple");
  var cards = [card1 ,card2, card3, card4, card5, card6, card7, card8, card9, card10];

  return cards;
}



// Game.prototype.playGame(click_1, click_2){
//  var cardOne = click_1;
//  var cardTwo = click_2;
//
//  this.rounds = this.rounds++;
//  if(cardOne == cardTwo){
//    this.matched = this.matched++;
//  } else {
//    toggle
//  }
// }

},{"./../js/Card.js":1,"./../js/Game.js":2}]},{},[3]);
