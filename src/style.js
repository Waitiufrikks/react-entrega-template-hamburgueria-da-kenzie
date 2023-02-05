import { createGlobalStyle } from "styled-components"
export const StyleApp = createGlobalStyle`

.container--header {
  width: 100%;
  height: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  padding: 2rem 1rem 1rem 1rem;

  background: var(--color-grey-0);
}
.result--search{
    padding: 0rem 2rem 2rem 0;
    font-size:var(--title-size-1);
    font-weight:600;
      span{
        color:var(--color-grey-20);
      }
  }
.container {
  flex-direction: column;
  height: 100%;
  padding: 2rem 1rem 0 1rem;
}
.container--cart {
  max-width: 768px;
  min-height:225px;
  
  
}
.div--title--cart{
 
  height: 65px;

  display: flex;
  justify-content: start;
  align-items: center;

  font-size: var(--font-size--default);
  color: var(--color-grey-0);
  
  border-top-right-radius: var(--border-radius-default);
  border-top-left-radius: var(--border-radius-default);
  background: var(--color-primary);
  
  h2 {
    padding-left: 1rem;
  }
}
@media(min-width: 768px){
  .container--header{
    flex-direction:row;
    padding:0 90px 0 90px;
  }
 
   
  .container{
   
    display:flex;
    justify-content:center;
    max-width:1440px;
    margin: 0 auto;
    
  }
  .container--cart{
    width:40%;
    max-height: 500px;
    position:sticky;
    top:10px;
    
  }
  .content--container{
    width:100%;
    display:flex;
    justify-content:space-between;
  }
}

`