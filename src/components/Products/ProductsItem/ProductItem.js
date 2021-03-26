import ProductControls from "../ProductControls/ProductControls";
import classes from "./ProductItem.module.css";

const ProductItem = ({products}) => {
    let productsItem = products.map(product => {
        return <div className={classes.ProductItems}> 
        <div>{product.productName}</div>
        <div>{product.description}</div>
        <div>{product.price} cent</div>
        <ProductControls />
        </div>

    })
    return ( <div className={classes.ProductItem}>
        {productsItem}
    </div> );
}
 
export default ProductItem;