import React from 'react'
import { CDNURL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import {addItems} from "../utils/cartSlice"

const ItemList = ({items}) => {
    console.log(items)


  const dispatch = useDispatch();  

  const handleadditems =(item)=>{
    //dispatch logic

        dispatch(addItems(item))


  }




  return (
    <div>
    {
        items.map((item)=> <div key={item.card.info.id} className='p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between'>
            
            <div className='w-9/12'>
            <div className='py-2'>
                
                <span className='font-bold'>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price/100}</span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>

            </div>
            <div className='w-3/12 p-4'>
            <div className='absolute'>
            <button className='p-2 bg-black text-white shadow-lg rounded-lg '   onClick={()=>handleadditems(item)}>Add +</button>

            </div>
            <img src={CDNURL + item.card.info.imageId} className='w-full'></img>
             </div>   
        </div>)
    }
    </div>
  )
}


//creating hoc
export const HOCItemlist =(ItemList)=>{
  return (props)=>{
    const {items} = props;
    return(
      <>
      {
        items.map((item)=> <div key={item.card.info.id} className='p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between'>
            
            <div className='w-9/12'>
            <div className='py-2'>
                
                <span className='font-bold'>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price/100}</span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>

            </div>
            <div className='w-3/12 p-4'>
          
            <img src={CDNURL + item.card.info.imageId} className='w-full'></img>
             </div>   
        </div>)
    }
      </>
    )
   }
}

export default ItemList
