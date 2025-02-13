import { useState } from "react"
import ItemList from "./ItemList"


const Restcategory = ({carddata, showItems ,setshowIndex})=>{
    console.log(carddata)

   const handleclick =()=>{
    setshowIndex()
   }

    return(
        <div>
        {/**Header */}
       <div className="w-6/12 bg-gray-200 shadow-lg p-4 mx-auto my-4 rounded-sm ">
        <div className="flex justify-between" onClick={handleclick}>
        <span className="font-bold">{carddata.title} ({carddata.itemCards.length})</span>
        <span>^</span>
        </div>
         {/**accordion body  another component*/}
        {/* logic when i click then it will show all the list */}
        {
            showItems &&  <ItemList items={carddata.itemCards}/>
        }
       </div>
      
       
        </div>
    )
}

export default Restcategory