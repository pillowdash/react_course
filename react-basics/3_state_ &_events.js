
// Input Portion

function Display() {
    const [ text, setText ] = React.useState('');

    function saveInputText(event) {
        setText(event.target.value);
    }

    function setInputText(val = '') {
        setText(val);
    }

    return (
        <div>
            <input 
                placeholder="Type a name here"
                onChange={saveInputText}
                value={text}
            ></input>
            <button 
                onClick={() => {
                    setInputText();
                }
            }>Reset</button>
            <button 
                onClick={() => {
                    setInputText('alice');
                }
            }>Example</button>
            <p
                value={text}
            >{text}</p>
        </div>
    )
}

// Counter Portion

function CounterButton({count, setCount}) {
    //const [ count, setCount ] = React.useState(0);

    function handleClick() {
        console.log('clicked button');
        setCount(count+1);
    }

    return (
        <>
            <button onClick={handleClick}>
                Time{count !== 1 && 's'} clicked: {count}
            </button>
        </>
    );
}

function Reset({setCount}) {
    return (
        <button onClick={() => {
            setCount(0);
        }}>
            Reset
        </button>
    )
}

function Counter() {
    // lift the state up: share the state between the 2 counter
    const [ count, setCount ] = React.useState(0);
    return (
        <div>
            <CounterButton
                count={count}
                setCount={setCount}
            />
            <CounterButton
                count={count}
                setCount={setCount}
            />
            <Reset
                setCount={setCount}
            ></Reset>
        </div>
    );
}

function App() {
    return(
        <>
            <Counter />
            <Display />
        </>
    )
}

ReactDOM.createRoot(document.querySelector('.js-container')).render(<App />)