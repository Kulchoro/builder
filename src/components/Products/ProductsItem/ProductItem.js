import classes from "./ProductItem.module.css";

const ProductItem = ({products}) => {
    let productsItem = products.map(product => {
        return <div className={classes.ProductItem}> 
        <div>{product.productName}</div>
        <div>{product.description}</div>
        <div>{product.price} cent</div>
        </div>

    })
    return ( <div className={classes.ProductItems}>
        {productsItem}
    </div> );
}
 
export default ProductItem;