const { Game } = require('./ticTacToe.js');
const { INITIAL_GRID } = require('./fixtures/scenarios');

describe('The game is played on a grid that is 3 squares by 3 squares', () => {
  test('the grid is empty at the start', () => {
    const game = new Game();
    const initialGame = game.print();
    expect(initialGame).toEqual(INITIAL_GRID);
  });
});
describe('The order of the squares filled is predetermined', () => {
  it('the order can be passed in', () => {
    const game = new Game();
    game.setOrder([8, 7, 5, 6, 0, 1, 2, 4, 3]);
    expect(game.order).toEqual([8, 7, 5, 6, 0, 1, 2, 4, 3]);
  });
});
