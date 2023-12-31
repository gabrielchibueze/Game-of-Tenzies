import React from "react"


export default function Dies (props){
    const style = {
        backgroundColor: props.isHeld? "#59E391" : "white"
    }

    return (
        <div className="dice"
        style={style}
        onClick={props.holdDice}>
            <h1 className="dice-die">{props.die}</h1>
        </div>
    )
}