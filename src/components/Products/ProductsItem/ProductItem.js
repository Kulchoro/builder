import classes from "./ProductItem.module.css";

const ProductItem = ({products}) => {
    let productsItem = products.map(product => {
        return <div> 
        <div>{product.productName}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
        </div>

    })
    return ( <div className={classes.ProductItem}>
        {productsItem}
    </div> );
}
 
export default ProductItem;