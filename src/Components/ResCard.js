import { swiggy_assets } from "../constants"

const ResCard = ({res}) => {
    
    const {cloudinaryImageId, name, avgRating, cuisines} = res.info
    return(
        <div className="w-32 hover:scale-95 transition-transform duration-300">
                <img className="w-28 h-28 rounded-md " src={swiggy_assets + cloudinaryImageId }/>
                <div className="text">{name}</div>
                <div>{avgRating}</div>
                <div>{cuisines.join(", ")}</div>
        </div>
    )
}
export default ResCard