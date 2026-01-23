import { useEffect, useRef } from 'react' // imports from the react folder in node_modules
import { ChatMessage } from './ChatMessage.jsx';
import './ChatMessages.css'

// creating our own custom hook (hook functions must start with use)
function useAutoScroll(dependencies) {
    // create a ref with an initial value of null
    const containerRef = useRef(null);

    // use the selected html element, and upon update, will autoscroll to bottom
    useEffect(() => {
        const containerElem = containerRef.current;
        if (containerElem) {
            // set the scrollbar's distance from top to the the height of the scrollbar
            containerElem.scrollTop = containerElem.scrollHeight;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
    // replace [chatMessages] with dependencies cause this is the one that will be autoscrolled

    return containerRef;
}

export default function ChatMessages({chatMessages}) {
    const chatMessagesRef = useAutoScroll([chatMessages]);

    return ( // we put the ref attribute onto this div to allow React to select it
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                );
            })}
        </div>
    );
}