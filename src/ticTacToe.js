class Game {
  constructor() {
    this.squares = new Array(9).fill(' ');
  }

  setOrder(order) {
    this.order = order;
  }

  fillSquares() {
    this.order.forEach((value, index) => {
      this.squares[value] = index % 2 === 0 ? 'X' : 'O';
    });
    return this.squares;
  }

  getGrid() {
    return `${this.squares[0]}|${this.squares[1]}|${this.squares[2]}
-+-+-
${this.squares[3]}|${this.squares[4]}|${this.squares[5]}
-+-+-
${this.squares[6]}|${this.squares[7]}|${this.squares[8]}`;
  }

  print() {
    this.output = `Game Board Creation…
${this.getGrid()}
Board Created.
The game will start with player X`;

    return this.output;
  }
}

module.exports = {
  Game,
};
