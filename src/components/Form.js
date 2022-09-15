import React, {useState} from "react"


const Form = () => {

    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')

    
    const handleChangePlayer1 = (event) => {
        setPlayer1(event.target.value)
    }

    const handleChangePlayer2 = (event) => {
        setPlayer2(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setPlayer1('')
        setPlayer2('')
    }


    return <>
    <div> 
        <h1>Insert Player</h1>
        <form id= "register-form" onSubmit={handleSubmit}>
                        <label htmlFor="player1">P1:</label>
                        <input type="text" name="player1" value={player1} onChange={handleChangePlayer1} required/>
                        <br/>
                        <label htmlFor="player2">P2:</label>
                        <input type="text" name="player2" value={player2} onChange={handleChangePlayer2} required/>
                        <br/>
                        <button className="players-button" type = "submit">PLAY!</button>
                    </form>
    </div>
    </>
}


export default Form