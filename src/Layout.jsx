import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <div className='select-none'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout