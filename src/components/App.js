import React, { useState } from "react";
import './styles.css'
import Form from "./Form";
import Board from "./Board";


const App = () => {


    return <>
        <div id="form"> 
            <Form />
        </div>
        <div>
            <Board />
        </div>

    </>
    
}


export default App;