import classes from "./Logo.module.css";
import logo from "../../images/logotip.png"
const Logo = () => {
    return ( <div className={classes.Logo}>
        <img src={logo} alt="internet-shop logo" />
        <div>Onine Shop</div>
    </div> );
}
 
export default Logo;