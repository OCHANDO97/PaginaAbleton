import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { CardFlex } from '../styleCompenents/CardFlex'
import { GridColumn, GridContainer } from '../styleCompenents/GridContainer'
import css from '../style_page/PaginaPack.module.css';
import Footer from '../components/Footer'

const PaginaPack = () => {

    const [datos, setDatos] = useState([]);
   

    useEffect(() => {
       
         fetch("https://my-json-server.typicode.com/OCHANDO97/Api_ableton/data")
         .then(response => response.json())
         .then(response => setDatos(response))
         .catch(err => console.error(err));
    
        },[datos]);

 
  return (
    <>
    <GridContainer columns="repeat(2,50%)" rows="auto 600px 1900px" >
        <GridColumn ini_fin="1/3">
            <Navbar />
        </GridColumn>
        <GridColumn ini_fin="1/3">
           <article className={css.artiIreal}>
               <h1 className={css.titleIreal}>HYPER-REAL by Comakid</h1> 
               <h1 className={css.subTitleIreal}>Hybrid tools for shapeshifting pop experiments.</h1>
            </article> 
        </GridColumn>
        <GridColumn ini_fin="1/3">
        <CardFlex >
        {datos.map((el) => {
            return (
               <div>
                <img src={el.imagen} alt="" height="300px" width="300px" />
                <p >{el.title}</p>
                <audio src={el.music} preload="none" controls></audio>
               </div> 
            )
        })}

        </CardFlex>
       
        </GridColumn>
    </GridContainer>
    <Footer />
    </>
  )
}

export default PaginaPack