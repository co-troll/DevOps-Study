export const login = (data) => {
    return async (dispatch, getState) => {
        dispatch({ type: "LOGIN", payload: data });
    }
}

export const logout = () => {
    return async (dispatch, getState) => {
        dispatch({ type: "LOGOUT" });
    }
}