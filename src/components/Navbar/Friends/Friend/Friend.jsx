import classes from "./Friend.module.css"

const Friend = (props) => {
  return (
    <div className={classes.friend}>
      <div className={classes.friendAvatar}>
        <img
          src={props.avatar}
          alt=""
        />
      </div>
      <div className={classes.friendInfo}>
         {props.name}
      </div>
    </div>
  );
};
export default Friend