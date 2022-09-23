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
    const [isPlaying, setIsPlaying] = useState(false)
    const [winner, setWinner] = useState('')
    const [gameState, setGameState] = useState(
        [
            null, null, null,
            null, null, null,
            null, null, null
        ])


    const restartGame = () => {
        setGameState([
            null, null, null,
            null, null, null,
            null, null, null]);
        setPlayer1("");
        setPlayer2("");
        setPlayerTurn("X")
    };



    return <>
        {
            (!player1 && !player2) ?
                <div id="form">
                    <Form
                        setPlayer1={setPlayer1}
                        setPlayer2={setPlayer2} 
                        isPlaying = {isPlaying}
                        setIsPlaying = {setIsPlaying}/>
                </div> :
                <div> 
                    { 
                        (playerTurn == player1Piece) ?
                            <div>
                                <h1>{player1}:{player1Piece}</h1>
                            </div> :
                            <div>
                                <h1>{player2}:{player2Piece}</h1>
                            </div>
                    } 
                    <button className="players-button" onClick={restartGame}>RESET!</button>
                </div>

        }

        <div>
            <Board
                gameState={gameState}
                setGameState={setGameState}
                player1Piece={player1Piece}
                player2Piece={player2Piece}
                playerTurn={playerTurn}
                setPlayerTurn={setPlayerTurn}
                player1 = {player1}
                player2 = {player2}
                setIsPlaying = {setIsPlaying}
                isPlaying = {isPlaying}
            />
        </div>




    </>

}


export default App;