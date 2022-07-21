import React from 'react'
import { GridContainer, GridColumn } from "../styleCompenents/GridContainer";
import Navbar from "../components/Navbar";
import css from '../style_page/PaginaShop.module.css';
import pexelsTryliveImg from '../assets/pexelsTrylive.jpg';
import createMusic from '../assets/createMusic.jpg';
import maxDevices from '../assets/maxDevices.jpg';
import visaImg from '../assets/Visa.png';
import masterCard from '../assets/Master-Card.png';
import jcbImg from '../assets/jcb-icon.png';
import paypalImg from '../assets/Paypal.png';
import Footer from '../components/Footer';

const PaginaShop = () => {
  return (
    <>
        <GridContainer columns="repeat(2,50%)" rows="" >
        <GridColumn ini_fin="1/3">
          <Navbar />
        </GridColumn>
        <article className={css.articuloLive}>
           <h1 className={css.titleArticle}>Live</h1>
           <p className={css.txtGeneralArticle}>Fast, fluid and flexible software for music creation and performance.</p> 
           <img className={css.imgTryLive} src={pexelsTryliveImg} alt="" width="50%" height="200" />

        </article>
        <article className={css.articuloPush}>
           <h1 className={css.titleArticle}>Push</h1>
           <p className={css.txtGeneralArticle}>Powered by Live, Push puts all the fundamental elements of music-making at your fingertips.</p> 
        </article>
        </GridContainer>
           <h1 className={css.txtStudent}>Students and teachers – save up to 40% with our education offers.</h1>
        <GridContainer columns="repeat(2,50%)" rows="auto 450px">
        <article className={css.maxLive}>

           <h1 className={css.titleArticle}>Max for Live</h1>
           <p className={css.txtGeneralArticle}>Discover new instruments, effects and customizations for Live.</p> 
           <img className={css.creMusic} src={createMusic} alt="" width="350px" height="250" />
           <img className={css.maxDevices} src={maxDevices} alt="" width="50%" height="200" />

        </article>

        <article className={css.Marking}>
           <h1 className={css.titleArticle}>Making Music</h1>
           <p className={css.txtGeneralArticle}>74 Creative Strategies for Electronic Music Producers. A book by Dennis DeSantis.</p>
           <p className={css.txtGeneralArticle}> Download for free in the following formats: .pdf, .mobi (for Kindle), .epub (for all devices)</p> 
        </article>

        <article className={css.Pack}>
             <h1 className={css.titleArticle}>Packs</h1>
             <p className={css.txtGeneralArticle}>Expand your studio with sounds, tools and instruments for Live.</p> 
        </article>

        <article className={css.merchandise}>
           <h1 className={css.titleArticle}>Merchandise</h1>
           <p className={css.txtGeneralArticle}>Ableton apparel, hardware accessories and more.</p> 
        </article>

        <article className={css}>
          <h1 className={css.titleArticle}>Payment methods</h1>
           <p className={css.txtGeneralArticle}>We accept payments via Credit Card, PayPal.</p> 
           <main className={css.imgPagos}>
           
             <img className={css} src={visaImg} alt="" width="100" height="100" />
             <img className={css} src={masterCard} alt="" width="100" height="100" />
              <img className={css} src={jcbImg} alt="" width="100" height="100" />
              <img className={css} src={paypalImg} alt="" width="100" height="100" />

           </main>
        </article> 
        <article className={css}>
          <h1 className={css.titleArticle}>Questions?</h1>
           <p className={css.txtGeneralArticle}>Don’t hesitate to get in touch with us if you have any questions before you buy Live or Push.</p> 
        </article> 
        <article className={css.shoping} >
           <h1 className={css.titleArticle}>Secure shopping</h1>
           <p className={css.txtGeneralArticle}>Shopping at the Ableton webshop is safe: Your customer data is transferred using a secure connection.</p> 
        </article>
        

        </GridContainer>
        <Footer />

    </> 
  )
}

export default PaginaShop