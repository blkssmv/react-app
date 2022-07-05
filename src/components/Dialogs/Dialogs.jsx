import classes from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage


    let dialogElements = state.dialogsData.map((dialog, index) => {
        return <DialogItem key={index} name={dialog.name} id={dialog.id}/>;
    });

    let messageElements = state.messagesData.map((msg, index) => {
        return <Message key={index} message={msg.message}/>;
    });

    let newMessageText = state.newMessageText


    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }



    let onNewMessageChange = (e) => {
        let text = e.target.value
        props.store.dispatch(updateNewMessageTextCreator(text))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogElements}</div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div className={classes.myMessage}>
                    <div><textarea onChange={onNewMessageChange} value={newMessageText} placeholder="Enter your message"/></div>
                    <div><button onClick={sendMessage}>Send</button></div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;
