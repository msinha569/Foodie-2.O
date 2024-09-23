import { useEffect } from "react"
import { dist_url } from "../constants"
import { useParams } from "react-router-dom"

const DishData = ({ setDishList }) => {
    const { resId } = useParams()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(dist_url(resId))
        const json = await data.json()

        const list = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        const actualList = list.filter(
            (dish) => dish?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        setDishList(actualList)
    }

    return null // Returning null because this component doesn't render anything
}

export default DishData
