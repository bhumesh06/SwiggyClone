/**
 * header
 * -logo
 * -navitems
 * body
 * -search
 * -cardcontainer
 *   -rest card
 *      -img
 *      -name of rest , star rating , cuisines , delivery time
 * footer
 * -links
 */


-----------------------------------------------------------------------------------------------
 # map 

 const [List , setList] = useStae([])

 {
    List.map((restaurant)=>(<RestCard key={restaurant.info.id} resData= {restaurant}/> ))
 }


-----------------------------------------------------------------------------------------------

# filter

<button clasname="btn" onClick={()=>{
    const filteredData= List.filter((rest)=> rest.info.avgRating>= 4.5)
setList(filteredData)
}}>Top Rated Restaurant<button/>


-----------------------------------------------------------------------------------------------

# search 

const [SearchText , setSearchText] = useState("")

<div classname="search">
    <input type="text" classname="searchtext" value={SearchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
    <button classname="btnsearch" onClick={()=>{
        const FilteredSearched = List.filter((rest)=> rest.info.name.toLowerCase().includes(SearchText.toLowerCase()))
        setList(FilteredSearched)
    }}>Search<button/>


 -----------------------------------------------------------------------------------------------

 # fetch Api

 useEffect(()=>(
    fetchData();
 ),[])   


 const fetchData= async ()=>{
    const data = await fetch(".......swiggy api.......")
    const json = await data.json();

    //if you want to optional chaining the data 

    setList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurant)

 }


 -----------------------------------------------------------------------------------------------


 # useEffect hook

 useEffect(()=>{callback function},[dependency array])




 # redux tool kit
 - install @reduxjs/toolkit and react-redux
 - build our store
 - connect our store to our app ( bridge)
 - slice(cart slice)
 - dispatch(action)
 -selector




 #   S w i g g y C l o n e  
 