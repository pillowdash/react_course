import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import './ChatMessage.css'
import dayjs from 'dayjs'

export default class chatMessage {
    message; 
    sender;
    id; // we need an id b/c React needs a key prop to track changes

    constructor(message, sender, id) {
        this.message = message;
        this.sender = sender;
        this.id = id;
    }

    // convertToComponent() {
    //     return (
    //         <ChatMessage
    //             message={this.message}
    //             sender={this.sender}
    //             key={this.id}
    //         />
    //     );
    // }
}

// use the props parameter to create modular components
export function ChatMessage({ message, sender }) {
    return (
        // group in a div element because div is a 
        // block element (takes up entire line by itself)
        
        // note: && operator in dynamic languages like js and python are 'Value Selectors'

        // if first value is 'truthy', then return second value
        // else if first value is 'falsy' (undef, null, 0, false), then return first value
        <div className={`chat-message-${sender}`}>
            {sender === 'robot' && (
                <img src={RobotProfileImage} className="chat-message-profile"/>
            )}
            <div className="chat-message-text">
                {message}
                <div className="time-stamp">
                    {dayjs().format('h:mma')}
                </div>
            </div>
            {sender === 'user' && (
                <img src={UserProfileImage} className="chat-message-profile chat-message-profile-user"/>
            )}
        </div>
        // Note: In this case the && could be replaced with ternary operator
    );
}