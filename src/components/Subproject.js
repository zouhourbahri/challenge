import React from "react";
import coding from "./image/coding.jpg"

function Subproject( {currentmodule}) {
    return (
            <div className="module">
                <img src={coding} alt="" className="moduletaille" />
               <a className="couleur" href= {currentmodule.href}> {currentmodule.link} </a>
            </div>
    )
}

export default Subproject;
