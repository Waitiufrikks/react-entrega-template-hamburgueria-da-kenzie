import { Cards } from "./CardListProduct";
import { StyledListProduct } from "./style.js";
export function ProductList({
  searchProductList,
  setCartProductsList,
  cartProductsList,
}) {
  console.log(searchProductList)
  return (
    <StyledListProduct>
      {searchProductList.map((product) => (
        <Cards
          key={product.id}
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          img={product.img}
          setCartProductsList={setCartProductsList}
          cartProductsList={cartProductsList}
        />
      ))}
    </StyledListProduct>
  );
}
