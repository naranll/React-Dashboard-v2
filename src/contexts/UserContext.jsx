import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    // const [user, setUser] = useState({});

    const loginHandler = (input) => {
        input.preventDefault();
        const user = {
            email: input.target.usermail.value,
            password: input.target.userpass.value,
        }

        const sendUser = async () => {
            await axios.post("http://localhost:5500/login", user)
                .then((res) => console.log(res.data))
                .catch((err) => console.log("error user axios", err.response.data))
        }
        sendUser();
    };


    return <UserContext.Provider value={{ loginHandler }}>
        {children}
    </UserContext.Provider>
}
