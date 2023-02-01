import { StyledCartTotalValue } from "./style"
export function EmptyCart(){
  return(
  <StyledCartTotalValue>
    <h2>nenhum item no carrinho</h2>
    <span>Adicione itens</span>
  </StyledCartTotalValue>
  )
}