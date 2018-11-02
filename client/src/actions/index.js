import axios from 'axios'
import { FETCH_USER } from './type'

//refactor: remove the {}and the return since we only return one single expression
//refactor: rewrite function as arrow function
export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};

export const handleToken = (token) => async (dispatch) => {
    const res = await axios.post('/api/stripe', token);
    dispatch({type: FETCH_USER, payload: res.data});
};

export const handleOnDrop = (files) => async (dispatch) => {
    // const res = await axios.post('/api/stripe', token);
    // dispatch({type: FETCH_USER, payload: res.data});

    console.log(files);
};
