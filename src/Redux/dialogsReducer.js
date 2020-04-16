const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
    Dialogs: [
        {id: 1, name: 'Dima', imgUrl: "https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg"},
        {id: 2, name: 'Sveta', imgUrl: "https://i.pinimg.com/originals/ed/09/16/ed0916a8c0d1d29b4fb90d02af33bc09.png"},
        {id: 3, name: 'Sasha', imgUrl: "https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png"},
        {id: 4, name: 'Valera', imgUrl: "https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg"},
        {id: 5, name: 'Oleg', imgUrl: "https://i.pinimg.com/originals/ed/09/16/ed0916a8c0d1d29b4fb90d02af33bc09.png"},
        {id: 6, name: 'Igor', imgUrl: "https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png"}
    ],
    Messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'foo'},
    ],
    NewMessageText: 'state Message'
}

const dialogsReducer = (state = initialState, action) => {

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