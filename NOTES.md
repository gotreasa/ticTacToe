**Labels** 
✅ done 
🚧 WIP 
❌ ERROR 
TODO:

## Grading criteria
* the kata has to be done in solo mode.  
* every scenario has to be planned in a pomodoro cycle.  
* the pomodoro cycle has to be committed with a  ‘pair-programming-notes’ into the code base.  
* the notes has to show your simple design approach and how you organised the code growth between features VS tech debt and refactor.  
* the code has to be done in a strict TDD way, via cycles of Red/Green/Refactor with a commit, or more, for every cycle.  
* the code has to be in a public code repository  
* last but not least, the refactor on this belt graduation is focus only on these aspects:  
1. Test: make the suite readable like the kata description  
2. Naming: the code and the tests have to share the same glossary/vocabulary  
3. Readability: the code has to be read as a book (hide the complexity behind behavioural encapsulation)  

# Notes

## Pomodoro 1: Define the problem for readability and implement first scenario - empty grid  
🚧 Put together the details of the problem  
🚧 Write the test for an empty grid  
🚧 Implement the initialisation of the grid  

### Problem details  
* The game is played on a grid that's 3 squares by 3 squares.  
* The first player, is designated "X".  
* The second player, is designated "O".  
* Players take turns putting their marks in empty squares.  
* In order to win the game, a player must place three of their marks in a horizontal, vertical, or diagonal row.  
* When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a draw.