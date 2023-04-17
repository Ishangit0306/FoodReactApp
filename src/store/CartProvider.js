import CartContext from "./cart-context";

const CartProvider=(props)=>{
   const additemHandler=(item)=>{};
   const  removeitemHandler=(id)=>{};
    const cartContext={
        items:[],
        totalAmount:0,
        addItem:additemHandler,
        reduceItem: removeitemHandler
    }
return<CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
};
export default CartProvider;