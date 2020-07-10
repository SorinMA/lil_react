import React from "react"

function App (props) {
    const {state,onType,onClick} = props.gameInfos
    const {text, time, buttonDis, textDis, words, nrWords} = state
    return (
        <>
            <h1> Game </h1>
            <textarea name="text" value={text} disabled={textDis} onChange={onType} />
            <h4> Time: {time} </h4>
            <button onClick={onClick} disabled={buttonDis}> START </button>
            <h1 style={nrWords ? {display: "none"} : {fontSize: 20, textAlign:"center"}}> Words:{words} </h1>
        </>
    )
}

export default App
