import React, { useState } from "react";
import './styles.css'
import Form from "./Form";


const App = () => {

const [mark, setMark] = useState(null); 
// function that alternates from X and O 



const handleClick = event => {
    event.target.innerHTML = "hello" 
    console.log(event.target.getAttribute('id'))
}
// function that checks the the board array 

const gameState = 
        [ 
            null, null, null,
            null, null, null,
            null, null, null
        ]

    return <>
        <div id="form"> 
            <Form />
        </div>
        <h1 id="board-title">Tic Tac Toe</h1>
        <div id="board-container">
            <div className="grid">
                {gameState.map((cell,idx) => {
                    return (
                        <div className= "cell" id = {idx} key = {idx} onClick = {handleClick}> {cell} </div>
                    )
                })
            }</div>
        </div>


    </>
    
}


export default App;