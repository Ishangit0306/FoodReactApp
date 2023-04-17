import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
   const [cartHandler,setCartHandler]=useState(false);
   const showcart=()=>{
    setCartHandler(true);
   }
   const hidecart=()=>{
    setCartHandler(false);
   }
  return (
  <CartProvider>
    {cartHandler &&<Cart onClose={hidecart} />}
    <Header onShowCart={showcart}/>
    <main>
      <Meals />
    </main>
    </CartProvider>
  );
}

export default App;
