import classes from "./Toolbar.module.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import OpenDrawer from "../Drawer/OpenDrawer/OpenDrawer";

const Toolbar = ({ openDrawer }) => {
    return (
      <div className={classes.Toolbar}>
        <Logo />
        <nav>
        <Navigation />
        </nav>
        <OpenDrawer click={openDrawer} />
      </div>
    );
  }
   
  export default Toolbar;