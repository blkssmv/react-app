const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"



let initialState = {
    postsData: [
        {id: 1, message: "Hello, whats up?", likes: 20},
        {id: 2, message: "It's my birthday today", likes: 30},
    ],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, text: text }
)
export default profileReducer