import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unFollowAC } from '../../redux/users_reducer'
import Users from './Users'

// передаем через пропсы презентационной компоненте данные
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}


// передаем данные от през-й комп-ы через call-back функции
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);