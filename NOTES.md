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

### Problem details  
* The game is played on a grid that's 3 squares by 3 squares.  
* The first player, is designated "X".  
* The second player, is designated "O".  
* Players take turns putting their marks in empty squares.  
* In order to win the game, a player must place three of their marks in a horizontal, vertical, or diagonal row.  
* When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a draw.  

## Backlog
✅ Define a function to decide the order each square is chosen  
✅ Fill out X and O in the squares according to the order  
🚧 Print the grid with the X and Os  
TODO: Add the iterations for each players go with 2 second timeout
TODO: Add the determination of when a user has won and the game can stop
TODO: Add the determination when the game is a draw 

## Pomodoro 1: Define the problem for readability and implement first scenario - empty grid  
✅ Put together the details of the problem  
✅ Write the test for an empty grid  
✅ Implement the initialisation of the grid  

## Pomodoro 2: 
✅ write a test for the order each square is filled  
✅ implement the function for the order for filling the squares  
✅ write a test to specify the array with the Xs and Os  
❌ implement the array with the Xs and Os being filled  

## Pomodoro 3
✅ implement the array with the Xs and Os being filled  
🚧 write test for printing the grid  
TODO: implement the print of the grid  



