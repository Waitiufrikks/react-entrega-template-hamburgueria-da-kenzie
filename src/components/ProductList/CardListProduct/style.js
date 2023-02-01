import styled from "styled-components";

export const StyledCardListProduct = styled.li`


  min-width: 250px;
  height: 345px;
  border: 2px solid var(--color-grey-20);
  border-radius: var(--border-radius-default);


.content--item{
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;

}
.container--img--item{
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: var(--color-grey-0);
}
.container--img--item > img {
  height: 100%;
}
.content--info{
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 21px;

}
.info--item{
  display: flex;
  flex-direction: column;
  gap: 21px;
}

.button--add{
  width: 100px;
  height: 40px;

  color: var(--color-grey-0);
  font-size: var(--text-size-default);
  font-weight: bold;

  border: none;
  border-radius: var(--border-radius-default);

  background-color: var(--color-primary);
}
`