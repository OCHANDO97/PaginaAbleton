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
            <NavLink to="/live"> Live</NavLink>
          </li>
          <li>
            <a href="# ">Push</a>
          </li>
          <li>
            <a href="# ">Link</a>
          </li>
          <li>
            <a href="# ">Shop</a>
          </li>
          <li>
            <a href="# ">Packs</a>
          </li>
          <li>
            <a href="# ">Help</a>
          </li>
        </ul>
      </NavContainer>
    </>
  );
};

export default Navbar;


