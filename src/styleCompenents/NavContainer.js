import styled from "styled-components";

export const NavContainer = styled.nav`

margin-left:${(props) => props.margin} ;

ul {
list-style-type: none;
background-color: white ;
height:50px;

}

li {
display: inline;
}

a{
text-decoration: none;
color: ${(props) => props.color};
font-weight: bold;
font-size:20px;
padding: 20px;
}


`;
