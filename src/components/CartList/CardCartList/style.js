import styled from "styled-components";

export const StyledCardCartList = styled.li`
    width:100%;
    height:80px;
    background:var(--color-grey-0);

  .content--item--cart{
    width:100%;
    height:100%;
    display:flex;
    position:relative;
    
  }
  .container--img--item{
    
    height:100%;
    background:var(--color-grey-20);
    border-radius:var(--border-radius-default);
    
    img{   
      height:100%;
    }
  }
  .info--item{
    h2{
      text-overflow: ellipsis
    }
    display:flex;
    flex-direction:column;
    justify-content:space-around;

    padding-left:10px;
    
  }
  .button--remove--item{
    position:absolute;
    top:10px;
    right:25px;
    width:51px;
    height:15px;
    
    border:none;
    
    background:none;

    color:var(--color-grey-50);
  }
  `