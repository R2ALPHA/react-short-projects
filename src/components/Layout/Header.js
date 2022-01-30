import { Fragment } from "react";
import mealsImages from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImages} alt="A table full of delicious food"></img>
        </div>
    </Fragment>
}

export default Header;