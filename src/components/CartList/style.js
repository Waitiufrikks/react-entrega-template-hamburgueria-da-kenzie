import styled from "styled-components";

export const StyledCartList = styled.ul`
  display:flex;
  flex-direction:column;
  gap:20px;
  padding:1rem;

  @media (min-width: 768px){
    max-height: 500px;
    overflow-y: auto;
  }
`