import ResCard from "./ResCard"

const GoodResCard = (ResCard) => {
    return (res) => {
        return(
            <div className="relative">
                <div className=" bg-yellow-200 px-2 rou absolute z-10 hover:scale-95 transition-transform duration-300">
                    BEST
                </div>
                <ResCard {...res}/>
            </div>
        )
    }
}

export default GoodResCard