import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";
import DishData from "./DishData";

const MenuList = () => {
    const[dishList, setDishList] = useState([])
    const[expandedTitle, setExpandedTitle] = useState(null)

    const dispatch = useDispatch()
    const handleAddItem = (itemName) => {
      dispatch(addItem(itemName))
    }

   

    const handleClick = (categoryTitle) => {
       setExpandedTitle( expandedTitle === categoryTitle ? null : categoryTitle)
    }

    return (
      
        <div className="flex m-5 justify-center">
           <DishData setDishList={setDishList}/>
          <div className="  w-3/6 ">
            {dishList.map((category, index) => (
              <div key={index}>
                <div className="bg-red-400 p-2 text-2xl hover:cursor-pointer rounded-lg m-1 "
                 onClick={()=>handleClick(category.card.card.title)}>
                {category.card.card.title}
                </div >
                
                <ul>
                  {expandedTitle===category.card.card.title && category.card.card.itemCards.map((item, itemIndex) => (
                   <li className="flex  p-2 bg-red-300" key={itemIndex}>
                   <div className="flex flex-col ">
                       <div>{item.card.info.name}</div>
                       <div className="text-gray-700">Rs. {item.card.info.price / 100}</div>
                   </div>
                   <div className="ml-auto">
                       <button 
                           className="bg-green-500 text-white px-2 py-1 rounded"
                           onClick={() => handleAddItem(item.card.info.name)}
                       >
                           Buy
                       </button>
                   </div>
               </li>
               
                  ))}
                </ul>
              </div>
            ))}
          </div>
         
        </div>
      );
    };

export default MenuList