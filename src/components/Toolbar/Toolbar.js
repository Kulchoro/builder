import classes from "./Toolbar.module.css";
import Navigation from "../Navigation/Navigation";

const Toolbar = () => {
    return ( <div className={classes.Toolbar}>
        <Navigation />
    </div> );
}
 
export default Toolbar;