import axios from "axios";
import { createContext, useState } from "react";

export const AppContent = createContext();

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const user = JSON.parse(localStorage.getItem('User'));
    const userRole = user?.role;
    const userId = user?._id;

    const context = {
        backendUrl,
        userRole,
        userId,
    }

    return (
        <AppContent.Provider value={context}>
            {props.children}
        </AppContent.Provider>

    )
}