import React, { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

const calculatingRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
};

export const AuthContextProvider = (props) => {

    const initailToken = localStorage.getItem('token');
    const [token, setToken] = useState(initailToken);
    const userIsLoggedIn = !!token;

    const loginHandler = (token, expirationTime) => {
        setToken(token)
        localStorage.setItem('token', token);
        const remainingTime = calculatingRemainingTime(expirationTime);
        setTimeout(logoutHandler, remainingTime);
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };


    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;