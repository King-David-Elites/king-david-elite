import * as userActions from '../actions/user'


const initialState = {
    userId: JSON.parse(localStorage.getItem('userDetails'))?.userId ?? null,
    email: JSON.parse(localStorage.getItem('userDetails'))?.email ?? '',
    userFirstName: JSON.parse(localStorage.getItem('userDetails'))?.firstName ?? '',
    userSurname: JSON.parse(localStorage.getItem('userDetails'))?.surname ?? '',
    userRoles: JSON.parse(localStorage.getItem('userDetails'))?.userRoles ?? []
}

export default  (state = initialState, action) => {
    switch (action.type) {
        case (userActions.SET_USER_ROLE):
            return { ...state, userRole: action.payload };
        case (userActions.SET_SETLOGGEDINUSER_DETAILS):
            return {
                ...state,
                userRoles: action.payload.userRoles,
                userId: action.payload.userId,
                userFirstName: action.payload.firstName,
                userSurname: action.payload.surname,
                email: action.payload.email,
            };
        default:
            return state;
    }
}