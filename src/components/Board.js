import React from 'react'

// add helper function here or make another component

const Board = ({gameState, setGameState, playerTurn, player1Piece, player2Piece, setPlayerTurn}) => {

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