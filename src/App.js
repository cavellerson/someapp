import React, { useState, useEffect } from 'react';

function App() {
    const tools = [
        {name:"Hand Scissors", output: 5, cost: 10},
        {name:"Weed Wacker", output: 10, cost: 30},
        {name:"Reel Lawn Mower", output: 15, cost: 50},
        {name:"Lawn Mower", output: 20, cost: 100},
        {name:"Hungry College Students", output: 500, cost: 200}
    ]

    const [playerName, setPlayerName] = useState('Cavell')
    const [playerBank, setPlayerBank] = useState(0)
    const [playerToolIndex, setPlayerToolIndex] = useState(0)
    const [nextPlayerToolIndex, setNextPlayerToolIndex] = useState(playerToolIndex + 1)



    const increaseBank = () => {
        setPlayerBank(playerBank + tools[playerToolIndex].output)
        console.log({playerToolIndex, nextPlayerToolIndex});
    }

    const buyNextPlayerTool = () => {
            setPlayerBank(playerBank - tools[nextPlayerToolIndex].cost)
            setPlayerToolIndex(playerToolIndex + 1)
            setNextPlayerToolIndex(nextPlayerToolIndex + 1)

    }

    useEffect(() => {
        alert(nextPlayerToolIndex)
    },[nextPlayerToolIndex])


  return (
    <div className="App">

        <div>
            <h1>Cut Grass & Co </h1>
            <h2>Info</h2>
            <p> {playerName} has ${playerBank} in the bank</p>
            <p> Current tool: {tools[playerToolIndex].name} ${tools[playerToolIndex].output}/cut</p>

            <h3>Next Tool</h3><p>{tools[nextPlayerToolIndex].name}</p>

        </div>

        <div>
            <h1>Actions</h1>
            <button onClick={increaseBank}>Cut Grass!</button>

            {playerBank >= tools[nextPlayerToolIndex].cost ? <button onClick={buyNextPlayerTool}>Buy {tools[nextPlayerToolIndex].name} </button>: null }
        </div>

        <div>
            <h1>Tools INFO</h1>
            {tools.map((index, key) => <p key={key}>{index.name} costs: ${index.cost} output: ${index.output}</p>)}
        </div>

    </div>
  );
}

export default App;
