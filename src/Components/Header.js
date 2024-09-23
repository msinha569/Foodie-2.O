import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import useInternetStatus from "./useInternetStatus"
import { useContext } from "react"
import { ResContext } from "./ResContext"
import React from "react"

const Header =React.memo(() => {

    const cart = useSelector((store)=>store.cart.items)
    const {setFilteredRestaurant, resList} = useContext(ResContext)
    const InternetStatus = useInternetStatus()
    

    const handleClick = () => {
        setFilteredRestaurant(resList)
    }

   

    return(
        <div className="flex flex-wrap justify-between  shadow-lg ">
            <img className="w-28" src="\simple-illustration-of-food-delivery-and-restaurant-logo-design-inspiration-icon-vector.jpg"/>
            <div className="flex flex-wrap m-8 gap-14 ">
            <div className="hover:text-red-500 transition-colors cursor-pointer duration-300" onClick={()=>handleClick()}>
                <Link to="/">Home</Link></div>
            <div className="hover:text-red-500 transition-colors cursor-pointer duration-300">
                <Link to="/contact">Contact</Link></div>
            <div className="hover:text-red-500 transition-colors cursor-pointer duration-300">
                Status: {InternetStatus?"Online":"Offline"}</div>
            <div className="hover:text-red-500 transition-colors cursor-pointer duration-300">
                <Link to="/cart">Cart-{cart.length}</Link></div>
            <div className="hover:text-red-500 transition-colors cursor-pointer duration-300">
                Login</div>
            {console.log("header loaded")}
            </div>
        </div>
    )
}
) 
export default Header