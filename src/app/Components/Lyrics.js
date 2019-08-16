import React from "react"

const Lyrics = ({song,lyrics}) =>{

    return(
        <div>
            <h2 className="mt-2 text-center">{song.charAt(0).toUpperCase() + song.slice(1,100)}</h2>
            <hr/>
            <p className="text-center lyrics">{lyrics}</p>
        </div>
    )
}

export default Lyrics