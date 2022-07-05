import classes from "./Friends.module.css"
import Friend from "./Friend/Friend"

const Friends = (props) => {

   let friendsList = props.friends.map((friend, index) => {
      return <Friend key={index} name={friend.name} avatar={friend.avatar}/>
   })
   return (
      <div className={classes.friends}>
            {friendsList}
      </div>
   )
}
export default Friends