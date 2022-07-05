import classes from "./Header.module.css"

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header_logo}>
                <img src="https://i.pinimg.com/originals/ce/b8/63/ceb8632252376a23be9f689901b9e3d3.png" alt='logo'/>
            </div>
            <div className={classes.search}>
                <input type='text' placeholder='Search'/>
            </div>
        </header>
    );
};
export default Header;
