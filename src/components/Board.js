import React, { useState } from 'react'

// add helper function here or make another component

const Board = ({gameState, setGameState, playerTurn, player1Piece, player2Piece, setPlayerTurn, player1, player2, winner, setWinner, isPlaying, setIsPlaying}) => {

    const [winCombo] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], ])

// dont let people click if the cell is already filled
// dont let people click if they havent pressed play
// dont let people click if the game is over

    const handleClick = (event, idx) => {
        const newGameState = [...gameState]
        if(!player1 && !player2) {
            alert('please press play')
            return
        } else if (gameState[idx] !== null) {
            alert('taken')
            return
        } else if (checkIfWon(newGameState) || checkIfFilled(newGameState)) {
            alert('RESET GAME')
            return
        } 

        if(isPlaying == true && gameState[idx] == null) {
            newGameState[idx] = playerTurn
        }

        if(checkIfWon(newGameState)){ 
            alert(`${playerTurn == player1Piece ? player1 : player2} is the WINNER`)
        } else if (checkIfFilled(newGameState)) {
                alert('TIE GAME')
        }
    
        setGameState(newGameState)
        
        if(playerTurn == player1Piece) {
            setPlayerTurn(player2Piece)
        } else {
            setPlayerTurn(player1Piece)
        }

    }


const checkIfWon = (newGameState) => {
    for(let j=0; j < winCombo.length; j++){
        let pattern = winCombo[j] 
        let a = newGameState[pattern[0]];
        let b = newGameState[pattern[1]];
        let c = newGameState[pattern[2]];

        if (a === null || b === null || c === null) {
            continue;
        }

        if (a === b && b === c) {
            return true;           
        }
    } 
    return false
}

const checkIfFilled = (newGameState) => {
    let filled = true;
    newGameState.forEach((cell) => {
        if (cell == null) {
            filled = false;
        } 
    })
    return filled
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



 
// check if tie  DONE. BOOM.