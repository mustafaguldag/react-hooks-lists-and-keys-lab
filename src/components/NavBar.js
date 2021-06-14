import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map(string =>{
    return <a href= {"#" + string} key={string}>{string}</a>} )}
    
    
        </nav>;
}

export default NavBar;
