import Header from "./components/Header.jsx"

import "./App.css";

import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import ContactUs from './components/ContactUs.jsx';
import Body from './components/Body.jsx';
import RestMenu from "./components/RestMenu.jsx";
import { Provider } from "react-redux";
//import Grocery from "./components/Grocery.jsx";
import { lazy , Suspense } from "react";
import appStore from "./utils/appstore.js";
import Cart from "./components/Cart.jsx";
//import Grocery from "./components/Grocery.jsx";

//lazy loading of grocery : it will take few sec to render grocery isliye error aya 
//on demand loading

const Grocery = lazy(()=> import("./components/Grocery.jsx"))



const App =()=>{

    return (
       
        <Provider store={appStore}>
          <div className="app">
            <Header/>
           <Outlet/>
        
        </div>
        </Provider>
        
    )
}


 export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
          {
            path:"/",
            element:<Body/>
        },
          {
              path:"/about",
              element:<About/>
          },
          {
            path:"/grocery",
            element:<Suspense><Grocery/></Suspense>
          },
          {
            path:"/contact",
            element:<ContactUs/>
          },
          {
            path:"/restaurants/:resid",
            element:<RestMenu/>
          },
          {
            path:"/cart",
            element:<Cart/>
          }
        ]
    },
   
  ])
  





export default App