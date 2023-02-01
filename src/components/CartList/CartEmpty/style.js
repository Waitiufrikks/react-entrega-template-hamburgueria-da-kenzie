
import styled from "styled-components";

export const StyledCartTotalValue = styled.div`


  width: 100%;
  height: 65%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  padding-top: 50px;
 
  border-radius: var(--border-radius-default);

 h2{
  font-size:var(--title-size-2);
  font-weight: bold;
}
 span{
  color: var(--color-grey-50);
  font-size: var(--text-size-small);
}
`