import classes from './Header.module.css'
import mealimg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
import { Fragment } from 'react';
   
   const Header=props=>{
   return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/> 
        </header>
        <div className={classes.mainimage} >
            <img src={mealimg} alt='meals'/>
        </div>

    </Fragment> 
};
export default Header