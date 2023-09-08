import React from 'react'

function index() {
  return (
    <div className="py-5">
  <div className="container py-5">
  <h1 className="mb-3" style={{color: "#F52576"}}>What We Do</h1>
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm" style={{background: "black", color: "white"}}>Learn More</a>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="/what-we-do.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto"><img src="/what-we-do1.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
      <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm" style={{background: "black", color: "white"}}>Learn More</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default index