import { toast } from 'react-toastify';
import {StyledCardListProduct} from './style'

export function Cards({
  id,
  name,
  category,
  price,
  img,
  cartProductsList,
  setCartProductsList,
}) {
  function handleSubmit(event) {
    const test = cartProductsList.some((element)=>{
        if(element.id == id){
          toast.warning('AVISO: Por enquanto so pode 1 item de cada',{limit: 1})
          return element
        }
    })
    
    if (!test) {
      const itemCart = {
        name: name,
        category: category,
        price: Number(price),
        img: img,
        id: id,
      };
      const selectItem = [...cartProductsList, itemCart];
      setCartProductsList(selectItem);
    }
  }

  return (
    <StyledCardListProduct>
      <div className="content--item">
        <div className="container--img--item">
          <img src={img} alt={name} />
        </div>
        <div className="content--info">
          <div className="info--item">
            <h2>{name}</h2>
            <span>{category}</span>
            <span>R$ {price.toFixed(2)}</span>
          </div>
          <button
            onClick={handleSubmit}
            id={id}
            type="submit"
            className="button--add"
          >
            Adicionar
          </button>
        </div>
      </div>
    </StyledCardListProduct>
  );
}
