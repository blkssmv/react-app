const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        case SEND_MESSAGE:
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 4, message: newMessage}]
            }
        default:
            return state
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})

export default dialogsReducer