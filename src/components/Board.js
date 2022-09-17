import React, { useEffect } from 'react'

// add helper function here or make another component

const Board = ({gameState, setGameState, playerTurn, player1Piece, player2Piece, setPlayerTurn}) => {

    const [winCombo] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], ])

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
    winCombo.forEach((pattern) => {
        let won = true
        let firstValue = null
        for(let i=0; i < pattern.length; i++) {
            let idx = pattern[i]
            let gameValue = gameState[idx]
            if(i === 0) {
                //if this is the first time through loop
                firstValue = gameValue
                //we want to store the game value to compare
            }
            if (gameValue !== firstValue) {
                return false
            }
            if (won) {
                alert('{player} WON!!!!!!!!!')
            }
            //FINISH THE LOOPS, JEFF SAID IT IS NOT DONE
            //PROGRESS***
            
        }
    })
}


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