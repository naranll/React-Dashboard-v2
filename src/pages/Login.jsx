import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
    const { loginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    function register() {
        console.log("register button");
        navigate('/register')
    }

    return <div className="loginPage">
        <h2>Login Form</h2>
        <div className="loginForm">
            <form onSubmit={loginHandler}>
                <input type="mail" placeholder="Email" name="usermail" />
                <input type="text" placeholder="Password" name="userpass" />
                <button type="submit">Log In</button>
                <input type="button" onClick={() => register()} value="Register" className="registerBtn" />
            </form>
        </div>
    </div>
}

