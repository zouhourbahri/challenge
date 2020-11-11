import React from "react";
import Subproject from "./Subproject"
import '../../src/App.css';

const modules = [
    {
        href: "https://drive.google.com/drive/folders/1Ev5Cl7M1xkUkSDjxkC0OvUJfmbbNg1sr",
        link: "Docplanner",
    },
    {
        href: "https://drive.google.com/drive/folders/17JCU9R1PoKFBlyJQKwxADfyWWU6vvRDn",
        link: "ShoppingCart",
    },
    {
        href: "https://github.com/zouhourbahri/reactprops",
        link: "ReactProps",
    },
]

function Project() {
    return (
        <div>
            <h2 className="title" id="ancre Projects"> Projects </h2>
                <div className="pro">
                    {modules.map((currentmodule, i) => (
                        <Subproject key={i} currentmodule={currentmodule} />
                    ))}
                </div>
            <hr />
        </div>
    );
}

export default Project;

