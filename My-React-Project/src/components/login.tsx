import './login.css';

const Login = () => {
    return (
        <div>
            <div className="login">
                <input type="email" placeholder="Enter Email" /><br/>
                <input type="password" placeholder="Enter Password" /><br/>
                <button>Login</button>
            </div>
        </div>
    )
};

export default Login;