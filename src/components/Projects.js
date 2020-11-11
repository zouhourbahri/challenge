import React from "react";
import Subproject from "./Subproject"
import '../../src/App.css';

/*const modules = [
    {
      href: "#",
      source: "#",
      task: "",
    },
    {
      href: "#",
      source: "#",
      task: "",
    },
    {
      href: "#",
      source: "#",
      task: "",
    },
  ]

     function Project() {
    return (
        <div>
            <h2 id="ancre Projects"> Projects </h2>
            <div className="pro">
                <Subproject  modules={modules}/>
                <Subproject />
                <Subproject />
                <Subproject />
                <Subproject />
                <Subproject />
            </div>
        </div>

    );
}*/

const modules = [
    {
        href: "#",
        link: "Docplanner",
    },
    {
        href: "#",
        link: "ShoppingCart",
    },
    {
        href: "#",
        link: "Contact",
    },
]

function Project() {
    return (
        <div>
            <h2 id="ancre Projects"> Projects </h2>
            <div className="pro">
                <div>
                    {modules.map((currentmodule, i) => (
                        <Subproject key={i} Subproject={currentmodule} />
                    ))}
                    {/* <Subproject module={{}} /> */}
                </div>
            </div>
        </div>
    );
}

export default Project;

