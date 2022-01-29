import React from "react";

// This is an object that will contain the component
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;