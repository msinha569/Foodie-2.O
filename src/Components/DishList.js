import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ResContext } from "./ResContext"
import MenuList from "./MenuList"

const DishList = () => {
    const {resId} = useParams()
    const {resList} = useContext(ResContext)
    const currentRes = resList.find((res)=>res.info.id === resId)
    const {name, cuisines, avgRating} = currentRes.info
    return (
        <div>
            <div className=" text-center ">
            <div className="text-7xl text-amber-400">{name}</div>
            <div className="text-3xl text-slate-500">{cuisines.join(", ")}</div>
            <div className="text-2xl text-zinc-700">{avgRating}</div>
            </div>
            <div>
                <MenuList />
            </div>
        </div>
    )
}
export default DishList