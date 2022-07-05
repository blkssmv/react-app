import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={classes.profileInfo}>
      <img
        className={classes.profile_walpaper}
        src="https://indepth-wellness.com/wp-content/uploads/2017/01/banner-7-1200-x-400.jpg"
        alt="profile ava"
      />
      <div className={classes.description}>Ava + description</div>
    </div>
  );
};
export default ProfileInfo;
