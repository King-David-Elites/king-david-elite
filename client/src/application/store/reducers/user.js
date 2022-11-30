import * as userActions from '../actions/user'

const initialState = {
    userId: JSON.parse(localStorage.getItem('user'))?._id ?? '',
    email: JSON.parse(localStorage.getItem('user'))?.email ?? '',
    firstName: JSON.parse(localStorage.getItem('user'))?.firstName ?? '',
    lastName: JSON.parse(localStorage.getItem('user'))?.lastName ?? '',
    isAdmin: JSON.parse(localStorage.getItem('user'))?.isAdmin ?? false,
    profilePicture: JSON.parse(localStorage.getItem('user'))?.profilePicture ?? null,
    createdAt: JSON.parse(localStorage.getItem('user'))?.createdAt ?? ' '
}

export default  (state = initialState, action) => {
    switch (action.type) {
        case (userActions.SET_USER_ROLE):
            return { ...state, userRole: action.payload };
        case (userActions.SET_SETLOGGEDINUSER_DETAILS):
            return {
                ...state,
                userRoles: action.payload.isAdmin,
                userId: action.payload._id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                profilePicture: action.payload.profilePicture,
                createdAt: action.payload.createdAt
            };
        default:
            return state;
    }
}