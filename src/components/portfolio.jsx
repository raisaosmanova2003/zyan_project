import React from 'react'

const Portfolio = () => {
  return (
    <section className='my_portfolio'>
       <div className="my_portfolio_title">
         <h5>MY RECENT PORTFOLIO</h5>
         <h2>Elevate your brand to new <br />
heights with our portfolio expertise</h2>
       </div>
       <div className="my_portfolio_images">
         <div className="my_portfolio_image">
           <img src="https://zyan.vercel.app/images/portfolio/1.jpg" alt="" />
         </div>
         <div className="my_portfolio_image">
           <img src="https://zyan.vercel.app/images/portfolio/2.jpg" alt="" />
         </div>
         <div className="my_portfolio_image">
           <img src="https://zyan.vercel.app/images/portfolio/3.jpg" alt="" />
         </div>
         <div className="my_portfolio_image">
           <img src="https://zyan.vercel.app/images/portfolio/4.jpg" alt="" />
         </div>
       </div>
    </section>
  )
}

export default Portfolio
