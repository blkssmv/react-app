import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
            })
    }


    goToPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
            })
    }


    render() {


        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                               pageSize={this.props.pageSize}
                                                               currentPage={this.props.currentPage}
                                                               users={this.props.users}
                                                               goToPage={this.goToPage}
                                                               goOnePageBack={this.goOnePageBack}
                                                               goOnePageForward={this.goOnePageForward}
                                                               onPageChanged={this.onPageChanged}
                                                               follow={this.props.follow}
                                                               unfollow={this.props.unfollow}
                />}

            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)