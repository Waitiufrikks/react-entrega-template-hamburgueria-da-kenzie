import styled from "styled-components";

export const StyledListProduct = styled.ul`

  height: 365px;
  
  display: flex;
  flex-direction: row;
  gap: 25px;

  overflow-x: auto;
  @media(min-width:768px){
    
    height:100%;
   
    display:grid;
    grid-template-columns:1fr;
    overflow-x: hidden;
    padding-bottom:50px;
  }
  @media(min-width:930px){
    grid-template-columns:repeat(2,1fr);
  }
  @media(min-width:1440px){
    grid-template-columns:repeat(3,1fr);

  }
`
