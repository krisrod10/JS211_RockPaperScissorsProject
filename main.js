// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
const { Console } = require('console');
// brings in the readline module to access the command line
const readline = require('readline');
const { Z_ASCII } = require('zlib');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
  if (hand1 === hand2) {
    return "It's a tie";
  }
  else if(hand1 === Rps[0] && hand2 === Rps[1]) {
    return "You Lose"
  }
  if(hand1 === hand2){
    return "It's a tie";
  }
  else if(hand1 === Rps[1] && hand2 === Rps[2]){
    return "You Lose"
  }
  if (hand1 === hand2){
    return "It's a tie";
  
  }else if(hand1 === Rps[2] && hand2 === Rps[0]){
    return "You Lose"
  }
  if (hand1 === hand2){
    return "It's a tie";
  }else if(hand1 === Rps[0] && hand2 === Rps[2]){
    return "You Win"
  }
  if (hand1 === hand2){
    return "It's a tie"
  }else if(hand1 === Rps[1] && hand2 === Rps[0]){
    return "You Win"
  }
  if (hand1 === hand2){
    return "It's a tie"
  }else if(hand1 === [0] && hand2 === [2]){
    return 'You Win'
  }

 

}
// we want to set an Array with the variables 'Rock', 'Paper', and 'Scissors' (an array of strings)
// in the array rock index = 0 paper index = 1 scissors index = 2
let Rps = ['rock', 'paper', 'scissors']

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
