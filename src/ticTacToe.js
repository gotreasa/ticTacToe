class Game {
  setOrder(order) {
    this.order = order;
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
