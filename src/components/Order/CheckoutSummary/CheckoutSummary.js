import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good!</h1>
            <div style={{
                width: '100%',
                margin: 'auto',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
                clicked={props.checkoutCancelled}
                buttonType="Danger">CANCEL</Button>
            <Button 
                clicked={props.checkoutContinued}
                buttonType="Success">CONTINUE</Button>
        </div>
    );
};

export default checkoutSummary;