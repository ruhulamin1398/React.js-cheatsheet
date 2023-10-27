import React from "react";

export const UserContext = React.createContext();
export const UserContextProvider = ({ children }) => {

    const users = ['user1', 'user2', 'user3']
    return (
        <UserContext.Provider
            value={{
                users
            }}
        >
            {children}
        </UserContext.Provider>
    )
}