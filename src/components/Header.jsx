import { useContext, useState } from "react"
import { CDNLOGO } from "../utils/constant.js"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext.js"
import { useSelector } from "react-redux"


const Header = () =>{

    const [btnName , setbtnName]= useState("Login")

    const {loggedinUser} = useContext( UserContext)

    //selector hook: subscribing store

    const cartItems = useSelector((store)=> store.cart.items)
   

    return (
        
        <div className=" flex justify-between bg-pink-100 shadow-lg m-2 ">
            <div className="logocontainer">
               <img className="w-25" src={CDNLOGO}></img> 
            </div>
            <div className="flex items-center">
                <ul className="flex  p-4 m-4">
                    <li className="px-4"> <Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">contact</Link></li>
                    <li className="px-4"><Link to="/grocery">grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart( {cartItems.length} items)</Link></li>
                    
                    <button className="px-4 bg-green-400" onClick={()=>{
                        btnName ==="Login"?
                        setbtnName("LogOut") : setbtnName("Login")
                    }}>{btnName}</button>
                    <li className="px-4">{loggedinUser}</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Header