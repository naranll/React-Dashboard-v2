import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
    const { effectFunc } = useContext(UserContext);

    function loginHandler(input) {
        input.preventDefault();
        // setUser([input.target.inName.value, input.target.inPass.value]);
        const userLogin = {
            name: input.target.inName.value,
            pass: input.target.inPass.value,
        }
        setUser(userLogin);
    }

    function register() {
        console.log("register button");
    }

    return <div className="loginPage">
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

