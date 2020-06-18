import React, { useState } from 'react';

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // what should we do with this message
        props.onNewMessage( msg );
    };


    return (
        <form onSubmit = { handleSubmit }>
            <h1>Set Message</h1>
            <textarea  

            cols="50" 
            rows="4"
            placeholder="Enter your message here"
            onChange= { (e) => setMsg(e.target.value) }
            value= {msg}>
            </textarea>
            <input type="submit" value="Send Message"/>
        </form>
    );
};

export default MessageForm;