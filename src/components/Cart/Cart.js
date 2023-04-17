import Modal from "../UI/Modal";
import classes from './Cart.module.css';
const Cart = (props) => {
  const cartitem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 },].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onclose={props.onClose}>
      {cartitem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.23</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose} >Close</button>
        <button className={classes.button}> order</button>
      </div>
    </Modal>
  );
};
export default Cart;
