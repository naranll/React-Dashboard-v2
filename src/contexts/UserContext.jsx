import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    // const [user, setUser] = useState({});

    const effectFunc = (input) => {
        input.preventDefault();
        const user = {
            name: input.target.inName.value,
            pass: input.target.inPass.value,
        }

        const sendUser = async () => {
            await axios.post("http://localhost:5500/login", user)
                .then((res) => console.log(res))
                .catch((err) => console.log("error user axios", err))
        }
        sendUser();
    };


    return <UserContext.Provider value={{ effectFunc }}>
        {children}
    </UserContext.Provider>
}
