import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Routers from '../routes/Routers'

function Layouts() {
  return (
    <>
    <Header/>
    <main>
      <Routers/>
    </main>
    <Footer/>
    </>
  )
}

export default Layouts