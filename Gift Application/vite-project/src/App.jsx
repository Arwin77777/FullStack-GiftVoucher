
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Tables } from './pages/Tables'
import { Profile } from './pages/Profile'
import { Hero404 } from './pages/Hero404'
import Login from './pages/Login'
import Home from './pages/Home'
import 'rsuite/dist/rsuite.min.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
import Signup from './pages/Signup'
import AdminLogin from './pages/AdminLogin'
import Categories from './pages/categories'
import UserProfile from './pages/UserProfile'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AddThemes from './pages/AddThemes'
import AddGifts from './pages/AddGifts'
// import ProductDetailPage from './pages/GiftDetails'
import Gifts from './pages/Gifts'
import { useState } from 'react'
import Product from './pages/GiftDetails'
import Cart from './pages/Cart'
import EditUser from './pages/EditUser'

function App() {

  

  const router = createBrowserRouter([  
    {
      path:"/",
      element:<Login></Login>
    },
    {
      path:"/editUser",
      element:<EditUser></EditUser>
    },
    {
      path:"/signup",
      element:<Signup></Signup>
    },
    {
      path:"/admin",
      element:<AdminLogin/>
    },
    {
      path:"/categories",
      element:<Categories />
    },
    {
      path:"/userProfile",
      element:<UserProfile></UserProfile>
    },
    {
      path:'/home',
      element:<Home></Home>
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/tables',
      element:<Tables/>
    },
    {
      path:'/hero404',
      element:<Hero404/>
    },
    {
      path:'/addThemes',
      element:<AddThemes></AddThemes>
    },
    {
      path:'/addGifts',
      element:<AddGifts></AddGifts>
    },
    {
      path:'/gifts',
      element:<Gifts ></Gifts>
    },
    {
      path:'/details',
      element:<Product></Product>
    },
    {
      path:'/cart',
      element:<Cart></Cart>
    }


   

  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
