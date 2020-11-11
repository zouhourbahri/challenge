import React from "react";

function NavBar(props) {
  console.log(props)
  return (
    <header>
      <p className="parag1" id="ancre haut de page"> Portfolio </p>
      <ul className="navigation" id="des">
        {props.navLinks.map((el, i) => {
          return (
            <li key={i}>
              <a href={el.href}> {el.link} </a> {" "}
            </li>
          )
        })}
      </ul>
      <hr />
    </header>

  )
}

export default NavBar;

