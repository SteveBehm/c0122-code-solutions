console.log('Lodash is loaded:', typeof _ !== 'undefined');

// Create an array of player objects that will represent each player
// add a points property that we will be able to compare later
var players = [
  {
    name: 'Brian',
    hand: [],
    points: 0
  },
  {
    name: 'Ron',
    hand: [],
    points: 0
  },
  {
    name: 'Brick',
    hand: [],
    points: 0
  },
  {
    name: 'Veronica',
    hand: [],
    points: 0
  }
];

// Create a deck of cards
var cardValues = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function createDeck(values, type) {
  var deck = [];
  var obj = {};

  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < type.length; j++) {
      obj.rank = values[i];
      obj.suit = type[j];
      deck.push(obj);
      obj = {};
    }
  }
  console.log('deck:', deck);
  return deck;
}
var cards = createDeck(cardValues, suits);
console.log('cards:', cards);

/*
Shuffle the cards using the Fisher-Yates Method
go through each member of the array beginning at the end of the array
and ending right before the first value in the array
of the other values listed before the current value choose a random value
switch that value with the current value
proceed to the next value and repeat until you reach the value before the first
return the shuffled cards array
*/
function shuffleCards(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return cards;
}

var shuffledCards = shuffleCards(cards);
console.log('shuffledCards:', shuffledCards);

/*
declare a variable that will hold the value of the index we want
from the shuffledCards array
go through each member in the players array
go through each players hand and put in two cards from the shuffledCards array
increment the currentCard value by two so that the next loop puts two new values
from the shuffledCards array into the next players hand
repeat until all players have cards
return the players array to show the hands they have been dealt
*/
function dealCards(array) {
  var currentCard = 0;
  for (var i = 0; i < players.length; i++) {
    players[i].hand.push(shuffledCards[currentCard], shuffledCards[currentCard + 1]);
    currentCard += 2;
  }
  return players;
}
var dealtCards = dealCards(shuffledCards);

/*
we need to go through each member of the given array
the given array in our case will be the dealtCards array which has the players
and the hands they have been dealt
we also need to go through a players hand one card at a time
determine how many points the players first card is worth and put that value into
the points value of the player's object
go to the next card for that player and repeat the same process
then go to the next players and look at each card to determine how many points they
have with each card
the sum of their points from both cards should be stored in the points property of the player's object
repeat this process with all of the players
display the updated players array with the number of points they have based off their hand
*/
function sumPoints(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].hand.length; j++) {
      if (array[i].hand[j].rank === 'Jack' || array[i].hand[j].rank === 'Queen' || array[i].hand[j].rank === 'King') {
        array[i].points += 10;
      } else if (array[i].hand[j].rank === 'Ace') {
        array[i].points += 11;
      } else {
        array[i].points += parseInt(array[i].hand[j].rank);
      }
    }
  }
  console.log('players:', players);
  return players;
}
var playersPts = sumPoints(dealtCards);

/*
we need to go through each member of the array, which will be the players array
that has the updated point totals called playersPts
we need to specifically go through each players points values to compare them
the player with the highest point value should be declared the winner
display the winner's name in the console
*/
function findWinner(array) {
  var winner = '';
  var points = 0;
  for (var i = 0; i < array.length; i++) {
    if (points < array[i].points) {
      points = array[i].points;
      console.log('points:', points);
    }
    if (array[i].points === points) {
      winner = array[i].name;
    }
  }
  return winner;
}
console.log('winner:', findWinner(playersPts));
