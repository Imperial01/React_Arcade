import React, {useState} from "react"


const Form = ({setPlayer1, setPlayer2, setIsPlaying}) => {

    const [formPlayer1, setFormPlayer1] = useState('')
    const [formPlayer2, setFormPlayer2] = useState('')
    
    const handleChangePlayer1 = (event) => {
        setFormPlayer1(event.target.value)
    }

    const handleChangePlayer2 = (event) => {
        setFormPlayer2(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setPlayer1(formPlayer1)
        setPlayer2(formPlayer2)
        setFormPlayer1('')
        setFormPlayer2('')
        setIsPlaying(true)
    }


    return <>
    <div> 
        <h1>Insert Player</h1>
        <form id= "register-form" onSubmit={handleSubmit}>
                        <label htmlFor="player1">P1:</label>
                        <input type="text" name="player1" value={formPlayer1} onChange={handleChangePlayer1} required/>
                        <br/>
                        <label htmlFor="player2">P2:</label>
                        <input type="text" name="player2" value={formPlayer2} onChange={handleChangePlayer2} required/>
                        <br/>
                        <button className="players-button" type = "submit">PLAY!</button>
                    </form>
    </div>
    </>
}


export default Form