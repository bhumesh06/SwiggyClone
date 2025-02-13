import RestCard ,{withPromotedLabel}from "./RestCard"
//import reslist from "../utils/mockdata.js"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body =()=>{


  const [listofrest, setlistofrest]= useState([])
  const [listofrest2, setlistofrest2]= useState([])
  const [Searchtext , setSearchtext]= useState("")

  //hof
  const RestCardPromoted = withPromotedLabel(RestCard)

  //useeffect:  useEffect(()=>{callback function},[dependency array])
  useEffect(()=>{
   fetchdata();
   fetchdata2();
  },[])

  const fetchdata = async()=>{
   try {
     //while fetching data it will occur some error of cors so please download extension (cors chrome extension)
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
     const json = await data.json();
     console.log(json)
     //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
 
     //optional chaining
     setlistofrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 
   } catch (error) {
    console.log("error", error)
   }
  }

 const fetchdata2 = async()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json()
  setlistofrest2(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}





  //conditional rendering
 if ( listofrest?.length === 0){
  return(
    <Shimmer/>
  )
 }

 //console.log(listofrest)

//return listofrest?.length === 0 ? ( <Shimmer/>) : (


return (
  <div className="body" >
      <div className="flex m-4 p-4">
        <div className=" m-4 px-4 space-x-2 ">
          <input type="text" className="border border-black border-solid justify-between" value={Searchtext} onChange={(e)=>{setSearchtext(e.target.value)}}></input>
          
          <button className="bg-green-300 rounded-sm px-4" onClick={()=>{
            //filter the rest card according to seaarch
            const filterrest = listofrest.filter((res)=> res.info.name.toLowerCase().includes(Searchtext.toLowerCase()))
            setlistofrest(filterrest)
            setlistofrest2(filterrest)
            console.log(Searchtext)
          }} >Search</button>
          <button className="bg-green-300 rounded-sm px-4" onClick={()=>{
            //filter logic
            const filteredlist= listofrest.filter( (res) => res.info.avgRating>=4.5)
            console.log(filteredlist)
            setlistofrest(filteredlist)
            setlistofrest2(filteredlist)

          }}>Top rated Restaurants</button>
        </div>
          
       </div>
      
        <div className="grid grid-cols-4">
         
          {
            listofrest.map( restaurant =>
               <Link key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}>

                
                 
                 {
                   restaurant.info.isOpen ? <RestCardPromoted resData={restaurant}/> :  <RestCard  resData={restaurant}/>
                 }
                 
                 
                  </Link>)
          }

{
            listofrest2.map( restaurant =>
               <Link key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}>

                
                 
                 {
                   restaurant.info.isOpen ? <RestCardPromoted resData={restaurant}/> :  <RestCard  resData={restaurant}/>
                 }
                 
                 
                  </Link>)
          }

         
         
      </div>
  </div>
    )
  }

  
  export default Body



  //isme problem aya like map k related error ya fir unfefine wala error
  //so direct swiggy ka api check karo kyuki change higaya h



  //ep 6 last 10 mins code apply nahi kiya


  // { /** logic : if the restocard is with promoted then add proted label in it*/}
  