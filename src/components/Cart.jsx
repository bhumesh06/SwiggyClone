import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList,{HOCItemlist} from './ItemList'
import {clearCart} from "../utils/cartSlice"

const Cart = () => {

//hof
const HOCItemList = HOCItemlist(ItemList)

//making subscriber

const cartItems = useSelector((store)=> store.cart.items)

const dispatch = useDispatch();

const handleClearcart =()=>{

    dispatch(clearCart())
}


  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>
        cart
      </h1>
      <div className='w-6/12 m-auto'>
      <button className='bg-green-400 hover:bg-green-400 rounded-md' onClick={handleClearcart}>Clear cart</button>
      <HOCItemList items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart
