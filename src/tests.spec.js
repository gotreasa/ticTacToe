const { Game } = require('./ticTacToe.js');
const { INITIAL_GRID } = require('./fixtures/scenarios');

describe('The game is played on a grid that\'s 3 squares by 3 squares', () => {
  test('the grid is empty at the start', () => {
    const game = new Game();
    const initialGame = game.print();
    expect(initialGame).toEqual(INITIAL_GRID);
  });
});
