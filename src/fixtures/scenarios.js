const INITIAL_GRID = `Game Board Creation…
| |
-+-+-
| |
-+-+-
| |
Board Created.
The game will start with player X`;
const FULL_GRID = `Game Board Creation…
| |
-+-+-
| |
-+-+-
| |
Board Created.
The game will start with player X

Player X:
 | |
-+-+-
 | |
-+-+-
 | |X

Player O:
 | |
-+-+-
 | |
-+-+-
 |O|X

Player X:
 | |
-+-+-
 | |X
-+-+-
 |O|X

Player O:
 | |
-+-+-
 | |X
-+-+-
O|O|X

Player X:
X| |
-+-+-
 | |X
-+-+-
O|O|X

Player O:
X|O|
-+-+-
 | |X
-+-+-
O|O|X

Player X:
X|O|X
-+-+-
 | |X
-+-+-
O|O|X

Player O:
X|O|X
-+-+-
 |O|X
-+-+-
O|O|X

Player X:
X|O|X
-+-+-
X|O|X
-+-+-
O|O|X`;
module.exports = {
  FULL_GRID,
  INITIAL_GRID,
};
