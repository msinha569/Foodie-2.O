import React, { Children, useMemo } from "react"
import { createContext } from "react"
import { useState } from "react"


export const ResContext = createContext()

export const ResContextProvider = ({children}) => {
    const[resList, setResList] = useState([])
    const[filteredrestaurant, setFilteredRestaurant] = useState([])
    
    const value = useMemo(() => ({
        resList, setResList, filteredrestaurant,setFilteredRestaurant
    }),[resList,filteredrestaurant])
    return(
        <ResContext.Provider
        value={value}>
            {children}
        </ResContext.Provider>
    )
}