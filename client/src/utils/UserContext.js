import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || {});
    
    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;