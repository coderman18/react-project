import axios from 'axios';
import React from 'react'
import styles from './Users.module.css';

import userPhoto from '../../assets/img/users_photo/man.png';



let Users = (props) => {
    if (props.users.length === 0) {
        // делаем запрос на сервер
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            props.setUsers(response.data.items);
        });

        props.setUsers(
            [
                // {
                //     id: 1, 
                //     followed: true, 
                //     fullName: 'Pavel P.', 
                //     status: 'React Developer', 
                //     location: {city: 'Kaliningrad'},
                //     photoUrl: 'https://media.2x2tv.ru/content/images/2022/05/ssssss.jpg', 
                // },
                // {
                //     id: 2, 
                //     followed: false, 
                //     fullName: 'Egor V.', 
                //     status: 'Frontend Developer', 
                //     location: {city: 'Tokio'},
         
                // },
                // {
                //     id: 3, 
                //     followed: true, 
                //     fullName: 'Sveta N.', 
                //     status: 'Designer', 
                //     location: {city: 'Moscow'} 
                // },
                // {
                //     id: 4, 
                //     followed: false, 
                //     fullName: 'Peter D.', 
                //     status: 'Backend Developer', 
                //     location: {city: 'Minsk'} 
                // },
                // {
                //     id: 5, 
                //     followed: true, 
                //     fullName: 'Helene S.', 
                //     status: 'HR Manager', 
                //     location: {city: 'Kazan'} 
                // }
            ]
        )
    }
    
    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div className={styles.avatar}>
                            <img src={u.photos != null ? u.photos : userPhoto} />
                        </div>
                        <div>
                            {u.followed 
                            ? <button onClick={() => { props.unfollow(u.id)} }>Unfollow</button> 
                            : <button onClick={() => { props.follow(u.id)} }>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.state}</div>
                            </div>
                        </span>
                        <span>
                            <div>{}</div>
                            <div>{}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;