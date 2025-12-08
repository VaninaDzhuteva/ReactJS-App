import { login, register } from "../services/authService.js";

import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    // Save user to localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            localStorage.removeItem('user');
        }
        
    }, [user]);

    // Load user from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('user');

        if (stored) {
            setUser(JSON.parse(stored));
        }
    }, []);

    // Register
    const registerHandler = async (email, password) => {
        const result = await register(email, password);
        setUser(result);
    }

    // Login
    const loginHandler = async(email, password) => {
        const result = await login(email, password);
        setUser(result);
    }

    // Logout
    const logoutHandler = () => {
        setUser(null);
        localStorage.removeItem('user')
    }

    const contextValues = {
        user,
        isAuthenticated: !!user?.accessToken,
        registerHandler,
        loginHandler
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
}