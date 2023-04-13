import classes from './Cart.module.css'
const Cart=()=>{
    return(
        <div>
            
           <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.23</span>
           </div>
           <div className={classes.action}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}> order</button>
            </div> 
        </div>
    );
}
export default Cart