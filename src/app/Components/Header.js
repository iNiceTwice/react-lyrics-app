import React from "react"

const Header = ({children}) =>{
    return(
        <div className="w-100 header righteous main-bg pl-2 pr-2">
            <div className="header-shape"></div>
            <h1 className="text-white">{children}</h1>
        </div>    
    )
}

export default Header