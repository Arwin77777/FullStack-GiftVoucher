

import 'rsuite/dist/rsuite-no-reset.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// import First from './components/First';
import Second from './components/Second';
import Home from './pages/home'
// import Profile from "./pages/Profile"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./pages/categories";
import Login from "./pages/Login";
import Product from "./pages/Product";
import UserProfile from "./pages/Profile";
import { element } from 'prop-types';
import First from './components/First';
// import Product from "./pages/Product"



function App() {
  const router = createBrowserRouter([  
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/Categories',
      element:<Categories/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/product',
      element:<Product/>
    },
    {
      path:'/profile',
      element:<UserProfile/>
    },
    {
      path:'/second',
      element:<Second></Second>
    },
    {
      path:'/first',
      element:<First></First>
    }

  ])

  return (
    <>
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <CardSlider/> */}
      {/* <Categories/> */}
      {/* <Product/> */}
      {/* <Profile/> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
