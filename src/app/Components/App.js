import React,{useState, useEffect} from "react"
import Header from "./Header";
import Forms from "./Forms";
import Lyrics from "./Lyrics"
import Biography from "./Biography";

//https://api.lyrics.ovh/v1/${artist}/${song} LETRAS

//https://theaudiodb.com/api/v1/json/1/search.php?s=${artist} BIO

const App = () =>{
    //STATES
    const [artist,setArtist] = useState("")
    const [band,setBand] = useState("")
    const [song,setSong] = useState("")
    const [lyrics,setLyrics] = useState("")
    const [noDefault, setNoDefault] = useState(false)


    const getBand = (band) =>{
        setArtist(band.artist)
        setSong(band.song)
        setNoDefault(true)

        
    }
    const getBio = () =>{
        fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`)
            .then(data => data.json())
            .then(data => {
                setBand(data.artists[0])
            })    
    }
    const getLyrics = () =>{
        fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
            .then(data=>data.json())
            .then(data=>{
                setLyrics(data.lyrics) 
            })    
    }

    useEffect(
        ()=>{
            if(noDefault){
                getBio()
                getLyrics()        
            }
        },[song]
    )

    return(
        <div>
            <Header>LyricsApp</Header>
            <Forms
                band={getBand}
            />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <Biography
                            bandBio={band}
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Lyrics
                            song={song}
                            lyrics={lyrics}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App