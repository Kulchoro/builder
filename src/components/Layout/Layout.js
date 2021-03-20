import Drawer from "./Drawer/Drawer";
import classes from "./Layout.module.css";
import Toolbar from "./Toolbar/Toolbar";

const Layout = ({children}) => {
    return ( <div className={classes.Layout}>
        <Drawer />
        <Toolbar />
        {children}
    </div>);
}
 
export default Layout;