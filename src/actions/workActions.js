import axios from 'axios';
import {
    GET_REPOSITORIES,
    GET_IMAGES
} from './types';

export const getRepositories = () => dispatch => {
    axios.get(`https://api.github.com/users/kaushiks90/repos?per_page=100&sort=created: asc&client_id=21cb096363eae184e834&client_secret=fe5e9b3b7ced3e0efc2d5eb1d11fceb45f5b2b83`)
        .then(
            res =>
            dispatch({
                type: GET_REPOSITORIES,
                payload: res
            })
        ).catch(err =>
            console.log(err)
        )
}

export const getImages = () => dispatch => {
    let url = []
    for (let i = 50; i < 130; i++) {
        axios.get(`http://www.splashbase.co/api/v1/images/${i}`)
            .then((result) => {
                url.push(result.data.url)
            })
            .catch((err) => console.log(err));
    }

    const action = {
        type: GET_IMAGES,
        payload: url
    }
    dispatch(action)

}