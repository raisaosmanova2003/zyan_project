import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="header_logo">
          <img src="https://zyan.vercel.app/images/logo.png" alt="" />
      </div>
      <nav>
          <ul>
               <li><a href="">Home</a></li>
               <li><a href="">About us</a></li>
               <li><a href="">Services</a></li>
               <li><a href="">Projects</a></li>
               <li><a href="">Blog</a></li>
               <li><a href="">Contact</a></li>
          </ul>
      </nav>
      <div className="head_bar">
      <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  )
}

export default Header

