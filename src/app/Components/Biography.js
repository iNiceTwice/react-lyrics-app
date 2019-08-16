import React from "react"

const Biography = ({ bandBio }) => {

    const { strArtist, strArtistThumb, strBiographyES, strBiographyEN} = bandBio
    //if(str == null) return null
        
    return (
        <div className="ml-3">
            <h2 className="text-center mt-2">{strArtist}</h2>
            <hr/>
            <img className="img-fluid rounded" src={strArtistThumb}/>
            <p className="lyrics mt-3">{strBiographyES ? strBiographyES : strBiographyEN}</p>
        </div>
    )
}

export default Biography