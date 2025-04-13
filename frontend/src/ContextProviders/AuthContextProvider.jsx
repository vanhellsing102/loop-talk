import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const authInfo = {
        authUser,
        setAuthUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;