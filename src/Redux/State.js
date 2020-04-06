let state = {
    ProfilePage: {
        Posts: [
            {id: 1, message: 'first', like: '15'},
            {id: 2, message: 'second', like: '20'},
            {id: 3, message: 'Hello'},
            {id: 4, message: 'foo'},
        ]
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
        ]
    },
    Friends: {
        FriendData: [
            {name: "Sasha", imgUrl: "https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg"},
            {name: "Andrey", imgUrl: "https://i.pinimg.com/originals/ed/09/16/ed0916a8c0d1d29b4fb90d02af33bc09.png"},
            {name: "Sveta", imgUrl: "https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png"}
        ]
    }
}

export default state