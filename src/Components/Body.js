import ResData from "./ResData"
import { useEffect, useState } from "react"
import ResCard from "./ResCard"
import { useContext } from "react"
import { ResContext } from "./ResContext"
import { Link } from "react-router-dom"
import GoodResCard from "./GoodResCard"

const Body = () => {
    const {resList, setResList, filteredrestaurant,setFilteredRestaurant} = useContext(ResContext)
    const[searchText, setSearchText] = useState("")
    const WithGoodResCard = GoodResCard(ResCard)

    useEffect(()=>{
        setFilteredRestaurant(resList)
    },[resList])

    const filterRes = () => {
        const filteredRes = resList.filter((res) => 
            res.info.avgRating > 4
        )
        setFilteredRestaurant(filteredRes)
    }
    const searchRes = () => {
        const filteredRes = resList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
        setFilteredRestaurant(filteredRes)
    }
    return(
        <div className="">
            
            <ResData setResList={setResList}/>
            
            {console.log("body loaded")}

            <input className="bg-red-100 m-2 p-2 rounded-lg t"
                onChange={(change)=>setSearchText(change.target.value)}
                placeholder="Enter Restaurant Name" type="text"/>

            <button className="m-5 bg-orange-200 py-2 px-4 rounded-lg"
                onClick={()=>searchRes()}>Search</button>
                
            <button className=" m-5 bg-orange-200 py-2 px-4 rounded-lg"
                onClick={()=>filterRes()}>Filter</button>

            <div className="flex flex-wrap gap-5 m-5">
            {filteredrestaurant.map((res) => (
                <Link to={`/dishlist/${res.info.id}`} key={res.info.id}>
                    {res.info.avgRating>4?<WithGoodResCard res={res}/>:<ResCard res={res} />}
                
                </Link>
            ))}
            </div>
        </div>
    )
}
export default Body