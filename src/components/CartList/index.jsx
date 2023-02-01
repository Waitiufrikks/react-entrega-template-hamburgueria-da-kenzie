import { CardCart } from "./CardCartList";
import { StyledCartList } from "./style";
import { EmptyCart } from "./CartEmpty";
import { CartValue } from "./CartValue";

export function ListCard({ cartItems, productsCart, setCartProductsList }) {
  return (
    <>
      {productsCart.length > 0 ? (
        <>
        <StyledCartList>
          {cartItems.map((cartItem) => (
            <CardCart
              key={cartItem.id}
              name={cartItem.name}
              category={cartItem.category}
              img={cartItem.img}
              id={cartItem.id}
              productsCart={productsCart}
              setCartProductsList={setCartProductsList}
            />
          ))}

          
        </StyledCartList>
        <CartValue
        setCartProductsList={setCartProductsList}
        productsCart={productsCart}
      />
      </>
      ) : (
          <EmptyCart/>
      )}
    </>
  );
}
