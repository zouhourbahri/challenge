import React from "react";
import photo from "../components/image/photo.png"

function Content() {
    return (
        <div>
            <div className="profil">
            <div>
            <h1 className="name"> BAHRI Zouhour </h1>
            <h4 className="poste"> A SOFTWARE DEVELOPER </h4>
            </div>
            <div>
            <img className="photo" src={photo} alt=""/> 
            </div>
            </div>
            <hr/>
       </div>
    );
  }
  
  export default Content;