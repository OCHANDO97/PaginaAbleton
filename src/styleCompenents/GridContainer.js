import styled from "styled-components";


const GridContainer = styled.div `
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => props.rows};
  margin:0px 150px ;
  background: white;
`
const  GridColumn = styled.div`
    grid-column: ${(props) => props.ini_fin};
` 

export {GridContainer, GridColumn}
