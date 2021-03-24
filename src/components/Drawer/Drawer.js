import Logo from "../Logo/Logo";
import BackDrop from "../UI/BackDrop/BackDrop"
import Navigation from "../Navigation/Navigation";
import classes from "./Drawer.module.css";

const Drawer = ({open, setOpen}) => {
    const drawerClasses = [
        classes.content,
        open ? classes.open : classes.close
      ];
    return (
        <div className={classes.Drawer}>
          <BackDrop show={open} click={setOpen} />
          <div className={drawerClasses.join(" ")}>
            <Logo />
            <Navigation />
          </div>
        </div>
      );
    }

 
export default Drawer;