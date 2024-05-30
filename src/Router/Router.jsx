import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Basket from '../Pages/basket/Basket'
import Wishlist from '../Pages/wishlist/Wishlist'
import Dashboard from '../Pages/dashboard/Dashboard'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router