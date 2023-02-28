import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Faq from 'Pages/Faq'
import Home from 'Pages/Home'
import DefaultPage from 'Pages/DefaultPage'
import Contact from 'Pages/Contact'
import StockPage from 'Pages/StockPage'
import NotFound from 'Pages/NotFound'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/:id' element={<StockPage />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
