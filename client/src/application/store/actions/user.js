export const SET_USER_ROLE = 'SET_USER_ROLE';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_SETLOGGEDINUSER_DETAILS = 'SET_SETLOGGEDINUSER_DETAILS';
export const SET_PACKAGE_PLAN = 'SET_PACKAGE_PLAN'


export const setUserRole = userRole => ({
    type: SET_USER_ROLE,
    payload: userRole,
});


export const setLoggedInUserDetails = userDetails => ({
    type: SET_SETLOGGEDINUSER_DETAILS,
    payload: userDetails,
});

export const setPackagePlan = status => ({
    type: SET_PACKAGE_PLAN,
    payload: status
})