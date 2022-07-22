import React from "react";
import {NavContainer} from "../styleCompenents/NavContainer";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavContainer color='black' margin='200px '>
        <ul>
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/live">Live</NavLink>
          </li>
          <li>
            <NavLink to="/push">Push</NavLink>

          </li>
     
          <li>
            <NavLink to="/shop">Shop</NavLink>

          </li>
          <li>
            <NavLink to="/packs">Packs</NavLink>

          </li>
          
        </ul>
      </NavContainer>
    </>
  );
};

export default Navbar;


