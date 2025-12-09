import { login, logout, register } from "../services/authService.js";

import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export function UserProvider({children}) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const isAuthenticated = !!token;

    // Save user to localStorage
    useEffect(() => {
        if (user && token) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
        
    }, [user, token]);

    // Load user from localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        const savedToken = localStorage.getItem("authUser");

        if (savedUser && savedToken) {
            setUser(JSON.parse(savedUser));
            setToken(savedToken);
        }
    }, []);

    // Register
    const registerHandler = async (email, password) => {
        const result = await register(email, password);
        setUser(result);
        setToken(result.accessToken);
    }

    // Login
    const loginHandler = async(email, password) => {
        const result = await login(email, password);
        setUser(result);
        setToken(result.accessToken);
    }

    // Logout
    const logoutHandler = async () => {
        if (token) {
            await logout(token);
        } 

        setUser(null);
        setToken(null);
    }

    const contextValues = {
        user,
        token,
        isAuthenticated,
        registerHandler,
        loginHandler,
        logoutHandler
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
}