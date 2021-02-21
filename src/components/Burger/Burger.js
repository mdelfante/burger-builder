import classes from './Burger.module.css';
import burgerIngredient from './BurgerIngredient/BurgerIngredient';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let burgerIngredients = Object.keys(props.ingredients)
        .map((ingredientKey) => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (!burgerIngredients.length) {
        burgerIngredients = <p>Please start adding ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;