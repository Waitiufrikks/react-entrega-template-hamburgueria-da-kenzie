import styled from "styled-components";

export const StyledEmptyCart = styled.div`

  border-top:2px solid var(--color-grey-20);
  margin: 15px;
  padding-bottom: 20px;
  .total--value{
    display:flex;
    justify-content:space-between;

  
    padding:1rem 0;
  }
  .button--remove--all{
    width:100%;
    height: 60px;
    
    background:var(--color-grey-20);

    border:none;
    border-radius:var(--border-radius-default);
    
    font-size:var(--text-size-default);
    font-weight:bold;
    color:var(--color-grey-50);

  }

`