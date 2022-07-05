import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.itemInfo}>
                <img className={classes.itemInfoAva} src="https://i.ytimg.com/vi/cX_cZ0kGAKo/maxresdefault.jpg" alt=""/>
                <div className={classes.postText}>
                    {props.message}
                </div>
            </div>
            <div className={classes.likesCount}>
                <span>Likes: {props.likes}</span>
                <img src="./images/thumb-up.svg" alt=""/>
            </div>
        </div>
    );
};
export default Post;
