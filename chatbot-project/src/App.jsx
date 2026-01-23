import { useState, useEffect } from 'react' // imports from the react folder in node_modules
import ChatInput from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx';
import { Chatbot } from 'supersimpledev';

// this is a feature of vite: it allows us to import any file, like a css file or even an image
import './App.css' 

function App() {
    // adding custom responses for the chatbot
    useEffect(() => {
        Chatbot.addResponses({ 
            dih: 'dih',
            goodbye: () => {
                return 'bye bye!';
            }
        });
    }, []);

    // load from local storage
    const [ chatMessages, setChatMessages ] = useState(JSON.parse(localStorage.getItem('messages')) || []);

    // save messages to local storage 
    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(chatMessages))
    }, [chatMessages])

    return (
        <div className="app-container">
            {chatMessages.length === 0 && 
            <p className="welcome-message">
                Welcome to the chatbot project! Send a message using the textbox below
            </p>}
            <ChatMessages 
                chatMessages={chatMessages}
            />
            <ChatInput 
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

export default App
