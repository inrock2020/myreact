const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

const profileReducer = (state, action) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: '5',
                message: state.NewPostText,
                like: '0'
            };
            state.Posts.push(newPost);
            state.NewPostText = '';
            return state;
        case 'CHANGE-POST':
            state.NewPostText = action.postMessage;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changePostActionCreator = (text) => ({type: CHANGE_POST, postMessage: text})

export default profileReducer;