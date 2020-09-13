const {Game} = require('ticTacToe.js');
const {INITIAL_GAME} = require('fixtures/scenarios.js');
describe('The game is played on a grid that\'s 3 squares by 3 squares', () => {
    test('the grid is empty at the start', () => {
        const initialGame = Game();
        expect(initialGame).toEqual(INITIAL_GAME);
    })
});