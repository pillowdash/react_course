import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import Spinner from '../assets/loading-spinner.gif'
import chatMessage from './ChatMessage.jsx'
import './ChatInput.css'

export default function ChatInput({chatMessages, setChatMessages}) {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function saveInputText(event) {
        // event.target gives us access to the input element we are typing in

        // instead of using the document.querySelector('elem').value, we use this
        setInputText(event.target.value);
    }

    // asynchronous b/c it takes time for the chatbot to respond
    async function sendMessage() {
        if (isLoading || inputText === '') {
            return; // don't send message when its empty or chatbot hasn't responded yet
        }
        setIsLoading(true);

        const newChatMessages = [
            ...chatMessages,
            new chatMessage(inputText, 'user', crypto.randomUUID())
        ]; // the ... is the Spread operator (copies values from other array into this one)

        // send in a copy of the data with our new changes
        setChatMessages([
            ...newChatMessages,
            new chatMessage(<img src={Spinner} className="loading-gif"></img>, 'robot', crypto.randomUUID())
        ]); // we do not save the Loading response cause it is meant to be overwritten

        // clear the input box
        setInputText('');

        const response = await Chatbot.getResponseAsync(inputText);
        // get a chat message from the robot
        setChatMessages([
            ...newChatMessages,
            new chatMessage(response, 'robot', crypto.randomUUID())
        ]);

        setIsLoading(false);
    }

    // shortcuts
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            sendMessage();
        } else if (event.key === 'Escape') {
            setInputText('');
        }
    }

    function clearMessages() {
        setChatMessages([]); // clear all current chat messages
    }

    // <input></input>  JSX is more strict, so the closing tag is also needed
        // could also using self-closing element shortcut
    return (
        // if we set the input element's value attribute to inputText, then b/c inputText turns 
        //  empty after a value is sent, the value inside the input box will become empty as well
        //  this allow us to empty the text box after a message is sent
        <div className="chat-input-container">
            <input 
                placeholder="Send a message to Chatbot"
                className="chat-input"
                onChange={saveInputText}
                onKeyDown={handleKeyDown}
                value={inputText}
            />
            <button
                onClick={sendMessage}
                className="send-button"
            >Send</button>
            <button
                onClick={clearMessages}
                className="clear-button"
            >Clear</button>
        </div>
    );
}