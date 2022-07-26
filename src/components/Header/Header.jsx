import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.header_logo}>
                <img src="https://i.pinimg.com/originals/ce/b8/63/ceb8632252376a23be9f689901b9e3d3.png" alt='logo'/>
            </div>
            <div className={classes.auth}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>
                    Login
                </NavLink>}
            </div>
        </header>
    );
};
export default Header;
