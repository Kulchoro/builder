import classes from "./Toolbar.module.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Toolbar = () => {
    return ( <div className={classes.Toolbar}>
        <Navigation />
        <Logo />
    </div> );
}
 
export default Toolbar;