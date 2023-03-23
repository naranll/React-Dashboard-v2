import { UserContext } from "../App";

export default function Login(prop) {
    const { loginChecker } = prop;

    function getInput(input) {
        input.preventDefault();
        loginChecker(input.target.inName.value, input.target.inPass.value);
    }

    function register() {
        console.log("register button");
    }

    return <div className="loginPage">
        <div className="loginForm">
            <form onSubmit={getInput}>
                <input type="text" placeholder="Email or phone number" name="inName" />
                <input type="text" placeholder="Password" name="inPass" />
                <button type="submit">Log In</button>
                <input type="button" onClick={() => register()} value="Register" className="registerBtn" />
            </form>
        </div>
    </div>
}

