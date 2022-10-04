import React from "react";

const Footer = ({fecha}) => {
    return(
        <footer>
            <p className="copyRightsFooter">Todos los derechos reservados &copy; {fecha}</p>
        </footer>
    )
}

export default Footer