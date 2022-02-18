import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character"

/**
 Method characters
 */

function Characters() {
    const [characters, setCharacters] = useState([])
    const [pagesCharacter, setPagesCharacter] = useState(1);
    const [searchCharacter, setSearchCharacter] = useState(false);

    useEffect(() => {

        async function request() {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pagesCharacter}`)
            setCharacters(res.data.results)
        }

        request()
    }, [searchCharacter])

    const handleChange = (e) => {
        setPagesCharacter(e.target.value);
    }

    const handleClick = () => {
        setSearchCharacter(!searchCharacter);
    }

    return (
        <div>
            <input type="text" value={pagesCharacter} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
            {characters.length > 0 ? (
                characters.map((character, index) => (
                    <Character
                        key={`character${index + 1}`}
                        name={character.name}
                        foto={character.image}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Characters;