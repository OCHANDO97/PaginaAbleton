import React from "react";
import styled from "styled-components";
import { NavContainer } from "../styleCompenents/NavContainer";
import facebokImg from "../assets/facebook.png";
import twitterImg from "../assets/twitter.png";
import youtubeImg from "../assets/youtube.png";
import instagramImg from "../assets/instagram.png";

function Footer() {
  return (
    <FooterContainer>
      <h1 className="title">Ableton</h1>
      <div className="flexContainer">
        <ul>
          <li>Register Live or Push</li>
          <li>About Ableton</li>
          <li>Jobs</li>
           <a href="https://www.facebook.com/ableton">  <img  src={facebokImg} alt="" width="30px" height="30px" /></a>
            <a href="https://twitter.com/ableton"> <img className="iconos" src={twitterImg} alt="" width="30px" height="30px" /></a>
           <a href="https://www.youtube.com/ableton">  <img className="iconos" src={youtubeImg} alt="" width="30px" height="30px" /></a>
           <a href="https://www.instagram.com/ableton/"> <img className="iconos" src={instagramImg} alt="" width="30px" height="30px" /></a>
        </ul>

        <ul>
          <li>
            <strong>Education</strong>
          </li>
          <li>Offers for students and teachers</li>
          <li>Ableton for the Classroom</li>
          <li>Ableton for Colleges and Universities</li>
        </ul>

        <ul>
          <li>
            <strong>Sign up to our newsletter</strong>
          </li>
          <li>
            Enter your email address to stay up to date with the latest offers,
          </li>
          <li>tutorials, downloads, surveys and more.</li>
        </ul>

        <ul>
          <li>
            <strong>Community</strong>
          </li>
          <li>Find Ableton User Groups</li>
          <li>Find Certified Training</li>
          <li>Become a Certified Trainer</li>
        </ul>

        <ul>
          <li>
            <strong>Distributors</strong>
          </li>
          <li>Find Distributors</li>
          <li>Try Push in-store</li>
        </ul>
        <ul>
          <li>
            {" "}
            <strong>Language and Location</strong>
          </li>
        </ul>
        <nav>
          <NavContainer color="black" margin="0px">
            <ul>
              <li>
                <a href="<# ">Contact</a>
              </li>
              <li>
                <a href="<# ">UsPress</a>
              </li>
              <li>
                <a href="<# ">ResourcesLegal</a>
              </li>
              <li>
                <a href="<# ">InfoPrivacy</a>
              </li>
              <li>
                <a href="<# ">Policy</a>
              </li>
              <li>
                <a href="<# ">Cookie</a>
              </li>
              <li>
                <a href="<# ">Settings</a>
              </li>
              <li>
                <a href="<# ">Imprint</a>
              </li>
            </ul>
          </NavContainer>
        </nav>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  margin: 80px 150px 0px 150px;
  background: white;

  .title {
    padding: 80px 0px 50px 120px;
    font-size: 50px;
  }

  ul {
    list-style: none;
    width: 450px;
  }

  li {
    font-size: 20px;
  }

  .flexContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0px 100px;
  }

  nav {
    padding: 70px 500px 0px 0px;
  }

  strong {
    font-weight: bold;
    font-family: "Helvetica Neue", Helvetica;
  }

  .iconos {
    padding-left: 10px;
  }

  a{
    text-decoration: none;
  }
`;
