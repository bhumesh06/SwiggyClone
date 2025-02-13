import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENUAPI } from "../utils/constant"
import Restcategory from "./Restcategory"

const RestMenu =()=>{

    const[resInfo, setresInfo]= useState(null)

    const [ showIndex, setshowIndex]= useState(0)

    const {resid}= useParams()
    

    useEffect(()=>{
        fetchmenu();
    },[])


    const fetchmenu = async()=>{
        const data = await fetch( MENUAPI + resid)
        const json = await data.json();
        //console.log(json)
        setresInfo(json.data)

    }


    if(resInfo === null) return <Shimmer/>


    const { name , cuisines, costForTwo , avgRating} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     //   console.log(itemCards)
     //   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( each => each.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
    console.log(categories)
    return (
        <>
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p>{cuisines.join(",")}</p>
            {/**controlled component */}

            {
                categories.map((category , index)=>  <Restcategory key={category?.card?.card?.title}  carddata ={ category?.card?.card} showItems={index=== showIndex ? true : false} setshowIndex={()=> setshowIndex(index)}/>)
            }
           
        </div>
        </>
     )
}

export default RestMenu