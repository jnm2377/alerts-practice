console.log('connected to app.js');

class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }

  firstQuestion() {
    let userInput = prompt("George Washington was the first President on the United States. True or false?", "t or f?");
    if (userInput.toUpperCase() === "T" || userInput.toUpperCase() === "TRUE") {
      this.points += 1;
      alert("Correct! Next question.")
    } else {
      alert("Sorry, wrong answer. Better luck next time.")
    }
  }

  secondQuestion() {
    let userInput = prompt("California is the largest state in the US. True or false?", "t or f?");
    if (userInput.toUpperCase() === "F" || userInput.toUpperCase() === "FALSE") {
      this.points += 1;
      alert("Correct! Next question.");
    } else {
      alert("Sorry, wrong answer. Better luck next time.")
    }
  }

  thirdQuestion() {
    let userInput = prompt("Soccer is the best sport in the world. True or false?  (This is not at all a biased question...)", "t or f?");
    if (userInput.toUpperCase() === "T" || userInput.toUpperCase() === "TRUE") {
      this.points += 1;
      alert("Correct! Next question.");
    } else {
      alert("Sorry, wrong answer. Better luck next time.")
    }
  }

  getTotalPoints() {
    if (this.points < 4) {
      alert('You scored ' + this.points + '/5. You get a bronze star.');
    } else if (this.points === 4) {
      alert('You scored ' + this.points + '/5. You get a silver star.');
    } else if (this.points === 5){
      alert('You scored ' + this.points + '/5. You get a gold star.');
    }
  }
}


// ---------INSTANCES
const player = new Player("Josefina");

// ---------INITIATION

player.firstQuestion();
player.secondQuestion();
player.getTotalPoints();
