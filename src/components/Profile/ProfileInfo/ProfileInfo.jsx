import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.profileInfo}>
            <img
                className={classes.profile_walpaper}
                src="https://indepth-wellness.com/wp-content/uploads/2017/01/banner-7-1200-x-400.jpg"
                alt="profile ava"
            />
            <div className={classes.description}>
                <div className={classes.photoAva}>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div className={classes.aboutMe}>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    );
};
export default ProfileInfo;
