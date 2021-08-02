let readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
    history: [],
    score: 0,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
      this.history.push(choices[randomIndex]);
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, lizard, or spock:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(choice)) break;
        console.log('Sorry, invalid choice');
      }

      this.move = choice;
      this.history.push(choice);
    },
  };

  return Object.assign(playerObject, humanObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  currentRoundWinner: 'T',

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors, lizard, spock!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, lizard, spock. Goodbye!');
  },

  findWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && (computerMove === 'scissors' || computerMove === 'lizard')) ||
        (humanMove === 'paper' && (computerMove === 'rock' || computerMove === 'spock')) ||
        (humanMove === 'scissors' && (computerMove === 'paper' || computerMove === 'lizard')) ||
        (humanMove === 'lizard' && (computerMove === 'spock' || computerMove === 'paper')) ||
        (humanMove === 'spock' && (computerMove === 'rock' || computerMove === 'scissors'))) {
      this.human.score += 1;
      this.currentRoundWinner = 'H';
    } else if (((humanMove === 'rock' || humanMove === 'spock') && computerMove === 'paper') ||
          ((humanMove === 'paper' || humanMove === 'lizard') && computerMove === 'scissors') ||
          ((humanMove === 'scissors' || humanMove === 'lizard') && computerMove === 'rock') ||
          ((humanMove === 'spock' || humanMove === 'paper') && computerMove === 'lizard') ||
          ((humanMove === 'rock' || humanMove === 'scissors') && computerMove === 'spock')) {
      this.computer.score += 1;
      this.currentRoundWinner = 'C';
    } else {
      this.currentRoundWinner = 'T'
    }
    this.round += 1;
  },

  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (this.currentRoundWinner === 'H') {
      console.log('You win!');
    } else if (this.currentRoundWinner === 'C') {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },
  
      
  reset() {
    this.computer.history = [];
    this.computer.score = 0;
    this.human.history = [];
    this.human.score = 0;
  },
  
  displayScore() {
    if(this.human.score === 5) {
      console.log('You are the overall champion!');
      this.reset();
    } else if (this.computer.score === 5) {
      console.log('The computer is the overal champion!');
      this.reset();
    } else {
      console.log(`The score is you: ${this.human.score} to computer: ${this.computer.score}. The first player to 5 is the ultimate champion!`)
    }
  },
  
  displayHistory() {
    let historyArr = [];
    for (let i = 0; i < this.human.history.length; i++) {
      let humanScore = this.human.history[i];
      let computerScore = this.computer.history[i];
      historyArr.push([humanScore, computerScore]);
    }
    console.log(`[human, computer] score history: `, historyArr);
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.findWinner();
      this.displayWinner();
      this.displayScore();
      this.displayHistory();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();