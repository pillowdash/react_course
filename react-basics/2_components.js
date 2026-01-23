
function LoginForm() {
    return (
        <>
            <div>
                <input placeholder="Email"></input>
            </div>
            <div>
                <input placeholder="Password" type="password"></input>
            </div>
            <button>Login</button>
            <button>Sign up</button>
        </>
    );
}

function App() {
    return (
        <>
            <p>hello, welcome to my website</p>
            <LoginForm />
        </>
    );
}

ReactDOM.createRoot(document.querySelector('.js-container')).render(<App />);
