import classes from "./Users.module.css";
import userPhoto from "../../assets/images/users-vector-icon-png_260862.jpeg";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)


    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curPage = props.currentPage
    let curPageF = ((curPage - 5) < 0) ? 0 : curPage - 5;
    let curPageL = curPage + 4;
    let slicedPages = pages.slice(curPageF, curPageL);

    return (
        <div className={classes.users}>
            <div className={classes.title}>
                Users
            </div>
            <div className={classes.pageNumbers}>
                <span className={classes.goFirstPage} onClick={() => props.goToPage(pages[0])}>&lt;&lt;</span>
                {slicedPages.map((p, index) => (
                    <span onClick={() => props.onPageChanged(p)} key={index}
                          className={props.currentPage === p ? [classes.selectedPage, classes.pageNumber].join(' ') : classes.pageNumber}> {p} </span>
                ))}
                <span className={classes.goLastPage}
                      onClick={() => props.goToPage(pages[pages.length - 1])}>&gt;&gt;</span>
            </div>
            {
                props.users.map(u =>
                    <div key={u.id} className={classes.user}>
                        <div className={classes.avatar}>
                            <div>
                                <NavLink to={`/profile/` + u.id}>
                                    <img src={u.photos.small != null || undefined ? u.photos.small : userPhoto} alt=""
                                         className={classes.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ? <button className={classes.unfollow} onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "3c4813c9-0a0b-4495-826b-3e6a66feecf2"
                                            }
                                        }
                                    ).then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })


                                }}>Unfollow</button> : <button className={classes.follow} onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "3c4813c9-0a0b-4495-826b-3e6a66feecf2"
                                        }
                                    })
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })


                                }}>Follow</button>}
                            </div>
                        </div>
                        <div className={classes.information}>
                            <div className={classes.info}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={classes.location}>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users