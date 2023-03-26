const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
   
    users: [
        {
            id: 1, 
            followed: true, 
            fullName: 'Pavel P.', 
            status: 'React Developer', 
            location: {city: 'Kaliningrad'},
            photoUrl: 'https://media.2x2tv.ru/content/images/2022/05/ssssss.jpg', 
        },
        {
            id: 2, 
            followed: false, 
            fullName: 'Egor V.', 
            status: 'Frontend Developer', 
            location: {city: 'Tokio'},
 
        },
        {
            id: 3, 
            followed: true, 
            fullName: 'Sveta N.', 
            status: 'Designer', 
            location: {city: 'Moscow'} 
        },
        {
            id: 4, 
            followed: false, 
            fullName: 'Peter D.', 
            status: 'Backend Developer', 
            location: {city: 'Minsk'} 
        },
        {
            id: 5, 
            followed: true, 
            fullName: 'Helene S.', 
            status: 'HR Manager', 
            location: {city: 'Kazan'} 
        },
           
    ],
        newPostText: 'IT-Kamasutra.com'
    }

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
    
        case SET_USERS: {
            // копируем старый массив и добавляем новых users в массив
            return { ...state, users: [...action.users, ...action.users] }
        }
            
        default: 
            return state;
    };
};



// определяем экшн-креэйторы - кнопки 
export const followAC = () => ({type: FOLLOW, userId})
export const unFollowAC = () => ({type: UNFOLLOW, userId})
export const setUsersAC = () => ({type: SET_USERS, users})
export default usersReducer;