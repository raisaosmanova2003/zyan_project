import React from 'react'

const About = () => {
  
  return (
    <section className='about'>
      <div className="about_left">
          <div className="about_left_title">
               <h5>ABOUT ME</h5>
               <h2>Transforming visions into  <br />
exceptional portfolios</h2>
          </div>
          <div className="about_left_subtitle">
               <p>Nemo design enim ipsam voluptatem quim voluptas sit <br /> aspernatur aut odit auting fugit sed thisnquia <br /> consequuntur magni dolores eos designer heresm qui ratione</p>
          </div>
          <button className='about_left_subtitle_btn'>Download Cv <i className="fa-solid fa-download"></i></button>
      </div>
      <div className="about_right">
          
            <div className="about_right_img">
              <img src="https://zyan.vercel.app/images/about_img.jpg" alt="" />
              <div className="about_right_img_btn">
                <div className="about_right_img_btn_left">
                <i className="fa-solid fa-chart-pie"></i>
                </div>
                <div className="about_right_img_btn_right">
                <h4>Daily Activity</h4>
                <p>Loream is ispam</p>
                </div>
              </div>
            </div>
          
      </div>
    </section>
  )
}

export default About