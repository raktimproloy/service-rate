import React from 'react'

function index() {
  return (
    <section className="section gray-bg" id="blog">
            <div className="container">
            <h1 className="mb-3" style={{color: "#F52576"}}>Our Blog</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <a href="#">
                                    <img src="/story1.jpg" title="" alt="" style={{width: "100%", height: "20rem"}}/>
                                </a>
                            </div>
                            <div className="blog-info my-3">
                                <h2 style={{color: "#F52576"}}>Lorem ipsum dolor sit.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <a href="#">
                                    <img src="/story2.jpg" title="" alt="" style={{width: "100%", height: "20rem"}}/>
                                </a>
                            </div>
                            <div className="blog-info my-3">
                                <h2 style={{color: "#F52576"}}>Lorem ipsum dolor sit.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <a href="#">
                                    <img src="/story3.jpg" title="" alt="" style={{width: "100%", height: "20rem"}}/>
                                </a>
                            </div>
                            <div className="blog-info my-3">
                                <h2 style={{color: "#F52576"}}>Lorem ipsum dolor sit.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-center my-4'>
                    <button className='px-4 py-2' style={{background: "#3ABFF8", color:"black", borderRadius: "10px", border: "1px solid white"}}>See More</button>
                </div>
            </div>
        </section>
  )
}

export default index