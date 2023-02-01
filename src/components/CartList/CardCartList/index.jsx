
import { toast } from "react-toastify";
import { StyledCardCartList } from "./style";


export function CardCart({
  name,
  category,
  img,
  id,
  setCartProductsList,
  productsCart,
}) {
  function removeItem(idItem) {
    const itemSelect = productsCart.filter((product) => product.id !== idItem);

    setCartProductsList(itemSelect);

    toast.success("Item removido do carrinho");
  }

  return (
    <StyledCardCartList key={id}>
      <div className="content--item--cart">
        <div className="container--img--item">
          <img src={img} alt={name} />
        </div>

        <div className="info--item">
          <h2>{name}</h2>
          <span>{category}</span>
        </div>

        <button
          onClick={() => removeItem(id)}
          id={id}
          className="button--remove--item"
        >
          Remover
        </button>
      </div>
    </StyledCardCartList>
  );
}
