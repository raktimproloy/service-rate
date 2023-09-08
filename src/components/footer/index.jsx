import React from 'react'

function index() {
  return (
    <footer className='mt-5 border-top' style={{background: "#F52576"}}>
    <div className="container py-4">
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div>
          <img src="/public/service-rate-logo.svg" alt="" style={{width: "70%"}} />
          <p className="mb-30 footer-desc mt-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta facilis
            eos quia optio iusto odit atque eum tempore, quisquam officiis vero veniam hic,</p>
        </div>
      </div>
      <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
        <div className="">
          <h4 style={{color: "white", fontWeight: "bold"}}>Quick Link</h4>
          <ul className="list-unstyled mt-3">
            <li>
              <a href="#" className="text-decoration-none text-white">Home</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-white">About Us</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-white">Service</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4 style={{color: "white", fontWeight: "bold"}}>Service</h4>
          <ul className="list-unstyled mt-3">
            <li>
              <a href="#" className="text-decoration-none text-white">Marketing</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-white">Branding</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-white">Web Design</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-white">Graphics Design</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4 style={{color: "white", fontWeight: "bold"}}>Newsletter</h4>
          <div className='mt-3'>
            <label  className="form-label text-white">Subscribe To Our Newsletter</label>
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