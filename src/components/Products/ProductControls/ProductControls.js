import classes from "./ProductControls.module.css";

const ProductControls = () => {
    return ( <div className={classes.ProductControls}>
        <input type="number" />
        <button>+</button>
        <button>-</button>
    </div> );
}
 
export default ProductControls;