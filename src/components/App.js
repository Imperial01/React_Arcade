import React, { useState } from "react";
import './styles.css'
import Form from "./Form";


const App = () => {

const [mark, setMark] = useState(null); 

const handleClick = event => {
    event.target.innerHTML = "hello"
    console.log(event.target.getAttribute('id'))
}

const board = 
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
                {board.map((cell,idx) => {
                    return (
                        <div className= "cell" id = {idx} key = {idx} onClick = {handleClick}> {cell} </div>
                    )
                })
            }</div>
        </div>


    </>
    
}


export default App;