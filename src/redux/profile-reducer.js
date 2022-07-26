const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"


let initialState = {
    postsData: [
        {id: 1, message: "Hello, whats up?", likes: 20},
        {id: 2, message: "It's my birthday today", likes: 30},
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, text: text}
)
export default profileReducer