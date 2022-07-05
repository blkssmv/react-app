import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hello, whats up?", likes: 20},
                {id: 2, message: "It's my birthday today", likes: 30},
            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Asik"},
                {id: 2, name: "Beka"},
                {id: 3, name: "Azik"},
                {id: 4, name: "Baur"},
            ],
            messagesData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Hi"},
                {id: 3, message: "Fuck you"},
                {id: 4, message: "Bitch"},
            ],
            newMessageText: ''
        },
        navBar: {
            friends: [
                {
                    id: 1,
                    name: "Asik",
                    avatar:
                        "https://w7.pngwing.com/pngs/236/25/png-transparent-computer-icons-avatar-friends-love-text-logo.png",
                },
                {
                    id: 2,
                    name: "Beka",
                    avatar:
                        "https://w7.pngwing.com/pngs/236/25/png-transparent-computer-icons-avatar-friends-love-text-logo.png",
                },
                {
                    id: 3,
                    name: "Azik",
                    avatar:
                        "https://w7.pngwing.com/pngs/236/25/png-transparent-computer-icons-avatar-friends-love-text-logo.png",
                },
                {
                    id: 4,
                    name: "Baur",
                    avatar:
                        "https://w7.pngwing.com/pngs/236/25/png-transparent-computer-icons-avatar-friends-love-text-logo.png",
                },
            ],
        },
    },


    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._state.navBar = navbarReducer(this._state.navBar, action)

        this._callSubscriber(this._state)

    }
}



window.store = store;

export default store