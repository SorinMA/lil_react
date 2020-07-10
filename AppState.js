import React, {useState, useEffect} from "react"

function AppStateTime(props) {
    let [state, setState] = useState({text:"", time: (props.time !== undefined ? props.time : 5), buttonDis:false, textDis:true,words:0, nrWords:false})
    
    const onType = (event) => {
        const {name, value} = event.target
        setState({...state, [name]:value})
    }
    
    const setTime = () => {
        setState(oldState => {
             if (oldState.time > 0)
                return ({...oldState, time:(oldState.nrWords ? oldState.time - 1 : oldState.time)})
             else
                return ({...oldState, time:props.time, textDis:!oldState.textDis, buttonDis:!oldState.buttonDis, nrWords:!oldState.nrWords, words: (((oldState.text).match(/("[^"]+"|[^"\s]+)/g)).length)}) 
            }
        )
    }
    
    const onClick = () => {
        if(!state.buttonDis) { 
            setState(oldState => ({...oldState, textDis:!oldState.textDis, buttonDis:!oldState.buttonDis, nrWords:!oldState.nrWords, text:""}))
        }
    }
    
    useEffect(() => {
        let newInt = setInterval(setTime, 1000)
        return () => {
            clearInterval(newInt)
        }
    }, [])
    
    return (
        <>
            {props.children({state:state, onType:onType, onClick:onClick})}
        </>
    )
}

AppStateTime.defaultProps = {
    time: 5
}

export default AppStateTime
