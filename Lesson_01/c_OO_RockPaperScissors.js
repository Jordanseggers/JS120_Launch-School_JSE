let readline = require('readline-sync');

function createPlayer(playerType) {
  return {
    playerType : playerType,
    move: null,
    
    choose() {
      if (this.isHuman()) {
        let choice;
        
        while (true) {
          console.log('Please choose rock, paper, or scissors:');
          choice = readline.question();
          if (['rock', 'paper', 'scissors'].includes(choice)) break;
          console.log('Sorry, invalid choice.');
        }
        
        this.move = choice;
      } else {
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
    },
    
    isHuman() {
      return this.playerType === 'human';
    },
  };
}

const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),
  
  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },
  
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },
  
  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },
  
  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
    
    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
        console.log('You win!');
      } else if ((humanMove === 'rock' && computerMove === 'paper') ||
          (humanMove === 'paper' && computerMove === 'scissors') ||
          (humanMove === 'scissors' && computerMove === 'rock')) {
        console.log('Computer wins!');
      } else {
        console.log("It's a tie");
      }
  },
  
  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();