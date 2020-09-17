class HanoiGame {
  constructor(towers = [[3, 2, 1], [], []]) {
    this.towers = towers;
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    let start = this.towers[startTowerIdx];
    let target = this.towers[endTowerIdx];

    if (startTowerIdx === endTowerIdx) {
      return false;
    } else if (!target || !start) {
      return false;
    } else if (start.length === 0) {
      return false;
    } else if (start[start.length - 1] > target[target.length - 1]) {
      return false;
    } else if (!target.length || start[start.length - 1] < target[target.length - 1]) {
      return true;
    }
  }

  move(startTowerIdx, endTowerIdx) {
    let start = this.towers[startTowerIdx];
    let target = this.towers[endTowerIdx];
    let isValid = this.isValidMove(startTowerIdx, endTowerIdx);

    if (isValid) {
      target.push(start.pop());
    }
    return isValid;
  }

  isWon() {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
      return true;
    }
    return false;
  }

  // the below methods are complete and do not need to be modified
  print() {
    // will print our board nicely to our user
    console.log(JSON.stringify(this.towers));
  }

  promptMove(reader, callback) {
    this.print();
    reader.question("Enter a starting tower: ", start => {
      const startTowerIdx = parseInt(start);
      reader.question("Enter an ending tower: ", end => {
        const endTowerIdx = parseInt(end);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  run(reader, callback) {
    // we will prompt our user to provide a start and stop index using
    // a readline interface
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      // if the move is invalid we tell the user
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("Invalid move!");
      }

      if (!this.isWon()) {
        // Continue to play!
        this.run(reader, callback);
      } else {
        this.print();
        console.log("You win!");
        callback();
      }
    });
  }
}

module.exports = HanoiGame;
