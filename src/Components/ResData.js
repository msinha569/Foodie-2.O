import { res_url } from "../constants"
import { useState, useEffect } from "react"
const ResData = ({setResList}) => {
    

    useEffect(() => {
        fetchResData()
    },[])

    const  fetchResData = async() => {
        const data = await fetch(res_url)
        const json = await data.json()
        
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
}
export default ResData