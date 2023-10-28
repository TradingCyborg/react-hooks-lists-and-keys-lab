import React from "react";

function NavBar({links}) {
 
  return ( 
  <nav>
    {links.map((link, index) => (
    <a key={index} href={link.url}>
      {link.text}
    </a>
  ))}
  </nav>
  );
}

export default NavBar;
