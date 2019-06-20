import axios from 'axios';
import {
    GET_REPOSITORIES,
    GET_IMAGES
} from './types';

import {
    client_id as _client_id,
    client_secret as _client_secret
} from "../config/config"

export const getRepositories = () => dispatch => {
    axios.get(`https://api.github.com/users/kaushiks90/repos?per_page=100&sort=created:asc&client_id={_client_id}&client_secret={_client_secret}`)
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