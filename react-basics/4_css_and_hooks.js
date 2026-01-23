function PasswordInput({showPassword, setShowPassword}) {
    return (
        <div>
            <input placeholder="Password" className="login-input" 
                type={!showPassword && 'password'}></input>
            <button onClick={() => {
                setShowPassword(!showPassword);
            }} className="register-button website-button">show</button>
        </div>
    );
}

function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <>
            <div>
                <input placeholder="Email" className="login-input"></input>
            </div>
            <PasswordInput 
                showPassword={showPassword}
                setShowPassword={setShowPassword}
            />
            <button className="register-button website-button">Login</button>
            <button className="register-button website-button">Sign up</button>
        </>
    );
}


function OnButton() {
    const [isButtonOn, setIsButtonOn] = React.useState(true);
    return (
        <div>
            <button 
                className={`${isButtonOn ? 'ON' : 'OFF'}-button website-button`}
                onClick={() => {
                    setIsButtonOn(!isButtonOn);
                }}
            >{isButtonOn ? 'ON' : 'OFF'}
            </button>
        </div>
    )
}

function Clock() {
    const [time, setTime] = React.useState(dayjs().format('HH:mm:ss'))

    React.useEffect(() => {
        setInterval(() => {
            setTime(dayjs().format('HH:mm:ss'));
        }, 1000);
    }, []);

    return (
        <p>Current time: {time}</p>
    );
}

function CounterButton({count, setCount, counterRef}) {
    function handleClick() {
        setCount(count+1);
    }

    return (
        <>
            <button 
                onClick={handleClick}
                ref={counterRef}
                className="website-button counter-button"
            >Time{count !== 1 && 's'} clicked: {count}
            </button>
        </>
    );
}

function Reset({setCount}) {
    return (
        <button onClick={() => {
            setCount(0);
        }} className="website-button counter-button">
            Reset
        </button>
    )
}

function AutoClick({counterRef}) {
    function handleClick() {
        setInterval(() => {
            const buttonElem = counterRef.current;
            buttonElem.click();
        }, 1000);
    }

    return (
        <>
            <button 
                onClick={handleClick}
                className="website-button counter-button"
            >Auto Click
            </button>
        </>
    );
}

function Counter() {
    // lift the state up: share the state between the 2 counter
    const [ count, setCount ] = React.useState(0);

    // we could just update count direclty using state, but we are practicing useRef here
    const counterRef = React.useRef(null);
    return (
        <div className="counter-container">
            <CounterButton
                count={count}
                setCount={setCount}
                counterRef={counterRef}
            />
            <Reset
                setCount={setCount}
            ></Reset>
            <AutoClick
                counterRef={counterRef}
            />
        </div>
    );
}

function App() {
    return (
        <>
            <OnButton />
            <p className="login-text">hello, welcome to my website</p>
            <LoginForm />
            <Clock />
            <Counter />
        </>
    )
}
ReactDOM.createRoot(document.querySelector('.js-container')).render(<App />);