class Game {
  setOrder(order) {
    this.order = order;
  }

  fillSquares() {
    this.squares = new Array(9);
    this.order.forEach((value, index) => {
      this.squares[value] = index % 2 === 0 ? 'X' : 'O';
    });
    return this.squares;
  }

  print() {
    return `Game Board Creation…
| |
-+-+-
| |
-+-+-
| |
Board Created.
The game will start with player X`;
  }
}
module.exports = {
  Game,
};
