import { StyledEmptyCart } from "./style";

export function CartValue({ productsCart, setCartProductsList }) {
  const itemsPrices = productsCart.map((product) => {
    return product.price;
  });

  const somePrice = itemsPrices.reduce((valueOld, valueNew) => {
    return valueOld + valueNew;
  }, 0);

  return (
    <StyledEmptyCart>
      <div className="total--value">
        <span>Total</span>
        <span>{somePrice.toFixed(2)}</span>
      </div>
      <button
        onClick={() => {
          setCartProductsList([]);
        }}
        className="button--remove--all"
        type="button"
      >
        Remover
      </button>
    </StyledEmptyCart>
  );
}
