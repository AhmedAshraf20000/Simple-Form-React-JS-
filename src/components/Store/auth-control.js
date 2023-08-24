import { createContext, useState, useEffect } from "react"

const AuthControl = createContext({ isLoggedIn: false, logOutHandler: () => { }, logInHandler: () => { } });

export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        localStorage.getItem('isLoggedIn') && setIsLoggedIn(true);
    }, [])

    const logInHandler = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', '1')
    };

    const logOutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn')
    }
    return (
        <AuthControl.Provider value={{ isLoggedIn: isLoggedIn, logOutHandler: logOutHandler, logInHandler: logInHandler }}>
            {props.children}
        </AuthControl.Provider>
    );
}

export default AuthControl;