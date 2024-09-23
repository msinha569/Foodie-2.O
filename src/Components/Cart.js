import { useSelector } from "react-redux"

const Cart = () => {
const cart = useSelector((store)=>store.cart)

    
    return(
        <div className="flex items-start flex-col  ">
            <div className="w-full font-bold text-3xl text-left mb-4 px-4"> Cart Contents:</div>
       {cart.items.map((item) => 
        <div className="bg-red-300 p-2 my-2 w-1/3 text-center rounded-md">{item}</div>
       )}
        </div>
    )
}
export default Cart