const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: '5',
                message: state.NewMessageText
            };
            state.Messages.push(newMessage);
            state.NewMessageText = '';
            return state;
        case 'UPDATE-MESSAGE':
            state.NewMessageText = action.postMessage;
            return state;
        default:
            return state;
    }
}

export const newMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const changeMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE, postMessage: text })

export default dialogsReducer;