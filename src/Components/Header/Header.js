import React from "react";
import "./Header.css"

const Header = ({titulo}) => {
    return(
        <div className="headerDivFirst">
            <h1>{titulo}</h1>
        </div>
    )
}

export default Header