import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ListCard } from "./components/CartList";
import { FieldSearch } from "./components/FieldSearch";
import { ProductList } from "./components/ProductList";
import { api } from "./service/api";

import "./styles/globalReset.js";
import "./styles/globalStyles.js";
import "react-toastify/dist/ReactToastify.min.css";
import { StyleApp } from "./style.js";

function App() {
  const localCart = localStorage.getItem("@KenzieMarket:Cart");
  const [productsList, setProductsList] = useState([]);
  const [cartProductsList, setCartProductsList] = useState(
    localCart ? JSON.parse(localCart) : []
  );
  const [search, setSearch] = useState("");

  const searchProductList = productsList.filter((product) => {
    return search === ""
      ? true
      : product.name.includes(search) 
  });

  const test = searchProductList.length == 0 ? productsList.filter((product) => {
    return  product.category.includes(search) 
  }) : searchProductList

  useEffect(() => {
    async function readProducts() {
      try {
        const response = await api.get(`products/`);
        setProductsList(response.data);
      } catch (error) {
        toast.error("Algo deu errado");
      }
    }
    readProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "@KenzieMarket:Cart",
      JSON.stringify(cartProductsList)
    );
  }, [cartProductsList]);

  return (
    <div className="App">
      <StyleApp />
      <header className="container--header">
        <img src="../src/assets/Mask Group.svg" alt="Burger Kenzie" />

        <FieldSearch setSearch={setSearch} />
      </header>
      {search && <span> Resultados para:{search}</span>}
      <main className="container">
        <ProductList
          searchProductList={test}
          setCartProductsList={setCartProductsList}
          cartProductsList={cartProductsList}
        />

        <div className="container--cart">
          <div className="div--title--cart">
            <h2>Carrinho de compras</h2>
          </div>
          <ListCard
            cartItems={cartProductsList}
            productsCart={cartProductsList}
            setCartProductsList={setCartProductsList}
          />
        </div>
      </main>
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
