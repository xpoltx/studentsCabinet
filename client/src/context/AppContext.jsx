import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AppContent = createContext();

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("User");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const userRole = user?.role;
    const userId = user?._id;

    useEffect(() => {
        if (user) {
            localStorage.setItem("User", JSON.stringify(user));
        } else {
            localStorage.removeItem("User");
        }
    }, [user]);

    const context = {
        backendUrl,
        userRole,
        userId,
        setUser
    }

    return (
        <AppContent.Provider value={context}>
            {props.children}
        </AppContent.Provider>

    )
}