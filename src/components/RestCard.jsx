import { CDNURL } from "../utils/constant.js"




const RestCard =({resData})=>{
    
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300  ">
      <img className="rounded-lg" alt="reslogo" src={ CDNURL + resData.info.cloudinaryImageId} ></img>
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.avgRating} Rating</h4>
      <h4>{resData.info.costForTwo} </h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
  
  
    </div>
  )
  
  }


  //creating higher order component 

  //input- restcard => output restcardPromoted

   export const withPromotedLabel = (RestCard) =>{
   return (props)=>{
    return(
      <>
      <div>
        <label className="absolute bg-black text-white rounded-lg">Promoted</label>
        <RestCard {...props}/>
      </div>
      </>
    )
   }
  }
  
  export default RestCard