import React, { useState, useEffect } from 'react'

// add helper function here or make another component

const Board = ({gameState, setGameState, playerTurn, player1Piece, player2Piece, setPlayerTurn,player1,player2}) => {

    const [winCombo] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], ])
    
    useEffect(() => {
        if(checkIfWon()){
            alert(`${playerTurn == player1Piece ? player2 : player1} is the WINNER`)
        }
        
    },[gameState])

    const handleClick = (event, idx) => {
        
        const newGameState = [...gameState]
        newGameState[idx] = playerTurn
        setGameState(newGameState)
        
        if(playerTurn == player1Piece) {
            setPlayerTurn(player2Piece)
        } else {
            setPlayerTurn(player1Piece)
        }
    }

    //two loops, one inside the other.
    //do it ourselves


const checkIfWon = () => {
    for(let j=0; j < winCombo.length; j++){
        let pattern = winCombo[j] 
        let a = gameState[pattern[0]];
        let b = gameState[pattern[1]];
        let c = gameState[pattern[2]];

        if (a === null || b === null || c === null) {
            continue;
        }

        if (a === b && b === c) {
            return true;           
        }
    } 
    return false
}

const checkIfTie = () => {
    let filled = true;
    gameState.forEach((cell) => {
        if (cell == null) {
            filled = false;
        }
    });

    if (filled) {
        alert('tie');
    }
};

    return (<>
        <h1 id="board-title">Tic Tac Toe</h1>
        <div id="board-container">
            <div className="grid">
            {
                gameState.map((cell,idx) => {
                    return (
                        <div className= "cell" key = {idx} onClick = {(event) => {handleClick(event, idx)}}> {cell} </div>
                    )})
            }
            </div>
        </div>
    </>)
}






export default Board;



// dont let people click if the cell is already filled
// dont let people click if they havent pressed play
// dont let people click if the game is over 
// check if tie 