import Drawer from "../Drawer/Drawer";
import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";
import {useState} from "react";
const Layout = ({children}) => {
    const [openDrawer, setDrawerOpen]=useState(false);
    return ( <div className={classes.Layout}>
        <Drawer open={openDrawer} setOpen={()=>setDrawerOpen(false)} />
        <Toolbar  openDrawer={() => setDrawerOpen(true)} />
        {children}
    </div>);
}
 
export default Layout;