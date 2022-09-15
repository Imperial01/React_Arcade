1: Need to change value on the board when clicked on and have it change on the gameState array

    ie:
        gameState:  [null, null, null, null, null, null, null, null, null]
        output: (9) [null, null, null, "x", null, null, null, null, null]


2: Need a helper function COMPONENT to check winner  ADD IN BOARD.js

    ***** FROM OLD PROJECT ***** MUST BE ABLE TO EXPLAIN
    const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], ]

    function checkWinner() {
    for (let i = 0; i < winCombo.length; i++) { // i want to loop through the winCombo 
        let index = winCombo[i]
        let winComboA = gameState.board[index[0]] // get all the winCombo at first index 
        let winComboB = gameState.board[index[1]]// second index
        let winComboC = gameState.board[index[2]]// third index 
        if (winComboA && winComboA === winComboB && winComboA === winComboC) {
            board.removeEventListener('click', markCell)
            return title.innerHTML = winComboA + "  you  win!";
        } 


3: FILL OUT PLAYER FORM COMPONENT (Form.js)
    - you could use useState for [player,setPlayer]= useState('')
    - Use onSubmit for <form>
        - input value = setPlayer(value)  
    - if one player --> need COMPUTER AS PLAYER 2 

4:  NEED RESET BUTTON 
    - possibly reset the gamestate array to null 

5: CREATE COMPUTER LOGIC
    - when you click on a square, COMPUTER moves to a square that is OPEN.
    - COMPUTER must NOT make a move when there's WINNER. 

6: UPDATE Styles.css
    - Change background color
    - X and O color (red/green)

