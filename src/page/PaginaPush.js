import React from "react";
import { GridContainer, GridColumn } from "../styleCompenents/GridContainer";
import Navbar from "../components/Navbar";
import css from "../style_page/PaginaPush.module.css";
import pushMusic from "../assets/pushMusic.jpg";
import tecladoVideo from "../assets/tecladoVideo.mp4";
import posterIntro from "../assets/poster-intro.jpg";
import soundMovil from "../assets/soundMovil.jpg";
import Footer from "../components/Footer";



const PaginaPush = () => {
  return (
    <>
      <GridContainer columns="auto auto" rows="auto 2000px auto 1000px">
        <GridColumn ini_fin="1/3">
          <Navbar />
        </GridColumn>
        <GridColumn ini_fin="1/3">
          <h1 className={css.titlePushMusic}>Push</h1>
          <h1 className={css.titlePushMusic2}>Music at your fingertips</h1>
          <img src={pushMusic} alt="" height="1100px" width="1603px" />
          <article className={css.artiPushMusic}>
            <p className={css.textPushMusic}>
              Push is an instrument that puts everything you need to make music
              in one place—at your fingertips.
            </p>
            <p className={css.textPushMusic2}>
              Making music is hard. To stay in the flow, you need to be able to
              capture your ideas quickly, and you need technology to stay out of
              the way. Computers make it possible for one person to create whole
              worlds of sound. But instruments are where inspiration comes from.
              Push gives you the best of everything. It’s a powerful, expressive
              instrument that gives you hands-on control of an unlimited palette
              of sounds, without needing to look at a computer.
            </p>
          </article>
          <iframe
            className={css.iframeYoutube}
            width="800"
            height="500"
            src="https://www.youtube.com/embed/0CdMvkBOUgs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
          ></iframe>
        </GridColumn>
        <GridColumn ini_fin="1/3">
          <article>
            <video
              src={tecladoVideo}
              width="1603"
              height="1200"
              autoplay
              muted
              loop
              controls
            ></video>
            <h1 className={css.titleVideo}>Capture your music</h1>
            <p className={css.parrafoVideo}>
              Play or step sequence all of your musical ideas. Whether playing
              drums or pitched instruments, Push adapts to your musical needs,
              with great feeling pads and controls that keep you in the flow.
            </p>
          </article>
          <div className={css.cardGrid}>
            <main className={css.imgPoster}>
              <img src={posterIntro} alt="" height="930px" width="950px" />
            </main>
            <article className={css.artiPlay}>
              <h1 className={css.titlePlay}>
                Play and tweak samples. Slice beats, play one shots, or mangle
                samples with warping
              </h1>
              <p className={css.txtPlay}>
                Push gives you a range of ways to play and manipulate your
                samples. Slice samples across the pads, play single hits, or
                warp long samples so that they always stay in time with your
                song.
              </p>
            </article>
            <article className={css.artiSound}>
              <h1 className={css.titleSound}>
              All of your sounds, at your fingertips
              </h1>
              <p className={css.txtSound}>
              Access all of Live’s devices, your third-party plug-ins, and samples. Use Push to browse, preview, and load your sounds. Get fast hands-on access to Live’s built-in devices, VST or Audio Units plug-ins, and your sample library.
              </p>

            </article>
              <img className={css.soundMovilImg} src={soundMovil} alt="" height="600px" width="1200px" />
                
          </div>
          
        </GridColumn>
      </GridContainer>
      <Footer /> 
     
    </>
  );
};

export default PaginaPush;
