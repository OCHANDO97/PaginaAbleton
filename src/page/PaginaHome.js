import React from "react";
import css from "../style_page/PaginaPrincipal.module.css";
import { GridContainer, GridColumn } from "../styleCompenents/GridContainer";
import Navbar from "../components/Navbar";
import Microphone from "../assets/microphone.jpg";
import tennysonImg from "../assets/tennyson.jpg";
import FlechaDerecha from "../assets/flechaDerecha.png";
import { NavContainer } from "../styleCompenents/NavContainer";
import { CardFlex } from "../styleCompenents/CardFlex";
import shidaImg from "../assets/Shida.jpg";
import sugaiImg from "../assets/sugai.jpg";
import tecladoImg from "../assets/teclado.jpg";
import mysteriousImg from "../assets/mysterious.jpg";
import historyWomenImg from "../assets/historyWomen.jpg";
import agonyImg from "../assets/Agony.jpg";
import kimbraImg from "../assets/kimbra.jpg";
import lafawndahImg from "../assets/lafawndah.jpg";
import musicalImg from "../assets/musicalOnline.jpg";
import Footer from "../components/Footer";

function PaginaHome() {
  return (
    <>
      <GridContainer columns="auto auto" rows="auto 800px" >
        <GridColumn ini_fin="1/3">
          <Navbar />
        </GridColumn>
        <article>
          <img src={tennysonImg} alt="" />
          <p className={css.textTennyson}>
            Tennyson: Storytelling With Productions
          </p>
          <h3 className={css.textTennysonLearn}>
            Learn more
            <img className={css.imgFlechaTennyson} src={FlechaDerecha} alt="" />
          </h3>
        </article>
        <article>
          <img className={css.microphone} src={Microphone} alt="" />

          <ul className={css.textMicrophone}>
            <li className={css.textoMicrophoneLi}>The Best Microphone</li>
            <li className={css.textoMicrophoneLi2}>
              (Is the One You Already Have):
            </li>
            <li className={css.textoMicrophoneLi3}>
              A Workshop with Liz Teutsch
            </li>
          </ul>
          <h3 className={css.textMicrophoneLearn}>
            <img
              className={css.imgFlechaMicrophone}
              src={FlechaDerecha}
              alt=""
            />
          </h3>
        </article>
        <h1 className={css.titleTheLatest}>The latest from Ableton</h1>
        <GridColumn ini_fin="1/3">
          <NavContainer color="blue" margin="800px">
            <ul>
              <li>
                <a href="# "> All posts</a>
              </li>
              <li>
                <a href="# "> Artists</a>
              </li>
              <li>
                <a href="# ">News </a>
              </li>
              <li>
                <a href="# ">Downloads </a>
              </li>
              <li>
                <a href="# ">Tutorials </a>
              </li>
              <li>
                <a href="# ">Videos </a>
              </li>
              <li>
                <a href="# ">Loop </a>
              </li>
            </ul>
          </NavContainer>
        </GridColumn>
        <GridColumn ini_fin="1/3">
          <CardFlex>
            <div className={css.cardDiv}>
              <img src={shidaImg} alt="" width="400" height="200" />
              <h5 className={css.textParrafo}>Artists </h5>
              <p className={css.textParrafo}>
                Shida Shahabi: The Multi-Disciplinary Path of a Film Composer
              </p>
            </div>
            <div className={css.cardDiv}>
              <img src={tecladoImg} alt="" width="400" height="200" />
              <h5 className={css.textParrafo}>Tutorials </h5>
              <p className={css.textParrafo}>
                Experimental Sound Design with Feedback Loops
              </p>
            </div>
            <div className={css.cardDiv}>
              <img src={sugaiImg} alt="" width="400" height="200" />
              <h5 className={css.textParrafo}>Artists</h5>
              <p className={css.textParrafo}>
                SUGAI KEN: The Shibui of Field Recording and Electronics
              </p>
            </div>
          </CardFlex>
        </GridColumn>
        <GridColumn ini_fin="1/3">
          <h1 className={css.titleTheLatest}>In focus: experimental</h1>
          <NavContainer color="blue" margin="1400px">
            <ul>
              <li>
                <a href="# ">
                  Discore more
                  <img
                    className={css.imgFlechaDiscore}
                    src={FlechaDerecha}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </NavContainer>
        </GridColumn>
        <GridColumn ini_fin="1/3">
          <CardFlex>
            <div className={css.cardDiv}>
              <img src={mysteriousImg} alt="" width="400" height="200" />
              <h5 className={css.textParrafo}>Tutorials</h5>
              <p className={css.textParrafo}>
                Mysterious Ambient Music Project Teset Drops Introspective
                Release ‘Stapler’
              </p>
            </div>

            <div className={css.cardDiv}>
              <img src={historyWomenImg} alt="" width="400" height="200" />
              <h5 className={css.textParrafo}>Tutorials</h5>
              <p className={css.textParrafo}>
                The Secret History of Women in Electronic Music Is Just
                Beginning to Be Told
              </p>
            </div>

            <div className={css.cardDiv}>
              <img src={agonyImg} alt="" width="400" height="200" />
              <h5 className={css.textParrafo}>Tutorials</h5>
              <p className={css.textParrafo}>Ilhan Mimaroglu - Agony</p>
            </div>
          </CardFlex>
        </GridColumn>
        <GridColumn ini_fin="1/3">
          <h1 className={css.titleTheLatest}>
            One Thing videos: monthly creative tips
          </h1>

          <NavContainer color="blue" margin="1400px">
            <ul>
              <li>
                <a href="# ">
                  See all videos
                  <img
                    className={css.imgFlechaDiscore}
                    src={FlechaDerecha}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </NavContainer>
        </GridColumn>
        <GridColumn ini_fin="1/3">
          <CardFlex>
            <div className={css.cardDiv}>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/gGS2QH4PJjI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p className={css.textParrafo}>Jamming with mutes</p>
            </div>
            <div className={css.cardDiv}>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/xxH2jKktHYY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p className={css.textParrafo}>Delay as a tone shaper</p>
            </div>
            <div className={css.cardDiv}>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/DhmXp_KdoWc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p className={css.textParrafo}>Starting with data</p>
            </div>
          </CardFlex>
        </GridColumn>
        <GridColumn ini_fin="1/3">
          <h1 className={css.titleTheLatest}>
            Videos and features from Loop events
          </h1>
          <NavContainer color="blue" margin="1400px">
            <ul>
              <li>
                <a href="# ">
                  See more
                  <img
                    className={css.imgFlechaDiscore}
                    src={FlechaDerecha}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </NavContainer>
        </GridColumn>
        <GridColumn ini_fin="1/3">
          <CardFlex>
            <div className={css.cardDiv}>
              <img src={musicalImg} alt="" width="400" height="200" />
              <p className={css.textParrafo}>
                Rachel K Collier: Making A Musical Life Online
              </p>
            </div>
            <div className={css.cardDiv}>
              <img src={kimbraImg} alt="" width="400" height="200" />
              <p className={css.textParrafo}>
                Kimbra: Expansion, Contraction, Improvisation
              </p>
            </div>
            <div className={css.cardDiv}>
              <img src={lafawndahImg} alt="" width="400" height="200" />
              <p className={css.textParrafo}>
                Lafawndah: Closing the Gap Between Artist and Audience
              </p>
            </div>
          </CardFlex>
        </GridColumn>
       
      </GridContainer>
     
       <Footer />
       
    </>
  );
}

export default PaginaHome;
