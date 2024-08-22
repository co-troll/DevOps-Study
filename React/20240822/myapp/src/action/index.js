import axios from 'axios';

export const getUserAction = () => {
    return async (dispatch, getState) => {
        const { data } = await axios.get("http://localhost:4000");
        dispatch({ type: data, payload: data });
    }
}