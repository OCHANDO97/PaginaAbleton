import React,{useState} from 'react'
import Navbar from "../components/Navbar";
import css from "../style_page/PaginaLive.module.css";
import styled from "styled-components";
import { GridContainer, GridColumn } from "../styleCompenents/GridContainer";
import creationImg from "../assets/creation-space-front.avif";
import youtubeImg from "../assets/youtube.png";
import Modal from 'react-modal';
import closeImg from "../assets/close.png";
import FlechaDerecha from '../assets/flechaDerecha.png';
import imgCreateLive from "../assets/createLive.jpg";
import imgFeeling from "../assets/feeling.png";
import imgStage from "../assets/stage.jpg";
import imgExperiment from "../assets/experiment.png";
import imgImpredecible from "../assets/impredecible.jpg";
import imgWork from "../assets/work_sound.jpg";
import createTakeImg from "../assets/createTake.avif";
import feelingImg from "../assets/feeling.jpg";
import expreViewImg from "../assets/expression-view.jpg";
import expreSoundsImg from "../assets/expressive-sounds.jpg";
import storageImg from "../assets/storage.jpg";
import rackImprovements from "../assets/rack-improvements.avif";
import chanceTools from "../assets/chance-tools.avif";
import followActions from "../assets/follow-actions.avif";
import { CardFlex } from '../styleCompenents/CardFlex';
import creationspaceImg from '../assets/creation-space-top-down-5.avif';
import Footer from '../components/Footer';

function PaginaLive() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalOpenCreate, setModalOpenCreate] = useState(false);
  const [modalOpenFeeling, setModalOpenFeeling] = useState(false);
  const [selectLearnMore, setSelectLearnMore] = useState(false);
  const [nameBtn, setNameBtn] = useState("+ Learn More");
  const [modalOpenStage, setModalOpenStage] = useState(false);


  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const openModalCreate =() => {
    setModalOpenCreate(true)
  }

  const closeModalCreate =() => {
    setModalOpenCreate(false)
  }

  const openModalFeeling =() => {
    setModalOpenFeeling(true);
  }

  const closeModalFeeling =() => {
    setModalOpenFeeling(false);
  }

  const changeBtn =() => {
    setSelectLearnMore(!selectLearnMore)
    if (selectLearnMore) {
      setNameBtn('+ Learn More')  
    } else {
      setNameBtn('- Show less')  
    }
  }

  const openModalStage =() => {
    setModalOpenStage(true);
  }

  const closeModalStage =() => {
    setModalOpenStage(false);
  }



  return (
    <>
      <GridContainer columns="auto auto" rows="auto 550px auto 1000px 1900px auto auto 2400px 2000px 2500px 1050px">
        <GridColumn ini_fin="1/3">
          <Navbar />
        </GridColumn>
        <GridColumn ini_fin="1/3">
        <main >
          <h1 className={css.title}>What’s new in Live 11</h1>
         <button className={css.btnRepoducir} onClick={openModal} > <img className={css.imgBtn} src={youtubeImg} alt="" height="40px" width="40px"  /> <strong className={css.textBtn}>See what’s new</strong> </button>
         
         <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button className={css.btm} onClick={closeModal}><img src={closeImg} alt=""  width='30px' height='30px'/> </button>
        <iframe  width="1200" height="650" src="https://www.youtube.com/embed/zAisG2rrH_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
      </Modal>
        </main>
        </GridColumn>
        <GridColumn ini_fin="1/3">
        <img src={creationImg} alt="" height='860px' width='1605px'/>
        </GridColumn>
        <GridColumn ini_fin="1/3">
        <article className={css.tryLive}>
         <h1 className={css.titleTryLive}>Try Live 11 free for 90 days <img className={css.iconTryLive} src={FlechaDerecha}  alt="" height='30px' width='30px'/></h1>
         <p className={css.parrafoTryLive}>The Live 11 Suite trial includes all the features of the full version, including saving and exporting. You can use it alongside your current version of Live.</p>
         <h1 className={css.subTitleTryLive}>Explore the features in Live 11:</h1>
          <div className={css.gridContainer}>

            <a className={css.link} href="#create"> 
              <div className={css.divContainer} >
                <img className={css.imgTryLive} src={imgCreateLive} alt="" height="250px" width="450px"/>
                <p className={css.textTryLive} >Create your perfect take with comping</p>
              </div> 
              </a>
              <a className={css.link} href="#feeling"> 
              <div className={css.divContainer}> 
              <img className={css.imgTryLive} src={imgFeeling} alt="" height="250px" width="450px"/>
                <p className={css.textTryLive} >Add more feeling to your music</p> 
              </div>
              </a>
              
              <a className={css.link} href="#new-devices"> 
              <div className={css.divContainer}> 
                <img className={css.imgTryLive} src={imgExperiment} alt="" height="250px" width="450px"/>
                <p className={css.textTryLive}>Experiment with new devices</p> 
              
               </div>
               </a>
               <a className={css.link} href="#stage"> 
              <div className={css.divContainer}>
              <img className={css.imgTryLive} src={imgStage} alt="" height="250px" width="450px"/>
              <p className={css.textTryLive} >Do more on stage</p> 
              </div>
              </a>
               
              <a className={css.link} href="#unpredictable">
              <div className={css.divContainer}> 
              <img className={css.imgTryLive} src={imgImpredecible} alt="" height="250px" width="450px"/>
              <p className={css.textTryLive}>Be unpredictable</p> 
              </div>
              </a>
              <a className={css.link} href="#newSound">
              <div className={css.divContainer}> 
              <img className={css.imgTryLive} src={imgWork} alt="" height="250px" width="450px"/>
              <p className={css.textTryLive}>Work with new and updated sounds</p> 
              
              </div>
              </a>
          </div>

        </article>
        </GridColumn>
        <GridColumn ini_fin="1/3">
         <div id="create" >
         <h1 className={css.titleCreate}>Create your perfect take</h1>
         <button className={css.btnGeneral} onClick={openModalCreate}>  
         <img className={css.imgGeneral} src={createTakeImg} alt="" height="760px" width="1300px"/>
         <img className={css.btnImgRepoductor} src={youtubeImg} alt="" height="150px" width="150px"  />
         </button>
          <p className={css.textCreate}>Artist records and edits multiple takes of her voice and a MIDI keyboard using comping</p>
         <section className={css.sectionCreate}>
            <article className={css.articleCreate}>
              <h1 className={css.titleH1Create}>Take recording and comping</h1>
              <p  className={css.parrafoCreate}>Live organizes multiple passes of an audio or MIDI performance into individual takes. Pick the best moments of each performance and combine them to create your perfect take. Or approach sound design in a new way by splicing together random samples from your library.</p>
            </article>
            <article className={css.articleCreate}>
              <h1 className={css.titleH1Create}>Linked-Track Editing</h1>
              <p className={css.parrafoCreate}>Link two or more tracks to edit their content simultaneously. This makes editing multi-tracked instruments or performances with multiple musicians easy and fast whilst keeping everything in time across tracks. This feature also works for MIDI tracks.</p>
            </article>
           </section>
         <Modal
        isOpen={modalOpenCreate}
        onRequestClose={closeModalCreate}
        style={customStyles}
      >
        <button className={css.btm} onClick={closeModalCreate}><img src={closeImg} alt=""  width='30px' height='30px'/> </button>
        <iframe width="1200" height="650" src="https://www.youtube.com/embed/StDHuDdDANc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" allowfullscreen></iframe>
      </Modal>
         </div >
        </GridColumn>
        <GridColumn ini_fin="1/3">
          <div id="feeling" >
         <h1 className={css.titleFeling}>Add more feeling to your music</h1>
         <button className={css.btnGeneral} onClick={openModalFeeling}>  
         <img className={css.imgGeneral} src={feelingImg} alt="" height="760px" width="1300px"/>
         <img className={css.btnImgRepoductor} src={youtubeImg} alt="" height="150px" width="150px"  />
         </button>
         <p className={css.textCreate}>Artist demonstrates MPE using a Roli Seaboard, Push and Live 11’s new Note Expression View</p>
         <section className={css.sectionCreate}>
            <article className={css.articleCreate}>
              <h1 className={css.titleH1Create}>Use your MPE-capable controller</h1>
              <p  className={css.parrafoCreate}>Plug in your MPE-capable controller and immediately add bends, slides and pressure for each individual note in a chord. Add subtle expression variations, morph between chords and create evolving sonic textures.</p>
            </article>
            <article className={css.articleCreate}>
              <h1 className={css.titleH1Create}>What is MPE?</h1>
              <p className={css.parrafoCreate}>MPE stands for MIDI Polyphonic Expression. This way of using MIDI allows MPE-capable devices to control multiple parameters of every note in real time for more expressive instrumental performances.</p>
            </article>
           </section>
           
           <button className={css.btnLearnMore} onClick={() => changeBtn()}> {nameBtn}</button>
            <DivLearnMore cambio={selectLearnMore ? 'block': 'none'}>
              <section className={css.sectionLearnMore}>
                <article>
                   <img  src={expreViewImg} alt="" height="400px" width="600px"/>
                    
                </article>
                <article>
                <img  src={expreSoundsImg} alt="" height="400px" width="600px"/>
                </article>
                <article>
                  <h1 className={css.titleH1Create}>Note Expression View</h1>
                  <p className={css.parrafoCreate}>Edit the pitch, slide and pressure envelopes of each note to refine the expression of your takes. Or take your sound design further by sequencing polyphonic sound variations.</p>
                </article>
                <article>
                  <h1 className={css.titleH1Create}>More expressive sounds included</h1>
                  <p className={css.parrafoCreate}>Wavetable, Sampler and Arpeggiator are all updated to support MPE. And Live comes with MPE presets for each device that bring new dimensions of interaction and playability to your sound. The new expressive possibilities also enable polyphonic aftertouch on Push.</p>

                </article>
              </section>
              </DivLearnMore> 
         <Modal
        isOpen={modalOpenFeeling}
        onRequestClose={closeModalFeeling}
        style={customStyles}
      >
        <button className={css.btm} onClick={closeModalFeeling}><img src={closeImg} alt=""  width='30px' height='30px'/> </button>
        <iframe width="1200" height="650" src="https://www.youtube.com/embed/yaRQt6_3Sos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
      </Modal>
          </div>
        </GridColumn>

        <GridColumn ini_fin="1/3">
          <div id="new-devices" className={css.newDevices} >
            <section className={css.seccionFlex} > 
              <h1 className={css.titleNewDevices}>Experiment with new devices</h1>
              <article className={css.articleItem}>
             
                 <iframe width="700" height="400" src="https://www.youtube.com/embed/V_PtNGowT-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" allowfullscreen></iframe>
                  <h1 className={css.titleH1Create} >Hybrid Reverb</h1>
                  <p className={css.parrafoCreate}>Hybrid Reverb combines convolution and algorithmic reverbs. Place your sounds in any space, from accurate real-life environments to those that defy physical reality. Use the algorithmic side to add control and modulate the reverb tail, run it in parallel or in series with the convolution side, or play Hybrid Reverb like an instrument for real-time sound design.</p>
              </article>
              <article className={css.articleItem}>
              <iframe width="700" height="400" src="https://www.youtube.com/embed/iXcN-0oaIKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" allowfullscreen></iframe>
                  <h1 className={css.titleH1Create}>Spectral Resonator</h1>
                  <p className={css.parrafoCreate}>Breaks the spectrum of an incoming audio signal into partials, then stretches, shifts and blurs the result by a frequency or a note in subtle or radical ways. The MIDI sidechain input also allows musicians to process material in key and even play the device as if it were a polyphonic instrument.</p>
              </article>
              <article className={css.articleItem}>
                  <iframe width="700" height="400" src="https://www.youtube.com/embed/EBuB6G9ik1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" allowfullscreen></iframe>
                   <h1 className={css.titleH1Create}>Spectral Time</h1>
                   <p className={css.parrafoCreate}>Transforms sound into partials and feeds them into a frequency-based delay, resulting in metallic echoes, frequency-shifted and reverb-like effects. The Freeze function captures and holds a slice of audio – either free-running or in time with the beat – for stuttered, glitched and washed-out effects.</p>

              </article>
              <article className={css.articleItem}>
                  <iframe width="700" height="400" src="https://www.youtube.com/embed/tgxG0KqZMy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" allowfullscreen></iframe>
                  <h1 className={css.titleH1Create} >PitchLoop89</h1>
                  <p className={css.parrafoCreate}>Create jittery glitch effects, delayed digital shimmers and outlandish vibrato with this Max for Live pitch shifting device created in collaboration with Robert Henke and inspired by the Publison DHM 89 – an early digital effects processor. It’s a flexible tool to add character to sounds in the studio, or for in-the-moment experimentation onstage.</p>
              </article>
              <article className={css.articleItem}>
                  <iframe width="700" height="400" src="https://www.youtube.com/embed/CSxfiUYp6FU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" allowfullscreen></iframe>
                  <h1 className={css.titleH1Create}>Inspired by Nature</h1>
                  <p className={css.parrafoCreate}>Six playful instruments and effects created in collaboration with Dillon Bastan that use natural and physical processes as their inspiration.</p>
              </article>
          </section>
          </div>
        </GridColumn>
        <GridColumn ini_fin="1/3">
         <div id="stage">
          <h1 className={css.titleCreate} >Do more on stage</h1>
            <section className={css.sectionStage}>
           
              
             <div className={css.imagenVideo}>
                <button className={css.btnGeneral} onClick={() => openModalStage()}>  
              <img className={css.imgStageImg} src={storageImg} alt="" height="600px" width="950px"/>
              <img className={css.btnStage} src={youtubeImg} alt="" height="150px" width="150px"  />
             </button>
             <p className={css.textCreate}>A producer and drummer duo show tempo following and Macro improvements in action</p>
             <Modal
               isOpen={modalOpenStage}
               onRequestClose={closeModalStage}
              style={customStyles}
                  >
                <button className={css.btm} onClick={closeModalStage}><img src={closeImg} alt=""  width='30px' height='30px'/> </button>
                <iframe width="1200" height="650" src="https://www.youtube.com/embed/ExtxyH7qbAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
      </Modal>
              </div> 
              <aside className={css.asideStage}>
                <h1 className={css.titleH1Create}>Tempo Following</h1>
                <p className={css.parrafoCreate}>Live listens to and adjusts its tempo based on incoming audio in real time, making it a dynamic part of the band instead of the tempo source that everyone has to follow. When you DJ, you can even turn Live into a tempo-synced FX box.</p>
              </aside>
              <aside className={css.asideStage2}>
                <h1 className={css.titleH1Create}>Macro Variations</h1>
                <p className={css.parrafoCreate}>Store the state of your Macros for later recall – perfect for creating instant variations to your sounds or builds and drops during performance.</p>
              </aside>
             <img className={css.imgRack} src={rackImprovements} alt="" height="1030px" width="1070px"/>
             
             <aside className={css.asideStage3}>
                <h1 className={css.titleH1Create}>Rack improvements</h1>
                <p className={css.parrafoCreate}>Configure your Racks to have between 1 and 16 Macros. Randomize the state of your Macros with the randomization button. Map this control to MIDI and perform drastic changes in real time to surprise your audience and yourself.</p>
              </aside>

            </section> 
          </div> 
        </GridColumn>
        
        <GridColumn ini_fin="1/3"> 
          <div id="unpredictable">
              <h1 className={css.titleNewDevices}>Be unpredictable</h1>
              <section className={css.sectionFlex}>
                <article className={css.artiUnpredictable}>
                <main className={css.parrafosUnpredictable}>
                <h1 className={css.titleH1Create}>Note chance</h1>
                <p className={css.parrafoCreate}>Set the probability that a note or drum hit will occur and let Live generate surprising variations to your patterns that change over time.</p>
            
                <h1 className={css.titleH1Create}>Velocity chance</h1>
                <p className={css.parrafoCreate}>Define ranges for velocity probability for subtle, humanized variations in the dynamics of your patterns.</p>
                </main>
                </article>

                <img className={css.imgChangeTools} src={chanceTools} alt="" height="600px" width="1003px"/>
                 <article className={css.artiUnpredictable2}>
                     <main className={css.parrafosUnpredictable}>
                       <h1 className={css.titleH1Create}>Do more with Follow Actions</h1>
                       <p className={css.parrafoCreate}>Follow Actions can now be linked to the clip length, making it faster to create interesting sequences of clips. Scene Follow Actions let you create evolving arrangements. You can also set Follow Actions to jump to specific clips and enable and disable Follow Actions globally.</p>
                      </main>
                  </article>

                  <img className={css} src={followActions} alt="" height="600px" width="1003px"/>

              </section> 
          </div>
        </GridColumn>
        <GridColumn ini_fin="1/3">
          <div id="newSound" className={css.divNewSound}>
              <h1 className={css.titleWorkSound}>Work with new sounds</h1>
              <main className={css.textosNewSound}>
              <h1 className={css.titleH1Create}>New instruments</h1>
              <p className={css.parrafoCreate}>Created in collaboration with Spitfire Audio, these three Instrument Packs bring the dynamic chamber ensemble textures to any production.</p>
              </main>
             <CardFlex>
             <iframe width="400" height="300" src="https://www.youtube.com/embed/soRmpPJOIwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe> 
             <iframe width="400" height="300" src="https://www.youtube.com/embed/RPXJtFGO-iI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ; fullscreen" allowfullscreen></iframe>  
             <iframe width="400" height="300" src="https://www.youtube.com/embed/mxgea7jJWF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ; fullscreen" allowfullscreen></iframe>
             <main className={css.parrafosNewSound}>
              <h1 className={css.titleH1Create}>Upright Piano</h1>
              <p className={css.parrafoCreate}>Upright Piano infuses your productions with the natural warmth of an upright piano. Close-recorded for an intimate feel, this classic sound is at home in many styles of music – whether it’s used at its purest in a folk song or transformed in an electronic track.</p>
              </main>
              <main className={css.parrafosNewSound}>
              <h1 className={css.titleH1Create}>Brass Quartet</h1>
              <p className={css.parrafoCreate}>Feature a rich blend of trumpet, flugelhorn, tenor horn and trombone in your music. The instrument highlights the natural breathiness, range of expression and broad tonality of this brass quartet’s instrumentation.</p>
              </main>
              <main className={css.parrafosNewSound}>
              <h1 className={css.titleH1Create}>String Quartet</h1>
              <p className={css.parrafoCreate}>From delicate pizzicato droplets to full, vibrant layers, get the authentic timbres and textures of a string quartet. This combination of two violins, viola and cello has a sound that is immediately intimate, and is also a great starting point for sonic exploration.</p>
              </main>
               
              </CardFlex> 
              <main className={css.textosNewSound}>
              <h1 className={css.titleH1Create}>New Curated Collections</h1>
              <p className={css.parrafoCreate}>These Packs capture the musical threads that tie evolving styles and scenes together. Each is a curated selection of instruments, clips and samples that share a common sonic theme.</p>
              </main>

              <CardFlex className={css} >
              <iframe width="400" height="300" src="https://www.youtube.com/embed/JV3FgaJD-wM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
              <iframe width="400" height="300" src="https://www.youtube.com/embed/_uaQ1JB9d0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
              <iframe width="400" height="300" src="https://www.youtube.com/embed/sEg5x1ZhHMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
              <main className={css.parrafosNewSound}>
              <h1 className={css.titleH1Create}>Voice Box</h1>
              <p className={css.parrafoCreate}>Voice Box invites you to get inventive with vocals. This Pack features a comprehensive collection of contemporary vocal samples from multiple voices, a set of playable vocal instruments, and Effect Racks designed for vocal processing.</p>
              </main>
              <main className={css.parrafosNewSound}>
              <h1 className={css.titleH1Create}>Mood Reel</h1>
              <p className={css.parrafoCreate}>Set the scene with a collection of sounds for making music with a modern narrative feel. Evocative layered instruments combine organic and synthetic sounds with textural elements to add mood, space and movement to productions.</p>
              </main>
              <main className={css.parrafosNewSound}>
              <h1 className={css.titleH1Create}>Drone Lab</h1>
              <p className={css.parrafoCreate}>Drone Lab is a place of sustain. Weave complex, evolving threads through your productions with tonal and textural samples, generative noise, multisampled instruments, plus devices and Effect Racks designed for experimentation.</p>
              </main>
            
              </CardFlex> 
          </div>

        </GridColumn>
        <GridColumn ini_fin="1/3">
          <div className={css.getTrylive}>
          <article className={css.creationSpaceArticle}>
            <h1 className={css.titleCreation}>Try Live 11 for free</h1>
            <p className={css.parrafoCreation}>Get all the features of Live 11 Suite free for 90 days.</p>
            <a className={css.linkGetTrial} href='# '>Get the trial <img className={css.iconTryLive} src={FlechaDerecha}  alt="" height='30px' width='30px'/></a> 
          </article>
          <img className={css.creationsSpaceImg} src={creationspaceImg} alt=""  />
           
          </div>
          
        </GridColumn>
      </GridContainer>
      <Footer />

    </>
  );
}


export default PaginaLive;

const DivLearnMore = styled.div`
  display:${(props) => props.cambio};
  

` 

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
