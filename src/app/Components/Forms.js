import React, {useState} from "react"

const Forms = ({band}) =>{
    //STATE
    const [search,setSearch] = useState({
        artist:"",
        song:""
    }) 
    
    const handleChange = e =>{
        setSearch({
            ...search,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault()
        band(search)
    }

    return(
        <div className="w-100 header main-bg pl-2 pr-2">
            <form onSubmit={handleSubmit} >
                <div className="d-flex">
                    <input onChange={handleChange} className="mr-2 form-control" name="artist" placeholder="Artista"/>
                    <input onChange={handleChange} className="form-control" name="song" placeholder="Canción"/>
                </div>
                <button type="submit" className="mt-2 d-block btn btn-success btn-block">Buscar</button>
            </form>
        </div>
        
    )
}

export default Forms