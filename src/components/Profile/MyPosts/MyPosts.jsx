import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";




const MyPosts = (props) => {
  let postElements = props.posts.map(post => {
    return <Post key={post.id} message={post.message} likes={post.likes} />;
  });

  let newPostElement = React.createRef();
  let addPost = () =>{
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }



  return (
    <div className={classes.myPosts}>
      <div className={classes.newPost}>
        <div className={classes.postAdd}>
          <textarea onChange={onPostChange} placeholder="What's new?" ref={newPostElement} value={props.newPostText}/>
        </div>
        <div className={classes.postAddBtn}>
          <button className={classes.addBtn} onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <div className={classes.postsTitle}>My Posts</div>
        {postElements}
      </div>
    </div>
  );
};
export default MyPosts;
