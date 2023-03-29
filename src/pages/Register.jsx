import axios from "axios";

export default function Register() {
    function registerHandler(e) {
        e.preventDefault();
        const newUser = {
            email: e.target.usermail.value,
            password: e.target.userpass.value,
            name: e.target.username.value,
        }
        console.log("newUser", newUser);

        axios.post("http://localhost:5500/register", newUser)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }

    return <div className="loginPage">
        <h2>Register Form</h2>
        <div className="loginForm">
            <form onSubmit={registerHandler}>
                <input type="email" placeholder="Email or phone number" name="usermail" />
                <input type="text" name="username" />
                <input type="text" placeholder="Password" name="userpass" />
                <button type="submit">Register User</button>
            </form>
        </div>
    </div>
}