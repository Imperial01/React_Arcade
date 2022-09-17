import React, { useState } from "react";
import './styles.css'
import Form from "./Form";
import Board from "./Board";


const App = () => {
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')
    const [player1Piece, setPlayer1Piece] = useState('X')
    const [player2Piece, setPlayer2Piece] = useState('O')
    const [playerTurn, setPlayerTurn] = useState('X')
    const [gameState, setGameState]= useState(
        [ 
            null, null, null,
            null, null, null,
            null, null, null
        ])
    
        


    return <>
        {
            (!player1 && !player2) ?
                <div id="form">
                    <Form 
                    setPlayer1={setPlayer1} 
                    setPlayer2={setPlayer2} />
                </div> :
                <h1>
                P1:{player1}
                <br></br>
                P2:{player2}
                </h1>
        }

        <div>
            <Board 
            gameState = {gameState} 
            setGameState = {setGameState} 
            player1Piece = {player1Piece} 
            player2Piece = {player2Piece} 
            playerTurn = {playerTurn}
            setPlayerTurn = {setPlayerTurn}
            />
        </div>

        {
            (playerTurn == player1Piece) ?
                <div>
                    <h1>{player1}:{player1Piece}</h1>
                </div>:
                <h1>{player2}:{player2Piece}</h1>
        }
    </>

}


export default App;