const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

let initialState = {
    Posts: [
        {id: 1, message: 'first', like: '15'},
        {id: 2, message: 'second', like: '20'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'foo'},
    ],
    NewPostText: 'it-kamasutra'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            let message = state.NewPostText;
            return {
                ...state,
                NewPostText: '',
                Posts: [...state.Posts, {id: '5',message, like: '0' }]
            }
        }
        case 'CHANGE-POST': {
            return {
                ...state,
                NewPostText: action.postMessage
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changePostActionCreator = (text) => ({type: CHANGE_POST, postMessage: text})

export default profileReducer;