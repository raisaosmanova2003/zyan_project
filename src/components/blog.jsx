import React from 'react'

const Blog = () => {
  return (
    <section className='blog'>
    <div className="blog_title">
    <div className="blog_title_left">
        <h5>MY BLOG</h5>
        <h2>Unlocking the potential of your <br />
personal brand</h2>

      </div>
      <div className="blog_title_right">
        <button>More Blog +</button>
      </div>
      
    </div>
      
      <div className="blog_cards">
        <div className="blog_card">
            <div className="blog_card_img">
            <img src="https://zyan.vercel.app/images/blog/1.jpg" alt="" />
                <div className="blog_card_box">
                <div className="blog_card_box_title">
                    <ul>
                        <li><i className="fa-solid fa-user"></i> By admin</li>
                        <li><i className="fa-solid fa-comment"></i> Comments (05)</li>
                    </ul>
                    <p>The standard personal My <br /> portfolio</p>
                </div>
                    <div className="blog_card_box_date">
                        <p>31 December, 2022</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog_card">
            <div className="blog_card_img">
            <img src="https://zyan.vercel.app/images/blog/2.jpg" alt="" />
                <div className="blog_card_box">
                <div className="blog_card_box_title">
                    <ul>
                        <li><i className="fa-solid fa-user"></i> By admin</li>
                        <li><i className="fa-solid fa-comment"></i> Comments (05)</li>
                    </ul>
                    <p>The standard personal My <br /> portfolio</p>
                </div>
                    <div className="blog_card_box_date">
                        <p>31 December, 2022</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog_card">
            <div className="blog_card_img">
            <img src="https://zyan.vercel.app/images/blog/3.jpg" alt="" />
                <div className="blog_card_box">
                <div className="blog_card_box_title">
                    <ul>
                        <li><i className="fa-solid fa-user"></i> By admin</li>
                        <li><i className="fa-solid fa-comment"></i> Comments (05)</li>
                    </ul>
                    <p>The standard personal My <br /> portfolio</p>
                </div>
                    <div className="blog_card_box_date">
                        <p>31 December, 2022</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
