import React from 'react'

function index() {
  return (
    <footer className='mt-5 border-top' style={{background: "#2BD4BD"}}>
    <div className="container py-4">
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div>
          <img src="/service-rate-logo.svg" alt="" style={{width: "70%"}} />
          <p className="mb-30 footer-desc mt-3 text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta facilis
            eos quia optio iusto odit atque eum tempore, quisquam officiis vero veniam hic,</p>
        </div>
      </div>
      <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
        <div className="">
          <h4 style={{color: "black", fontWeight: "bold"}}>Quick Link</h4>
          <ul className="list-unstyled mt-3">
            <li>
              <a href="#" className="text-decoration-none text-dark">Home</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">About Us</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">Service</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4 style={{color: "black", fontWeight: "bold"}}>Service</h4>
          <ul className="list-unstyled mt-3">
            <li>
              <a href="#" className="text-decoration-none text-dark">Marketing</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">Branding</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">Web Design</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">Graphics Design</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4 style={{color: "black", fontWeight: "bold"}}>Newsletter</h4>
          <div className='mt-3'>
            <label  className="form-label text-dark">Subscribe To Our Newsletter</label>
            <input type="text" className="form-control" />
            <button className="btn mt-3" style={{background: "black", color: "white"}}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default index