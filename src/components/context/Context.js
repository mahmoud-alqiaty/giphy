import React, { createContext, useReducer, useState } from "react";
import { initialState, reducer } from "./Reducers";

export const stateContext = createContext()

const ContextProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [showHistory, setShowHistory] = useState(true)
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const [{loading, data, error, firstSiteHistory, secondSiteHistory}, dispatch] = useReducer(reducer, initialState)

    return (
        <stateContext.Provider value={{loading, data, error, dispatch, searchTerm, setSearchTerm, firstSiteHistory, secondSiteHistory, showHistory, setShowHistory, isSmallScreen, setIsSmallScreen}}>
            {children}
        </stateContext.Provider>
    )
}

export default ContextProvider
