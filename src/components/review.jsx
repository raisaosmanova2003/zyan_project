import React from 'react'

const Review = () => {
  return (
    <section className='review'>
      <div className="review_title">
        <h5>CLIENT REVIEWS</h5>
        <h2>What people are saying</h2>
      </div>

      <div className="review_cards">
        <div className="review_card">
            <div className="review_card_img">
              <img src="https://zyan.vercel.app/images/testimonial/1.jpg" alt="" />
            </div>
            <div className="review_card_icons">
                <ul>
                    <li><i className="fa-solid fa-star" ></i></li>
                    <li><i className="fa-solid fa-star" ></i></li>
                    <li><i className="fa-solid fa-star" ></i></li>
                    <li><i className="fa-solid fa-star" ></i></li>
                    <li><i className="fa-solid fa-star" ></i></li>
                </ul>
            </div>
            <div className="review_card_title">
            <h3>Eleanor pena</h3>
              <h5>Marketing Coordinator</h5>
              </div>
              <div className="review_card_left">
              <p >
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
              </div>
              {/* <div className="review_card_right"></div> */}
        </div>
        <div className="review_card">
            <div className="review_card_img">
              <img src="https://zyan.vercel.app/images/testimonial/2.jpg" alt="" />
            </div>
            <div className="review_card_icons">
                <ul>
                    <li><i className="fa-solid fa-star" ></i></li>
                    <li><i className="fa-solid fa-star" ></i></li>
                    <li><i className="fa-solid fa-star" ></i></li>
                    <li><i className="fa-solid fa-star" ></i></li>
                    <li><i className="fa-solid fa-star" ></i></li>
                </ul>
            </div>
            <div className="review_card_title">
            <h3>Eleanor pena</h3>
              <h5>Marketing Coordinator</h5>
              </div>
              <div className="review_card_left">
              <p >
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
              </div>
              {/* <div className="review_card_right"></div> */}
        </div>
      </div>

      <div className="review__wrapper">
        <div className="wrapper">
          <ul>
            <li>PHP </li> 
            <li>Python</li>
            <li>design</li>
            <li>word</li>
            <li>Development</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Review
