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

.container {
  
  height: 100%;
  padding: 2rem 1rem 0 1rem;
}
.container--cart {
  width: 100%;
  min-height:225px;
  background:var(--color-grey-0)
  
}
.div--title--cart{
 
  height: 65px;
  width: 100%;

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

`