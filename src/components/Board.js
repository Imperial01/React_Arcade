import React from 'react'

// add helper function here or make another component

const Board = () => {
    const gameState = 
        [ 
            null, null, null,
            null, null, null,
            null, null, null
        ]

    const handleClick = event => {
            event.target.innerHTML = "hello" 
            console.log(event.target.getAttribute('id'))
        }

    return (<>
        <h1 id="board-title">Tic Tac Toe</h1>
        <div id="board-container">
            <div className="grid">
            {
                gameState.map((cell,idx) => {
                    return (
                        <div className= "cell" id = {idx} key = {idx} onClick = {handleClick}> {cell} </div>
                    )})
            }
            </div>
        </div>
    </>)
}

export default Board;