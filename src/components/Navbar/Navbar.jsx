import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className={({isActive}) => isActive ? classes.activeLink : " "}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs"
                         className={({isActive}) => isActive ? classes.activeLink : " "}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/feed" className={({isActive}) => isActive ? classes.activeLink : " "}>Feed</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={({isActive}) => isActive ? classes.activeLink : " "}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings"
                         className={({isActive}) => isActive ? classes.activeLink : " "}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/friends" className={({isActive}) => isActive ? classes.activeLink : " "}>Friends</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
