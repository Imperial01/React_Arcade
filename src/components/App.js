import React, { useState } from "react";
import './styles.css'
import Form from "./Form";
import Board from "./Board";


const App = () => {
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')
    

    return <>
        <div id="form"> 
            <Form setPlayer1 = {setPlayer1} setPlayer2 = {setPlayer2} /> 
        </div>

        <div>
            <Board />
        </div>

    </>
    
}


export default App;