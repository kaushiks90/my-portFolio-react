import {
    GET_REPOSITORIES,
    GET_IMAGES
} from '../actions/types';

const initialState = {
    repositories: [],
    projectImages: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REPOSITORIES:
            return {
                ...state,
                repositories: action.payload.data
            }
            case GET_IMAGES:
                return {
                    ...state,
                    projectImages: action.payload
                };
            default:
                return state;
    }
}