
import classes from "./Products.module.css";
import ProductItem from "./ProductsItem/ProductItem";

const Products = () => {
    const products =[
        {productName: "Example1", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", price: 999},
        {productName: "Example2", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", price: 888},
        {productName: "Example3", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", price: 777},
        {productName: "Example4", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", price: 666}
    ]
    return ( <div className={classes.Products}>
        <ProductItem products={products} />
    </div> );
}
 
export default Products;