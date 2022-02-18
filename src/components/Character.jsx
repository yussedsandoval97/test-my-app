import React from "react";

/**
 *
 * @param {*} props
 * @returns
 */
function Character(props) {
    return (
        <div>
            <p><b>Name: </b> {props.name}</p>
            <p><b>Genre: </b> {props.genero}</p>
            <img alt="imagen-personaje" src={props.foto}></img>
        </div>
    )
}

export default Character;