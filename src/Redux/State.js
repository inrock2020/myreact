// let stateRerender = () => {}
//
// let state = {
//     ProfilePage: {
//         Posts: [
//             {id: 1, message: 'first', like: '15'},
//             {id: 2, message: 'second', like: '20'},
//             {id: 3, message: 'Hello'},
//             {id: 4, message: 'foo'},
//         ],
//         NewPostText: 'it-kamasutra'
//     },
//
//     DialogsPage: {
//         Dialogs: [
//             {id: 1, name: 'Dima', imgUrl: "https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg"},
//             {id: 2, name: 'Sveta', imgUrl: "https://i.pinimg.com/originals/ed/09/16/ed0916a8c0d1d29b4fb90d02af33bc09.png"},
//             {id: 3, name: 'Sasha', imgUrl: "https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png"},
//             {id: 4, name: 'Valera', imgUrl: "https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg"},
//             {id: 5, name: 'Oleg', imgUrl: "https://i.pinimg.com/originals/ed/09/16/ed0916a8c0d1d29b4fb90d02af33bc09.png"},
//             {id: 6, name: 'Igor', imgUrl: "https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png"}
//         ],
//         Messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How are you'},
//             {id: 3, message: 'Hello'},
//             {id: 4, message: 'foo'},
//         ],
//         NewMessageText: 'state Message'
//     },
//     Friends: {
//         FriendData: [
//             {name: "Sasha", imgUrl: "https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg"},
//             {name: "Andrey", imgUrl: "https://i.pinimg.com/originals/ed/09/16/ed0916a8c0d1d29b4fb90d02af33bc09.png"},
//             {name: "Sveta", imgUrl: "https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png"}
//         ]
//     }
// }
//
// export let addPost = () => {
//     let newPost = {
//         id: '5',
//         message: state.ProfilePage.NewPostText,
//         like: '0'
//     };
//     state.ProfilePage.Posts.push(newPost);
//     state.ProfilePage.NewPostText = ''
//     stateRerender(state);
// }
//
// export let changePost = (postMessage) => {
//     state.ProfilePage.NewPostText = postMessage;
//     stateRerender(state)
// }
//
// export let addMessage = () => {
//     let newMessage = {
//         id: '5',
//         message: state.DialogsPage.NewMessageText
//     };
//     state.DialogsPage.Messages.push(newMessage);
//     state.DialogsPage.NewMessageText = ''
//     stateRerender(state);
// }
//
// export let updateMessage = (postMessage) => {
//     state.DialogsPage.NewMessageText = postMessage;
//     stateRerender(state)
// }
//
// export const subscribe = (observer) => {
//     stateRerender = observer;
// }
//
// export default state;

export let store = {
    _stateRerender() {
        // console.log('no subscribers (observers)')
    },
    _state: {
        ProfilePage: {
            Posts: [
                {id: 1, message: 'first', like: '15'},
                {id: 2, message: 'second', like: '20'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'foo'},
            ],
            NewPostText: 'it-kamasutra'
        },

        DialogsPage: {
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
        },
        Friends: {
            FriendData: [
                {name: "Sasha", imgUrl: "https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg"},
                {name: "Andrey", imgUrl: "https://i.pinimg.com/originals/ed/09/16/ed0916a8c0d1d29b4fb90d02af33bc09.png"},
                {name: "Sveta", imgUrl: "https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png"}
            ]
        }
    },
    addPost() {
        let newPost = {
            id: '5',
            message: this._state.ProfilePage.NewPostText,
            like: '0'
        };
        this._state.ProfilePage.Posts.push(newPost);
        this._state.ProfilePage.NewPostText = '';
        this._stateRerender(this._state);
    },
    changePost(postMessage) {
        this._state.ProfilePage.NewPostText = postMessage;
        this._stateRerender(this._state)
    },
    addMessage() {
        let newMessage = {
            id: '5',
            message: this._state.DialogsPage.NewMessageText
        };
        this._state.DialogsPage.Messages.push(newMessage);
        this._state.DialogsPage.NewMessageText = '';
        this._stateRerender(this._state);
    },
    updateMessage(postMessage) {
        this._state.DialogsPage.NewMessageText = postMessage;
        this._stateRerender(this._state)
    },
    subscribe(observer) {
        this._stateRerender = observer;
    },
    setState(value) {
        this._state = value;
    },
    getState() {
        return this._state;
    }
}
