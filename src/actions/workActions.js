import axios from 'axios';
import {
    GET_REPOSITORIES,
    GET_IMAGES
} from './types';

export const getRepositories = () => dispatch => {
    axios.get(`https://api.github.com/users/kaushiks90/repos?per_page=100&sort=created: asc&client_id=21cb096363eae184e834&client_secret=3aba4cad9780fb21a3b7387550241dd3676081bb`)
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