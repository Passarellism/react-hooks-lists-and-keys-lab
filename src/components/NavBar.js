import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksList = links.map((string) => {
    return <a href={"#" + string} key={string}>{string}</a>
  })

  return <nav>
          {linksList}
        </nav>;
}

export default NavBar;
