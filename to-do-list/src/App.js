import React from "react"
import Fish from "./fishs/fish"

function addFish () {

}

function App () {
  return (
    <div className="aquarium" >
      <h1 onClick={addFish} className="text">水族館小遊戲</h1>
      <Fish />
    </div>
  )
}
export default App
