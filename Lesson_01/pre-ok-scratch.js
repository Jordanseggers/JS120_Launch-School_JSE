 
let scores = {
    winners: 'hey',
    humanWins: this.onOn('H'),
    computerWins: this.onON('C'),
    leader: 'original',
    overalWiner: 'original',
    
    onOn: function (player) {
      let wins;
      if(this.scores.winners.length < 1) {
        wins = 0;
      } else {
        wins = this.scores.winners.filter(winner => winner === player);
        }
      return wins;
    },
    
    findLeader() {
      if (this.humanWins > this.computerWins) {
        this.leader = 'H';
      } else if (this.humanWins < this.computerWins) {
        this.leader = 'C';
      } else if (this.humanWins === this.computerWins) {
        this.leader = 'T';
      }
    }
};
    
console.log(scores.humanWins);
console.log(scores.computerWins);//