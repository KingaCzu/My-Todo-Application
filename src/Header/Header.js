import React from "react";
import "./Header.css";


function Header() {
  return (
    <header>
      <p>Hello, today is {new Date().toDateString()}</p>
      <h1 id="mainTitle">My Todo List Application</h1>
      <h4 id="secondTitle">Complete your outstanding tasks!</h4>
      
      </header>
  );
}

export default Header;