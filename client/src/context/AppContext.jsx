import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AppContent = createContext();

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [user, setUser] = useState(null);
    const userRole = user?.role;
    const userId = user?._id;

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