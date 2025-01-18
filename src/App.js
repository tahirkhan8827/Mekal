import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Header from './Component/Header'
import OffiMekal from './Component/OffiMekal'
import Home from './Component/Pages/home/Home'

const App = () => {
  return (
    <>
        {/* <Header/> */}
        <OffiMekal/>
        <Home/>
    </>
  )
}

export default App