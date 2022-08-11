import React, { useState } from "react";
import './styles.css'
import Form from "./Form";


const App = () => {

const [mark, setMark] = useState('cell'); 

const board = 
        ["1", "2", "3",
        "4", "5", "6",
        "7", "8", "9"
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
                        <div className="cell" key={ idx }>{cell}</div>
                    )
                })
            }</div>
        </div>


    </>
    
}


export default App;