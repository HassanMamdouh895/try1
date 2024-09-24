import React, { Children } from "react";

import "./App.css";

// import Parent from "./Components/Parent/Parent";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";
const router= createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true ,element:<Home/>},
  {path:"about",element:<About/>},
  {path:"portfolio",element:<Portfolio/>},
  {path:"contact",element:<Contact/>},

  ]}
  
])
function App() {
  return (
    <RouterProvider router={router}>
      
      
    </RouterProvider>
  );
}

export default App;
