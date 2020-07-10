import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import AppStateTime from "./AppState"
ReactDOM.render(
    <AppStateTime>
        {(gameInfos) => <App gameInfos={gameInfos}/>}
    </AppStateTime>
    , document.getElementById("root"))
