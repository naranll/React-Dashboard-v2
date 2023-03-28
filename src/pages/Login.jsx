import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
    const { effectFunc } = useContext(UserContext);
    const navigate = useNavigate();

    function loginHandler(input) {
        input.preventDefault();
        // setUser([input.target.inName.value, input.target.inPass.value]);

        setUser(userLogin);
    }

    function register() {
        console.log("register button");
        navigate('/register')
    }

    return <div className="loginPage">
        <h2>Login Form</h2>
        <div className="loginForm">
            <form onSubmit={effectFunc}>
                <input type="text" placeholder="Email or phone number" name="inName" />
                <input type="text" placeholder="Password" name="inPass" />
                <button type="submit">Log In</button>
                <input type="button" onClick={() => register()} value="Register" className="registerBtn" />
            </form>
        </div>
    </div>
}

