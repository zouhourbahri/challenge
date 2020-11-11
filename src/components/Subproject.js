import React from "react";
import coding from "./image/coding.jpg"

function Subproject( { href, link }) {
    return (
        <div>
            <div className="module">
                <img src={coding} alt="" className="moduletaille" />
               <a className="couleur" href= {href} > {Subproject.link} </a>
            </div>
            <hr />
        </div>
    )
}

export default Subproject;
