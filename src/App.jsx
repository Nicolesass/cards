import {shuffleDeck} from "./logic"
import { useState, useEffect } from "react"
function App() {
  const [player1, setPlayer1] = useState([])
  const [player2, setPlayer2] = useState([])

useEffect(()=>{
  setPlayer1(shuffleDeck().slice(0,26))
  setPlayer2(shuffleDeck().slice(26))
},[])
  




  
  return (
    <>
      <h1>Hallo</h1>
      {player1 && <p>{player1[0]}</p>}
    </>
  )
}

export default App
    