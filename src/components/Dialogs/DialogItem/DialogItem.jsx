import classes from "./DialogItem.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
   return (
     <div className={classes.dialog + " " + classes.active}>
       <NavLink to={"/dialogs/" + props.id} className={({isActive}) => isActive ? classes.activeLink : classes.dialog}>{props.name}</NavLink>
     </div>
   );
 };
 export default DialogItem