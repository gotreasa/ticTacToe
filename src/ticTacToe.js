class Game {
  setOrder(order) {
    this.order = order;
    this.squares = new Array(9);
  }

  fillSquares() {
    this.order.forEach((value, index) => {
      this.squares[value] = index % 2 === 0 ? 'X' : 'O';
    });
    return this.squares;
  }

  print() {
    const output = `Game Board Creation…
 | | 
-+-+-
 | | 
-+-+-
 | | 
Board Created.
The game will start with player X`;

    return output;
  }
}

module.exports = {
  Game,
};
