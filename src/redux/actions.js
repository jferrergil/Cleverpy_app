import * as types from './actionType';
import axios from 'axios';


const getPosts = ( posts ) => ({
    type: types.GET_POSTS,
    payload: posts,
})



export const loadPosts =  () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((resp) =>{
            console.log('resp:', resp);
            dispatch(getPosts(resp.data))
        })
        .catch((error) => console.log(error));
    } 
}

export const deletePost = (id) =>( {
    
        type: types.DELETE_POST,
        payload: id
    })

