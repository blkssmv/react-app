import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";




const MyPosts = (props) => {
  let postElements = props.postsData.map((post, index) => {
    return <Post key={index} message={post.message} likes={post.likes} />;
  });

  let newPostElement = React.createRef();
  let addPost = () =>{
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action)
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
