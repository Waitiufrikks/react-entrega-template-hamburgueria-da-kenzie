import styled from "styled-components";

export const StyledFieldSearch = styled.form`

width: 100%;
max-width: 420px;
height: 60px;

border: 2px solid var(--color-grey-20);
border-radius: var( --border-radius-default);

background: #FFFFFF;

display: flex;
align-items: center;
justify-content: space-between;
padding: 0 0.5rem 0 0.5rem;



 input{
  width: 	50%;
  height: 96%;
  padding-left: 0.5rem;
  
  border: none;
  border-radius: var( --border-radius-default);

  font-size: var(--text-size-default);

}
 input::placeholder{
  color: var(--color-grey-20);
}

 input:focus {
  outline: none;
}

.button--search{
  width: 107px;
  height: 40px;

  border: none;
  border-radius: var( --border-radius-default);
  
  color: var(--color-grey-0);
  font-size: var(--text-size-small);

  background: var(--color-primary);

}
`