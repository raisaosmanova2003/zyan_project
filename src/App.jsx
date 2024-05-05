// import { useState } from 'react'
import './App.css'
import Header from "../src/components/header"
import Info from "./components/info"
import Service from "./components/service"
import About from "./components/about"
import Design from "./components/design"
import Education from './components/education'
import Portfolio from './components/portfolio'
import Review from './components/review'
import Blog from './components/blog'
import Subscribe from './components/subscribe'
import Footer from './components/footer'
function App() {

  return (
    <>
     <Header/>
     <Info/>
     <Service/>
     <About/>
     <Design/>
     <Education/>
     <Portfolio/>
     <Review/>
     <Blog/>
     <Subscribe/>
     <Footer/>
    </>
  )
}

export default App
