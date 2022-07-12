import classes from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogElements = state.dialogsData.map(dialog => {
        return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>;
    });

    let messageElements = state.messagesData.map(msg => {
        return <Message key={msg.id} message={msg.message}/>;
    });

    let newMessageText = state.newMessageText

    let sendMessage = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
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
